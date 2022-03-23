// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./ERC1155Bytes.sol";

import "hardhat/console.sol";

// interface IERC1155Receiver { 
//     function onERC1155Received(address operator, address from, uint256 id, uint256 value, bytes calldata data) external returns (bytes4);

//     function onERC1155BatchReceived(
//         address operator,
//         address from,
//         uint256[] calldata ids,
//         uint256[] calldata values,
//         bytes calldata data
//     ) external returns (bytes4);   
// }

contract Mutahhir is IERC1155, Ownable, ERC1155Bytes {
    
    address contractOwner;
    mapping(uint => address) tokensToUser;
    // owner => tokenId => value
    mapping(address => mapping(uint => uint)) holderValueForToken; //holder's value for a particular token

    // owner => operator => isOperator
    mapping(address => mapping(address => bool)) operatorApprovals;
    mapping(uint => address) authorized;

    constructor() {contractOwner = msg.sender;}


    function ownerOf(uint256 _tokenId) public view returns (address){
        return tokensToUser[_tokenId];
    }

    function balanceOf(address _owner, uint256 _id) external view override returns (uint256){
        return holderValueForToken[_owner][_id];
    }

    function balanceOfBatch(address[] calldata _owners, uint256[] calldata _ids) external view override returns (uint256[]  memory _values)  {
        for(uint i = 0; i< _ids.length; i++ ) {
            _values[i] =(holderValueForToken[_owners[i]][_ids[i]]);
        }    
        return _values;
    }



    function isContract(address addr) public view returns (bool) {
        uint size;
        assembly { size := extcodesize(addr) }
        return size > 0;
    }

    function safeTransferFrom(address _from, address _to, uint256 _id, uint256 _value, bytes calldata _data) external override {
        address owner = ownerOf(_id);

        require(_from == owner || isApprovedForAll(owner, msg.sender), "Mutahhir:: caller is not the operator");  // to ask
        
        require(_to != address(0), "Mutahhir:: invalid address");
        require(holderValueForToken[_from][_id] <= _value, "Mutahhir:: Insufficient Balance");
        console.log("till event");
        emit TransferSingle(msg.sender, _from, _to, _id, _value);
        holderValueForToken[_from][_id] -= _value;
        holderValueForToken[_to][_id] += _value;
        console.log(isContract(_to));
        if(isContract(_to)) {
             ERC1155Bytes receiver = ERC1155Bytes(_to);
            //  bytes4 hashCheck = receiver.onERC1155Received(msg.sender, _from, _id, _value, _data);
            //  bytes4 hashCheck2 = bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"));
            //  console.logBytes4(hashCheck);
            //  console.logBytes4(hashCheck2);
            require(receiver.onERC1155Received(msg.sender, _from, _id, _value, _data)==
            bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)")),"Mutahhir: transfer rejected"); 
        }

    }

    function safeBatchTransferFrom(address _from, address _to, uint256[] calldata _ids, uint256[] calldata _values, bytes calldata _data) external override{
        //to ask
        // require(_from == msg.sender || operatorApprovals[owner][msg.sender], "Mutahhir:: caller is not the operator");  // to ask
        
        require(_values.length == _ids.length && _to != address(0), "Mutahhir:: invalid receiver or mismatch ids and values length" );
        for(uint i = 0; i < _ids.length; i++) {
            uint id = _ids[i];
            uint value = _values[i];
            require(holderValueForToken[_from][id] <= value, "Mutahhir:: Amount mismatch for an item");
            holderValueForToken[_from][id] -= value;
            holderValueForToken[_to][id] += value;

        }
        emit TransferBatch(msg.sender, _from, _to, _ids, _values);
        if(isContract(_to)) {
            ERC1155Bytes receiver = ERC1155Bytes(_to);
            require(receiver.onERC1155BatchReceived(msg.sender, _from, _ids, _values, _data)==
            bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)")),"Mutahhir: transfer rejected");
        }
    }

    function setApprovalForAll(address _operator, bool _approved) external  override {
        address caller = msg.sender;
        require(caller != _operator);
        operatorApprovals[caller][_operator] = _approved;
        emit ApprovalForAll(caller, _operator, _approved);
        
    }

    function isApprovedForAll(address _owner, address _operator) public view override returns (bool) {
        return operatorApprovals[_owner][_operator];

    }

    //didn't understand the  usecase that's why not implemented completely;
    function supportsInterface(bytes4 interfaceID) external pure override returns (bool) {
        return  interfaceID == 0x01ffc9a7 ||    // ERC-165 support (i.e. `bytes4(keccak256('supportsInterface(bytes4)'))`).
              interfaceID == 0x4e2312e0;      // ERC-1155 `ERC1155TokenReceiver` support (i.e. `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)")) ^ bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))`).
    }
    
    function _mint(address _account, uint _id ,uint _amount, bytes memory _data) external onlyOwner
    {
    //    require(msg.sender == contractOwner,"You are not the Owner");
        tokensToUser[_id] = _account;
        require(_account != address(0));
        holderValueForToken[_account][_id] += _amount;
        if (isContract(_account) ) {
            ERC1155Bytes receiver = ERC1155Bytes(_account);
            receiver.onERC1155Received(msg.sender,address(0),_id,_amount,_data);
            
        }
        emit TransferSingle(msg.sender,address(0),_account,_id,_amount);

    }

    // function onERC1155Received(
    //     address operator,
    //     address from,
    //     uint256 id,
    //     uint256 value,
    //     bytes calldata data
    // ) external override returns (bytes4) {
    //     return bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"));
    // }

    // function onERC1155BatchReceived(
    //     address operator,
    //     address from,
    //     uint256[] calldata ids,
    //     uint256[] calldata values,
    //     bytes calldata data
    // ) external override returns (bytes4) {
    //     return bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"));
    // }

}