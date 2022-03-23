// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;


contract WithdrawAfterTime {
    uint usersCount=0;
    mapping(uint => address) userMapRecord;
    
    // mapping (address => uint) userToAmount;
    mapping (address => userRecord) userToAmount;

    event entrySuccess (uint usersCount, uint entryTime, address userAddress);
    event ethersDepositSuccess(address userAddress, uint amount, uint currentTime);
    event ethersWithdrawSuccess(address userAddress, uint leftAmount);


    struct userRecord{
        address userAddress;
        uint freezeTime;
        uint amount;
        
    }
    
    function makeEntry () public {
        // userMapRecord[usersCount] = userRecord(msg.sender, block.timestamp, 0);
        userMapRecord[usersCount] = msg.sender;

        emit entrySuccess(usersCount ,block.timestamp,  msg.sender);
    }

    function depositEthers () public payable {
        uint twentyMinsFreeze = block.timestamp + (2 * 60);
        userToAmount[msg.sender] = userRecord(msg.sender, twentyMinsFreeze, msg.value) ;
        emit ethersDepositSuccess(msg.sender, msg.value, block.timestamp);
    }

    function withdrawEthers (uint _amount) public payable {
        require(msg.sender != address(0), "invalid wallet address");
        address  userAddress = msg.sender;
        
        userRecord memory specificUser = userToAmount[userAddress];
        
        require(specificUser.freezeTime < block.timestamp, "your time to withdraw has not come yet");
        require(_amount <= specificUser.amount, "Insufficient balance");
        
        payable(userAddress).transfer(_amount);
        
        userToAmount[userAddress].amount = specificUser.amount - _amount;
        userToAmount[userAddress].freezeTime = userToAmount[userAddress].freezeTime + (2 * 60);

        emit ethersWithdrawSuccess(userAddress, userToAmount[userAddress].amount);
        
    }
    function returnTime() public view returns (uint) {

        return block.timestamp;
    }
}   