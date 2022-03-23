contract test {
    function sortAddressAndCreateHash (address _add1, address _add2) public pure returns (bytes32) {
        if(_add1 > _add2) 
            return keccak256(abi.encodePacked(_add1 , _add2));
        else 
            return keccak256(abi.encodePacked(_add2 , _add1));
    }
    
