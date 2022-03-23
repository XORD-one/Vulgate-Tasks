// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract SendAndWithdrawEthers {
    
    uint usersCount=0;
    mapping (address => uint) userToAmount;
    mapping (uint => address) usersRecord;

    event entrySuccess (uint usersCount, address userAddress);
    event ethersDepositSuccess(address userAddress, uint amount);
    event ethersWithdrawSuccess(address userAddress, uint leftAmount);

    function makeEntry () public {
        usersRecord[usersCount] = msg.sender;
        emit entrySuccess(usersCount, msg.sender);
    }

    function depositEthers () public payable {
        userToAmount[msg.sender] = msg.value;
        emit ethersDepositSuccess(msg.sender, msg.value);
    }

    function withdrawEthers (uint _amount) public payable {
        require(msg.sender != address(0), "invalid wallet address");
        address  userAddress = msg.sender;
        uint specificUserAmount = userToAmount[userAddress];
        require(_amount <= specificUserAmount, "Insufficient balance");
        payable(userAddress).transfer(_amount);
        uint leftoverAmount = userToAmount[userAddress];
        userToAmount[userAddress] = specificUserAmount - _amount;

        emit ethersWithdrawSuccess(userAddress, leftoverAmount);
        
    }

}