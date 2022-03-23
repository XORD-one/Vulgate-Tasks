// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/*  Signature varification

how to sign and verify message

#Signing
1. create message to sign
2. hash the message
3. sign the hash (off chain, keep your private key secret)

#verify
1. recreate hash from the original message
2. recover signer from the signature and hash (collectively)
3. compare recovered signer to claimed signer
*/
contract verifySignature {

    //this function covers 1 & 2 steps from signing
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

    // this function will compute the hash and produce & return signer address
    function verify (address _signer, address _to, string memory _message, 
                    uint _nonce, bytes memory _signature) public pure returns (bool){
         bytes32 messageHash = getMessageHash(_to, _message, _nonce);
         bytes32 signedMessageHash = getSignedMessageHash(messageHash);
         return recoverSigner(signedMessageHash, _signature) == _signer;
     }

    function recoverSigner (bytes32 _signedMessageHash, bytes memory _signature) 
        public pure returns (address){
        
        (bytes32 r, bytes32 s, uint8 v) = splitSignature(_signature);
        return ecrecover(_signedMessageHash, v, r, s);
    }

    function splitSignature(bytes memory _sig)
        public pure returns (bytes32 r, bytes32 s, uint8 v) {
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