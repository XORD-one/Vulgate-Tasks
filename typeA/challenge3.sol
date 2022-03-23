// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract TodoList is Ownable {
    uint counter = 0;
    address contractOwner;

    mapping (uint => ListItem) private todoListMap;

    struct ListItem {
        uint id;
        string taskName;
        bool isDeleted;
    }

    event itemAdded(uint id, string name, address callerAddress);
    event itemRemoved(uint id, string name, bool isDeleted, address callerAddress);
    
    constructor () Ownable() {
        contractOwner = msg.sender;
    }

    function addItem(string memory _title) public  onlyOwner {
        todoListMap[counter] = ListItem(counter, _title, false);
        counter+=1;
        emit itemAdded(counter, _title, msg.sender);

    }
    function listAllItems () public view onlyOwner returns(ListItem [] memory){
        
        uint validCount=0;
        uint tempArrCount=0;

        for(uint i = 0; i < counter; i++) {
            if(todoListMap[i].isDeleted == false){
                validCount+=1;
            }
        }

        ListItem [] memory listArr = new ListItem[](validCount) ;
        for(uint i = 0; i < counter; i++) {
            if(todoListMap[i].isDeleted == false){
                listArr[tempArrCount] = todoListMap[i];
                tempArrCount+=1;
            }
        }
        return listArr;


    }
    function removeItem(uint _itemId) public onlyOwner{
        ListItem memory requiredItem = todoListMap[_itemId];
        require(requiredItem.isDeleted == true || requiredItem.isDeleted == false, "item does not exists");
        requiredItem.isDeleted = true;

        emit itemRemoved(requiredItem.id, requiredItem.taskName ,requiredItem.isDeleted, msg.sender);
    }
}