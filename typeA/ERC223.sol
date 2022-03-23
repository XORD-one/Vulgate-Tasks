// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "hardhat/console.sol";
// import "browser/ERC223.sol";
// import "browser/ERC223ReceivingContract.sol";

interface ERC223 {
    function transfer(address to, uint value, bytes calldata data) external;
    event Transfer(address indexed from, address indexed to, uint value, bytes indexed data);
}

interface ReceiverContract { 
    function tokenFallback(address _from, uint _value, bytes calldata _data) external;
}

contract Mutahhir is ERC223 {
    string public symbol;
    string public  name;
    uint8 public decimals;
    uint public _totalSupply;

    mapping(address => uint) balance;

    // one coin owner allows another user to spend coins on its behalf
    // owner => recipient => remaining
    mapping(address => mapping(address => uint)) allowed;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event TransferFrom(address indexed from, address indexed to, uint256 value);

    event Approval(address indexed from, address indexed to, uint256 value);
    event mint(address indexed to, uint256 value);

    constructor () ERC223() {
        symbol = "MIT";
        name="Mutahhir";
        decimals = 8;
        _totalSupply= 100000000000000 ;
        balance[msg.sender] = _totalSupply; 
    }
    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address _owner) public view returns (uint256){
        return balance[_owner];
    }

    function isContract(address addr) public view returns (bool) {
        uint size;
        assembly { size := extcodesize(addr) }
        return size > 0;
    }

    function transfer(address _to, uint256 _value) public returns (bool success){
        require(_to != address(0), "Mutahhir:: invalid address");
        require(balance[msg.sender] >= _value, "Mutahhir:: insufficient balance");
        balance[msg.sender] -= _value;
        balance[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
    function _mint(address _account, uint256 _amount) public {
        require(_account != address(0), "Mutahhir: can't mint on an invalid address");
        _totalSupply += _amount;
        balance[_account] += _amount;
        emit mint(_account, _amount);
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success){
        
        require(_to != address(0), "Mutahhir:: invalid address");
        require(balance[_from] >= _value, "Mutahhir:: insufficient balance");
        require(allowance(_from, _to) >= _value, "Mutahhir:: not allowaed");
        balance[_from] -= _value;
        balance[_to] += _value;
        emit TransferFrom(_from, _to, _value);
        return true;
    }

    // recommends that there are no checks for the approval double-spend attack
    // as this should be implemented in user interfaces 
    function approve(address _spender, uint256 _value) public returns (bool success) {
        require(_spender != address(0), "Mutahhir:: invalid address");
        allowed[msg.sender][_spender] = _value;
        console.log(allowed[msg.sender][_spender]);
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender) public view returns (uint256 remaining) {
        return allowed[_owner][_spender];

    }


    //---------------------------------------------------- E R C 2 2 3 -----------------------------------------

    function transfer (address _to, uint _value, bytes calldata _data) external override {
        
        address caller = msg.sender;

        require(_to != address(0) && isContract(_to), "Mutahhir:: invalid address");
        require(balance[caller] >= _value, "Mutahhir:: insufficient balance");
        balance[caller] -= _value;
        balance[_to] += _value;
        ReceiverContract _receivingContract = ReceiverContract(_to);
        _receivingContract.tokenFallback(caller, _value, _data);

        emit Transfer(caller, _to, _value);
    }
}