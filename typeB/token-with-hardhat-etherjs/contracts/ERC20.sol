// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Mutahhir {
    string public symbol;
    string public  name;
    uint8 public decimals;
    uint public _totalSupply;
    uint public _totalTokens;


    mapping(address => uint) balance;

    // one coin owner allows another user to spend coins on its behalf
    // owner => recipient => remaining
    mapping(address => mapping(address => uint)) allowed;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event TransferFrom(address indexed from, address indexed to, uint256 value);

    event Approval(address indexed from, address indexed to, uint256 value);
    event Mint(address indexed to, uint256 value);

    constructor () {
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

    function transfer(address _to, uint256 _value) public returns (bool success){
        require(_to != address(0), "Mutahhir:: invalid address");
        require(balance[msg.sender] >= _value, "Mutahhir:: insufficient balance");
        balance[msg.sender] -= _value;
        balance[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
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
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender) public view returns (uint256 remaining) {
        return allowed[_owner][_spender];

    }

    function _mint(address _account, uint256 _amount) public
    {
        require(_account!=address(0));
        require(_totalTokens + _amount <= _totalSupply,"Mutahhir: mint limt reached");
        _totalTokens += _amount;
        balance[_account] += _amount;
        emit Mint(_account, _amount);
    } 

}