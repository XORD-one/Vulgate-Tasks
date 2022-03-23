// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Child.sol";

contract Parent is  Ownable{
    uint childNumber = 0;

    event ChildGeneration(string _name, address _parentAddress, uint _childNumber);

    Child child;

    function childGeneration  (string memory _name) external  onlyOwner {
        child = new Child(_name);
        require(address(child) != address(0), "Parent: Undeployed child contract");
        child.validateTheCreation();
        childNumber+=1;
        emit ChildGeneration(_name, address(this), childNumber);
    }
    
}