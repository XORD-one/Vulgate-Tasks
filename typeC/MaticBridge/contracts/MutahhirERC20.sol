// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MutahhirERC20  is IERC20{
    string public symbol;
    string public  name;
    uint8 public decimals = 18;
    uint public override totalSupply = 10000000000;
    uint public _totalTokens;

 
    mapping(address => uint) balance;

    // one coin owner allows another user to spend coins on its behalf
    // owner => recipient => remaining
    mapping(address => mapping(address => uint)) allowed;

    // event Transfer(address indexed from, address indexed to, uint256 value);
    event TransferFrom(address indexed from, address indexed to, uint256 value);

    // event Approval(address indexed from, address indexed to, uint256 value);

    constructor (string memory  _name, string memory _symbol) {
        symbol = _symbol;
        name=_name;
        balance[msg.sender] = totalSupply; 
    }

    function balanceOf(address _owner) public view override returns (uint256){
        return balance[_owner];
    }

    function transfer(address _to, uint256 _value) public override returns (bool success){
        require(_to != address(0), "Mutahhir:: invalid address");
        require(balance[msg.sender] >= _value, "Mutahhir:: insufficient balance");
        balance[msg.sender] -= _value;
        balance[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public override returns (bool success){
        
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
    function approve(address _spender, uint256 _value) public override returns (bool success) {
        require(_spender != address(0), "Mutahhir:: invalid address");
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender) public view override returns (uint256 remaining) {
        return allowed[_owner][_spender];

    }

    function _mint(address _account, uint256 _amount) public 
    {
        require(_account!=address(0));
        require(_totalTokens + _amount <= totalSupply,"Mutahhir: mint limt reached");
        _totalTokens += _amount;
        balance[_account] += _amount;
        // emit Transfer(address(0), _account, _amount);
    } 



}