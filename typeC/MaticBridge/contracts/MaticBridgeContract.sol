// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

contract MaticBridgeContract{
    address public owner;
    address constant public tokenAddress = 0x574E0117a8c7B9b678c67061BB8528A3b932Ac7e; // Matic token address
    function _safeMint(address _to, uint256 _value) public payable{

    }
    // function mint(address _to, uint256 _amount) public payable{
    //     require(_to != address(0));
    //     require(_amount > 0);
    //     require(msg.sender == owner);
    //     balances[_to] += _amount;
    // }


}