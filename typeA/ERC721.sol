// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
// import "../../utils/introspection/IERC165.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";


import "hardhat/console.sol";


contract Mutahhir is IERC721 ,ERC165{
    
    uint count=0;
    mapping(address => uint ) userToToken;
    mapping(uint => address) tokensToUser;
    mapping(uint => address) authorized;
    // owner => operator => isApprovedForAllTokens
    mapping(address => mapping(address => bool)) _operatorApprovals;

    
    // If a token has been created
    mapping(uint => bool) mintedToken;

    //C O N S T R U C T O R  
    
    event Minted (address owner, uint tokenId);

    // event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);
    // event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);
    // event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);

    // constructor() ERC721("Mutahhir Token", "MIT") {}
    constructor()  {}

    modifier onlyNonExistentToken(uint _tokenId) {
        require(mintedToken[_tokenId] == false);
        _;
    }

    modifier onlyExistentToken(uint _tokenId) {
        require(mintedToken[_tokenId] == true);
        _;
    }
    function isContract(address addr) public view returns (bool) {
        uint size;
        assembly { size := extcodesize(addr) }
        return size > 0;
    }

    function balanceOf(address _owner) external view override returns (uint256){
        return userToToken[_owner];
    }

    function ownerOf(uint256 _tokenId) public view override returns (address){
        return tokensToUser[_tokenId];
    }

    function transferFrom(address _from, address _to, uint256 _tokenId) public  override onlyExistentToken(_tokenId){
        address isapprovAddress = authorized[_tokenId];
        bool isApprov = isApprovedForAll(_from, msg.sender);
        console.log(isApprov, isapprovAddress);

        address tokenOwner = ownerOf(_tokenId);
        
        require(_from == tokenOwner || tokenOwner == msg.sender || _operatorApprovals[_from][msg.sender] || authorized[_tokenId] == msg.sender, "ERC721: no rights to manipulate");

        // require(_from == tokenOwner,"ERC721: From does not own the token");
        
        require(_to != address(0));
        
        userToToken[_from] --;
        userToToken[_to] ++;
        tokensToUser[_tokenId] = _to;
        if (authorized[_tokenId] != address(0))
        {
            delete authorized[_tokenId];
        }
        emit Transfer(_from,_to,_tokenId);
    }

    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes memory _data) public  override onlyExistentToken(_tokenId) {
        transferFrom(_from, _to, _tokenId);
        if(isContract(_to)){
            IERC721Receiver receiver = IERC721Receiver(_to);
            require(receiver.onERC721Received(msg.sender,_from,_tokenId,_data)==bytes4(keccak256("onERC721Received(address,address,uint256,bytes)")),
            "ERC721: transfer to non ERC721Receiver implementer");
            
        } 
    }

    function safeTransferFrom(address _from, address _to, uint256 _tokenId) public override   onlyExistentToken(_tokenId) {
        safeTransferFrom(_from, _to, _tokenId, "");
    }

    function approve(address _approved, uint256 _tokenId) external  override onlyExistentToken(_tokenId){
        address owner = ownerOf(_tokenId);
        require( msg.sender == owner || _operatorApprovals[owner][msg.sender], "ERC721: sender is not owner or operator");
        authorized[_tokenId] = _approved;
        emit Approval(msg.sender, _approved, _tokenId);

    }

    function setApprovalForAll(address _operator, bool _approved) external override {
        require(_operator != address(0), "ERC721: invalid operator address");
        _operatorApprovals[msg.sender][_operator] = _approved;
        emit ApprovalForAll(msg.sender, _operator, _approved);
    }

    function getApproved(uint256 _tokenId) public view override onlyExistentToken(_tokenId) returns (address)  {
        require(_tokenId <= count);
        return authorized[_tokenId];
    }

    function isApprovedForAll(address _owner, address _operator) public view override returns (bool){
        return _operatorApprovals[_owner][_operator];
    }

    function mintTokens(uint _tokenId) public onlyNonExistentToken(_tokenId) {

        mintedToken[count] = true;

        // totalSupply = totalSupply + 1;

        count++;
        tokensToUser[count] = msg.sender;
        userToToken[msg.sender] = count;
    }












}