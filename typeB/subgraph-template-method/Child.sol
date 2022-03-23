// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;


contract Child {
    string name;
    bool isDeployed = false;

    event Initialize(address _parentAddress, address childAddress, string _name);

    constructor(string memory _name) {
        name = _name;
        isDeployed = true;
    }
    function validateTheCreation() external {
        emit Initialize(msg.sender, address(this), name);
    }
 
}