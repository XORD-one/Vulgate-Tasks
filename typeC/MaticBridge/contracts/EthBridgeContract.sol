// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

interface IERC20 {
    function transferFrom(address _from, address _to, uint256 _value)external returns (bool);
    function approve(address _spender, uint256 _value)external returns (bool);
    function balanceOf(address _owner)external view returns (uint256);
    function transfer (address _to, uint256 _value)external returns (bool);
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
} 

contract SignerSignature {
    function getMessageHash(address _to, string memory _message, uint _nonce) 
        public pure returns (bytes32) 
    {
            return keccak256(abi.encodePacked(_to, _message, _nonce));
    }
    
    
    /*signature is produced by signing a keccak256 hash with the following format:*/
    // -> "\x19Ethereum Signed Message\n" + length(msg) + msg
    // -> \x19Ethereum Signed Message\n32 + MESSAGE_HERE
    function getSignedMessageHash(bytes32 _messageHash) public pure returns (bytes32) {
        return keccak256(abi.encodePacked("\x19Ethereum Signed Message\n32", _messageHash));
    }
}

contract EthBridgeContract is SignerSignature {
    address public owner;
    address constant public tokenAddress = 0x574E0117a8c7B9b678c67061BB8528A3b932Ac7e; // MIT token rinkeby
    //user to funds
    mapping(address => uint256) public userToFunds;

    constructor() {
        owner = msg.sender;
    }
    event TokenLocked(address indexed _from, address indexed _to, uint256 indexed _amount);
    event TokenUnlocked(address indexed _from, address indexed _to, uint256 indexed _amount);

    function lockFunds (uint _value) public {
        //considering that the approval of token has already been given to this contract
        IERC20(tokenAddress).transferFrom(msg.sender, address(this), _value);
        userToFunds[msg.sender] += _value;
        emit TokenLocked(msg.sender, address(this), _value);
    }

    function unlockFunds(bytes32 _signedMessageHash, bytes memory _signature, uint _value, address _to) public {
        require(userToFunds[msg.sender] >= _value);
        require( IERC20(tokenAddress).balanceOf(address(this)) >= _value, "EthBridge: Insufficient funds");
        
        userToFunds[msg.sender] -= _value;
        require(msg.sender == recoverSigner(_signedMessageHash, _signature), "EthBridge: Invalid signature");
        
        bool sent = IERC20(tokenAddress).transfer(_to, _value);
        require(sent, "EthBridge: Failed to send funds");
        emit TokenUnlocked(msg.sender, _to, _value);

    }

    //---------------------------------------------- H E L P E R   FU N C T I N O S ---------------------
    
    function recoverSigner (bytes32 _signedMessageHash, bytes memory _signature) 
        internal pure returns (address){
        
        (bytes32 r, bytes32 s, uint8 v) = splitSignature(_signature);
        return ecrecover(_signedMessageHash, v, r, s);
    }

    function splitSignature(bytes memory _sig)
        internal pure returns (bytes32 r, bytes32 s, uint8 v) {
            require(_sig.length == 65, "invalid signature length"); // 65 bytes = 32 bytes for r + 32 bytes for s + 1 byte for v

            // add(x, y)        -> x + y
            // add(_sig, 32)    -> skips firt 32 bytes
            // mload(p) loads next 32 bytes starting at the memory address p

            assembly {
                r:= mload(add(_sig, 32))    //signature
                s:= mload(add(_sig, 64))    //value
                v:=byte(0, mload(add(_sig, 96)))
 

            }
    }
}
 