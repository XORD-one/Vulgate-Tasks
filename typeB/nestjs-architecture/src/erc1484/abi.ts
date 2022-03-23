export const abi= {
  "_format": "hh-sol-artifact-1",
  "contractName": "erc1484",
  "sourceName": "contracts/Erc1484.sol",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "initiator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "approvingAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "addedAddress",
          "type": "address"
        }
      ],
      "name": "AssociatedAddressAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "initiator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "removedAddress",
          "type": "address"
        }
      ],
      "name": "AssociatedAddressRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "initiator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "recoveryAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "associatedAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "providers",
          "type": "address[]"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "resolvers",
          "type": "address[]"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "delegated",
          "type": "bool"
        }
      ],
      "name": "IdentityCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "initiator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "recoveryAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "resolversReset",
          "type": "bool"
        }
      ],
      "name": "IdentityDestroyed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "initiator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "provider",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "delegated",
          "type": "bool"
        }
      ],
      "name": "ProviderAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "initiator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "provider",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "delegated",
          "type": "bool"
        }
      ],
      "name": "ProviderRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "initiator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "oldRecoveryAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newRecoveryAddress",
          "type": "address"
        }
      ],
      "name": "RecoveryAddressChangeTriggered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "initiator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "oldAssociatedAddresses",
          "type": "address[]"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newAssociatedAddress",
          "type": "address"
        }
      ],
      "name": "RecoveryTriggered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "initiator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "resolvers",
          "type": "address"
        }
      ],
      "name": "ResolverAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "initiator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "resolvers",
          "type": "address"
        }
      ],
      "name": "ResolverRemoved",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approvingAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "addressToAdd",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "addAssociatedAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approvingAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "addressToAdd",
          "type": "address"
        },
        {
          "internalType": "uint8[2]",
          "name": "v",
          "type": "uint8[2]"
        },
        {
          "internalType": "bytes32[2]",
          "name": "r",
          "type": "bytes32[2]"
        },
        {
          "internalType": "bytes32[2]",
          "name": "s",
          "type": "bytes32[2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "timestamp",
          "type": "uint256[2]"
        }
      ],
      "name": "addAssociatedAddressDelegated",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "providers",
          "type": "address[]"
        }
      ],
      "name": "addProviders",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "providers",
          "type": "address[]"
        }
      ],
      "name": "addProvidersFor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "resolvers",
          "type": "address[]"
        }
      ],
      "name": "addResolvers",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "resolvers",
          "type": "address[]"
        }
      ],
      "name": "addResolversFor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recoveryAddress",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "providers",
          "type": "address[]"
        },
        {
          "internalType": "address[]",
          "name": "resolvers",
          "type": "address[]"
        }
      ],
      "name": "createIdentity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recoveryAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "associatedAddress",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "providers",
          "type": "address[]"
        },
        {
          "internalType": "address[]",
          "name": "resolvers",
          "type": "address[]"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "createIdentityDelegated",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "einCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "getEIN",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        }
      ],
      "name": "getIdentity",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        },
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        },
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "hasIdentity",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        }
      ],
      "name": "identityExists",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "isAssociatedAddressFor",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "provider",
          "type": "address"
        }
      ],
      "name": "isProviderFor",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "resolver",
          "type": "address"
        }
      ],
      "name": "isResolverFor",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "messageHash",
          "type": "bytes32"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "isSigned",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "removeAssociatedAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addressToRemove",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "removeAssociatedAddressDelegated",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "providers",
          "type": "address[]"
        }
      ],
      "name": "removeProviders",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "providers",
          "type": "address[]"
        }
      ],
      "name": "removeProvidersFor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "resolvers",
          "type": "address[]"
        }
      ],
      "name": "removeResolvers",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "resolvers",
          "type": "address[]"
        }
      ],
      "name": "removeResolversFor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "firstChunk",
          "type": "address[]"
        },
        {
          "internalType": "address[]",
          "name": "lastChunk",
          "type": "address[]"
        },
        {
          "internalType": "bool",
          "name": "clearResolvers",
          "type": "bool"
        }
      ],
      "name": "triggerDestruction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "newAssociatedAddress",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "triggerRecovery",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newRecoveryAddress",
          "type": "address"
        }
      ],
      "name": "triggerRecoveryAddressChange",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ein",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "newRecoveryAddress",
          "type": "address"
        }
      ],
      "name": "triggerRecoveryAddressChangeFor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x6080604052600160025560146003556201518060045534801561002157600080fd5b506144e4806100316000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80635b5aed3a116100f9578063a687662d11610097578063d4b1cdcc11610071578063d4b1cdcc146104d9578063dd9ad9ed14610509578063e846fd9114610525578063fa57b57614610541576101a9565b8063a687662d14610471578063ab5f6781146104a1578063b8a5c2a6146104bd576101a9565b806385e3f058116100d357806385e3f058146103d65780638677ebe8146104095780638e1bb63314610439578063960b11f514610455576101a9565b80635b5aed3a1461036c5780636d1d35231461039c5780637d079951146103ba576101a9565b8063237f1a21116101665780633aedf3c9116101405780633aedf3c9146102fa5780633b4656a11461031657806353a9698a146103205780635726f66014610350576101a9565b8063237f1a211461027e5780632501faa5146102ae578063268e8970146102ca576101a9565b8063010887dc146101ae57806305c62c2f146101ca57806306c93c36146101fa57806314fb5646146102165780631bfe350814610246578063232e7d8314610262575b600080fd5b6101c860048036038101906101c3919061354f565b61055d565b005b6101e460048036038101906101df9190613094565b61067d565b6040516101f19190613d76565b60405180910390f35b610214600480360381019061020f919061354f565b61070e565b005b610230600480360381019061022b91906130bd565b610831565b60405161023d9190613d76565b60405180910390f35b610260600480360381019061025b9190613094565b6108bd565b005b61027c60048036038101906102779190613420565b610a5d565b005b61029860048036038101906102939190613094565b610b8d565b6040516102a59190613bf6565b60405180910390f35b6102c860048036038101906102c3919061348a565b610bde565b005b6102e460048036038101906102df91906132b3565b610cc2565b6040516102f19190613d76565b60405180910390f35b610314600480360381019061030f919061322a565b610cdb565b005b61031e610f7b565b005b61033a6004803603810190610335919061348a565b6110b4565b6040516103479190613bf6565b60405180910390f35b61036a6004803603810190610365919061354f565b611126565b005b61038660048036038101906103819190613461565b611246565b6040516103939190613bf6565b60405180910390f35b6103a4611261565b6040516103b19190613d76565b60405180910390f35b6103d460048036038101906103cf9190613420565b611267565b005b6103f060048036038101906103eb9190613461565b611397565b6040516104009493929190613b43565b60405180910390f35b610423600480360381019061041e9190613332565b6115de565b6040516104309190613bf6565b60405180910390f35b610453600480360381019061044e91906134c6565b61160c565b005b61046f600480360381019061046a919061354f565b611908565b005b61048b6004803603810190610486919061348a565b611a2b565b6040516104989190613bf6565b60405180910390f35b6104bb60048036038101906104b6919061319f565b611ab8565b005b6104d760048036038101906104d29190613420565b611e60565b005b6104f360048036038101906104ee919061348a565b611f8d565b6040516105009190613bf6565b60405180910390f35b610523600480360381019061051e91906133a9565b611fff565b005b61053f600480360381019061053a9190613420565b6121b1565b005b61055b600480360381019061055691906135a3565b6122de565b005b6000806000848152602001908152602001600020905060005b8251811015610677576105d58382815181106105bb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151836005016125ae90919063ffffffff16565b833373ffffffffffffffffffffffffffffffffffffffff167f54e2805007919dee52f88694f4c6f06bfd679d5d9784ee95ae44f4ff9020523e858481518110610647577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160405161065c9190613a9e565b60405180910390a3808061066f906140ab565b915050610576565b50505050565b600061068882610b8d565b6106c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106be90613c76565b60405180910390fd5b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000806000848152602001908152602001600020905060005b825181101561082b5761078683828151811061076c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518360030161267390919063ffffffff16565b833373ffffffffffffffffffffffffffffffffffffffff167fe41b11c1b8e658dea501b4a432bd3f7b3e6db83ef57ac16c52e5f288edeffec48584815181106107f8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516001604051610810929190613b9d565b60405180910390a38080610823906140ab565b915050610727565b50505050565b600081610861897fcc6e0b0e10f867dd093779929a8f4e113596135ab7a3f8e24b51ff88a5fdb3c38888886115de565b6108a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089790613d56565b60405180910390fd5b6108ae8a8a8a8a60016129c1565b91505098975050505050505050565b6000806000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167fec8acd470f49ff49dc25ffb0e4d48da58c5eb79f35afbec88e4abc7156889a738385604051610a51929190613ab9565b60405180910390a35050565b6000610a683361067d565b90506000806000838152602001908152602001600020905060005b8351811015610b8757610ae2848281518110610ac8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518360030161267390919063ffffffff16565b823373ffffffffffffffffffffffffffffffffffffffff167fe41b11c1b8e658dea501b4a432bd3f7b3e6db83ef57ac16c52e5f288edeffec4868481518110610b54577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516000604051610b6c929190613b9d565b60405180910390a38080610b7f906140ab565b915050610a83565b50505050565b6000610bd7600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611246565b9050919050565b600080600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160008085815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550823373ffffffffffffffffffffffffffffffffffffffff167fec8acd470f49ff49dc25ffb0e4d48da58c5eb79f35afbec88e4abc7156889a738385604051610cb5929190613ab9565b60405180910390a3505050565b6000610cd28433858560006129c1565b90509392505050565b808673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610dfc57610d3d867fcc6e0b0e10f867dd093779929a8f4e113596135ab7a3f8e24b51ff88a5fdb3c38787876115de565b610d7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7390613d56565b60405180910390fd5b610dab86600080610d8c8b61067d565b81526020019081526020016000206001016125ae90919063ffffffff16565b610db48761067d565b600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f19565b8573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610f1857610e5d877fcc6e0b0e10f867dd093779929a8f4e113596135ab7a3f8e24b51ff88a5fdb3c38787876115de565b610e9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9390613d56565b60405180910390fd5b610ecb86600080610eac8b61067d565b81526020019081526020016000206001016125ae90919063ffffffff16565b610ed48761067d565b600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b5b610f228761067d565b3373ffffffffffffffffffffffffffffffffffffffff167fa0e763710bdf81797303339803590cdfab14f495ab50975a41f3b00112c5c5238989604051610f6a929190613ab9565b60405180910390a350505050505050565b610fe133600080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060010161267390919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167f4ed4e3bbe2efe2f41f7496df45bc4627eb3610c8f242638c7165ea0fb285d607336040516110aa9190613a9e565b60405180910390a3565b60006110dd82600080868152602001908152602001600020600301612b1690919063ffffffff16565b61111c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161111390613c96565b60405180910390fd5b6001905092915050565b6000806000848152602001908152602001600020905060005b82518110156112405761119e838281518110611184577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518360050161267390919063ffffffff16565b833373ffffffffffffffffffffffffffffffffffffffff167fde03a0fb01946dd039d7a3ab05ede4cdb53127396add3b3fab48161425c82b48858481518110611210577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516040516112259190613a9e565b60405180910390a38080611238906140ab565b91505061113f565b50505050565b60006002548210801561125a575060018210155b9050919050565b60025481565b60006112723361067d565b90506000806000838152602001908152602001600020905060005b8351811015611391576112ec8482815181106112d2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151836003016125ae90919063ffffffff16565b823373ffffffffffffffffffffffffffffffffffffffff167fd2af86288d6ec28d93c5459bdc5a21da89b340c28ad430327e40139c1178986f86848151811061135e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516000604051611376929190613b9d565b60405180910390a38080611389906140ab565b91505061128d565b50505050565b600060608060606113a785611246565b6113e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113dd90613cd6565b60405180910390fd5b600080600087815260200190815260200160002090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16816001016000018260030160000183600501600001828054806020026020016040519081016040528092919081815260200182805480156114b757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161146d575b505050505092508180548060200260200160405190810160405280929190818152602001828054801561153f57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116114f5575b50505050509150808054806020026020016040519081016040528092919081815260200182805480156115c757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161157d575b505050505090509450945094509450509193509193565b60006115ed8686868686612ca2565b8061160157506116008686868686612d2c565b5b905095945050505050565b8061163a867fcc6e0b0e10f867dd093779929a8f4e113596135ab7a3f8e24b51ff88a5fdb3c38787876115de565b611679576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161167090613cb6565b60405180910390fd5b6000806000898152602001908152602001600020905060604262127500856116a19190613f24565b1015611841576000808a815260200190815260200160002060010160000180548060200260200160405190810160405280929190818152602001828054801561173f57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116116f5575b5050505050905060005b81518110156118115760016000846001016000018381548110611795577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558080611809906140ab565b915050611749565b5081600101600080820160006118279190612db9565b5050816003016000808201600061183e9190612db9565b50505b611868886000808c81526020019081526020016000206001016125ae90919063ffffffff16565b88600160008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550883373ffffffffffffffffffffffffffffffffffffffff167f2fe95fbd211d0471c596b1f81d913d1389d5d1ddeb2bdd96143acc651aa3b02e838b6040516118f5929190613bc6565b60405180910390a3505050505050505050565b6000806000848152602001908152602001600020905060005b8251811015611a2557611980838281518110611966577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151836003016125ae90919063ffffffff16565b833373ffffffffffffffffffffffffffffffffffffffff167fd2af86288d6ec28d93c5459bdc5a21da89b340c28ad430327e40139c1178986f8584815181106119f2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516001604051611a0a929190613b9d565b60405180910390a38080611a1d906140ab565b915050611921565b50505050565b600082600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414611aae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aa590613c56565b60405180910390fd5b6001905092915050565b80600060028110611af2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015181600160028110611b31577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151611c1d887fcc6e0b0e10f867dd093779929a8f4e113596135ab7a3f8e24b51ff88a5fdb3c388600060028110611b95577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015188600060028110611bd4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015188600060028110611c13577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201516115de565b611c5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c5390613cb6565b60405180910390fd5b611d43877fcc6e0b0e10f867dd093779929a8f4e113596135ab7a3f8e24b51ff88a5fdb3c388600160028110611cbb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015188600160028110611cfa577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015188600160028110611d39577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201516115de565b611d82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d7990613cf6565b60405180910390fd5b611db187600080611d928c61067d565b81526020019081526020016000206001016125ae90919063ffffffff16565b611dba8861067d565b600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611e068861067d565b3373ffffffffffffffffffffffffffffffffffffffff167fa0e763710bdf81797303339803590cdfab14f495ab50975a41f3b00112c5c5238a8a604051611e4e929190613ab9565b60405180910390a35050505050505050565b6000611e6b3361067d565b90506000806000838152602001908152602001600020905060005b8351811015611f8757611ee5848281518110611ecb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518360050161267390919063ffffffff16565b823373ffffffffffffffffffffffffffffffffffffffff167fde03a0fb01946dd039d7a3ab05ede4cdb53127396add3b3fab48161425c82b48868481518110611f57577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151604051611f6c9190613a9e565b60405180910390a38080611f7f906140ab565b915050611e86565b50505050565b6000611fb682600080868152602001908152602001600020600501612b1690919063ffffffff16565b611ff5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fec90613d16565b60405180910390fd5b6001905092915050565b8061203386836040516020016120159190613a78565b604051602081830303815290604052805190602001208787876115de565b612072576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161206990613cb6565b60405180910390fd5b6120d886600080600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060010161267390919063ffffffff16565b600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167f4ed4e3bbe2efe2f41f7496df45bc4627eb3610c8f242638c7165ea0fb285d607886040516121a19190613a9e565b60405180910390a3505050505050565b60006121bc3361067d565b90506000806000838152602001908152602001600020905060005b83518110156122d85761223684828151811061221c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151836005016125ae90919063ffffffff16565b823373ffffffffffffffffffffffffffffffffffffffff167f54e2805007919dee52f88694f4c6f06bfd679d5d9784ee95ae44f4ff9020523e8684815181106122a8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516040516122bd9190613a9e565b60405180910390a380806122d0906140ab565b9150506121d7565b50505050565b60008060008681526020019081526020016000209050600060405180602001604052803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525090508160010160000160405160200161234a9190613a39565b6040516020818303038152906040528051906020012085828660405160200161237593929190613a04565b60405160208183030381529060405280519060200120146123cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123c290613d36565b60405180910390fd5b60005b6123da83600101612da8565b8110156124a05760016000846001016000018381548110612424577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558080612498906140ab565b9150506123ce565b5081600101600080820160006124b69190612db9565b505081600301600080820160006124cd9190612db9565b505082156124ed5781600501600080820160006124ea9190612db9565b50505b853373ffffffffffffffffffffffffffffffffffffffff167f1807cc67f627d55c0a797a6c603fa124978caf5bb45c1748329489fd0185b9ef8460000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168660405161255a929190613b9d565b60405180910390a360008260000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505050565b6125b88282612b16565b61266f5781600001819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600001805490508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b5050565b61267d8282612b16565b156129bd5781600001600161269184612da8565b61269b9190613f7a565b815481106126d2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168260000160018460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461274f9190613f7a565b81548110612786577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548260010160008460000160018660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546128689190613f7a565b8154811061289f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000905581600001805480612987577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555b5050565b6000806002549050600260008154809291906129dc906140ab565b91905055508660008083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612a5c866000808481526020019081526020016000206001016125ae90919063ffffffff16565b80600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612aa985611267565b612ab2846121b1565b808673ffffffffffffffffffffffffffffffffffffffff167fe541733a4670852051762d3cdb7d9123bea21d01e252aa39ca403c8d0f5ab66c8989898989604051612b01959493929190613ae2565b60405180910390a38091505095945050505050565b6000808360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054118015612bb057508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836000018054905010155b8015612c9a57508173ffffffffffffffffffffffffffffffffffffffff168360000160018560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612c209190613f7a565b81548110612c57577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b905092915050565b60008573ffffffffffffffffffffffffffffffffffffffff1660018686868660405160008152602001604052604051612cde9493929190613c11565b6020604051602081039080840390855afa158015612d00573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff1614905095945050505050565b6000806040518060400160405280601c81526020017f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152509050612d9c878288604051602001612d7e929190613a50565b60405160208183030381529060405280519060200120878787612ca2565b91505095945050505050565b600081600001805490509050919050565b5080546000825590600052602060002090810190612dd79190612dda565b50565b5b80821115612df3576000816000905550600101612ddb565b5090565b6000612e0a612e0584613db6565b613d91565b90508083825260208201905082856020860282011115612e2957600080fd5b60005b85811015612e595781612e3f8882612f8c565b845260208401935060208301925050600181019050612e2c565b5050509392505050565b6000612e76612e7184613de2565b613d91565b90508082856020860282011115612e8c57600080fd5b60005b85811015612ebc5781612ea28882613055565b845260208401935060208301925050600181019050612e8f565b5050509392505050565b6000612ed9612ed484613e08565b613d91565b90508082856020860282011115612eef57600080fd5b60005b85811015612f1f5781612f05888261306a565b845260208401935060208301925050600181019050612ef2565b5050509392505050565b6000612f3c612f3784613e2e565b613d91565b90508082856020860282011115612f5257600080fd5b60005b85811015612f825781612f68888261307f565b845260208401935060208301925050600181019050612f55565b5050509392505050565b600081359050612f9b8161443b565b92915050565b600082601f830112612fb257600080fd5b8135612fc2848260208601612df7565b91505092915050565b600082601f830112612fdc57600080fd5b6002612fe9848285612e63565b91505092915050565b600082601f83011261300357600080fd5b6002613010848285612ec6565b91505092915050565b600082601f83011261302a57600080fd5b6002613037848285612f29565b91505092915050565b60008135905061304f81614452565b92915050565b60008135905061306481614469565b92915050565b60008135905061307981614480565b92915050565b60008135905061308e81614497565b92915050565b6000602082840312156130a657600080fd5b60006130b484828501612f8c565b91505092915050565b600080600080600080600080610100898b0312156130da57600080fd5b60006130e88b828c01612f8c565b98505060206130f98b828c01612f8c565b975050604089013567ffffffffffffffff81111561311657600080fd5b6131228b828c01612fa1565b965050606089013567ffffffffffffffff81111561313f57600080fd5b61314b8b828c01612fa1565b955050608061315c8b828c0161307f565b94505060a061316d8b828c01613055565b93505060c061317e8b828c01613055565b92505060e061318f8b828c0161306a565b9150509295985092959890939650565b60008060008060008061014087890312156131b957600080fd5b60006131c789828a01612f8c565b96505060206131d889828a01612f8c565b95505060406131e989828a01613019565b94505060806131fa89828a01612fcb565b93505060c061320b89828a01612fcb565b92505061010061321d89828a01612ff2565b9150509295509295509295565b60008060008060008060c0878903121561324357600080fd5b600061325189828a01612f8c565b965050602061326289828a01612f8c565b955050604061327389828a0161307f565b945050606061328489828a01613055565b935050608061329589828a01613055565b92505060a06132a689828a0161306a565b9150509295509295509295565b6000806000606084860312156132c857600080fd5b60006132d686828701612f8c565b935050602084013567ffffffffffffffff8111156132f357600080fd5b6132ff86828701612fa1565b925050604084013567ffffffffffffffff81111561331c57600080fd5b61332886828701612fa1565b9150509250925092565b600080600080600060a0868803121561334a57600080fd5b600061335888828901612f8c565b955050602061336988828901613055565b945050604061337a8882890161307f565b935050606061338b88828901613055565b925050608061339c88828901613055565b9150509295509295909350565b600080600080600060a086880312156133c157600080fd5b60006133cf88828901612f8c565b95505060206133e08882890161307f565b94505060406133f188828901613055565b935050606061340288828901613055565b92505060806134138882890161306a565b9150509295509295909350565b60006020828403121561343257600080fd5b600082013567ffffffffffffffff81111561344c57600080fd5b61345884828501612fa1565b91505092915050565b60006020828403121561347357600080fd5b60006134818482850161306a565b91505092915050565b6000806040838503121561349d57600080fd5b60006134ab8582860161306a565b92505060206134bc85828601612f8c565b9150509250929050565b60008060008060008060c087890312156134df57600080fd5b60006134ed89828a0161306a565b96505060206134fe89828a01612f8c565b955050604061350f89828a0161307f565b945050606061352089828a01613055565b935050608061353189828a01613055565b92505060a061354289828a0161306a565b9150509295509295509295565b6000806040838503121561356257600080fd5b60006135708582860161306a565b925050602083013567ffffffffffffffff81111561358d57600080fd5b61359985828601612fa1565b9150509250929050565b600080600080608085870312156135b957600080fd5b60006135c78782880161306a565b945050602085013567ffffffffffffffff8111156135e457600080fd5b6135f087828801612fa1565b935050604085013567ffffffffffffffff81111561360d57600080fd5b61361987828801612fa1565b925050606061362a87828801613040565b91505092959194509250565b60006136428383613666565b60208301905092915050565b600061365a8383613684565b60208301905092915050565b61366f81613fce565b82525050565b61367e81613fce565b82525050565b61368d81613fce565b82525050565b61369c81613e83565b6136a68184613ed6565b92506136b182613e54565b8060005b838110156136e25781516136c9878261364e565b96506136d483613eaf565b9250506001810190506136b5565b505050505050565b60006136f582613e8e565b6136ff8185613ee1565b935061370a83613e5e565b8060005b8381101561373b5781516137228882613636565b975061372d83613ebc565b92505060018101905061370e565b5085935050505092915050565b600061375382613e8e565b61375d8185613ef2565b935061376883613e5e565b8060005b83811015613799578151613780888261364e565b975061378b83613ebc565b92505060018101905061376c565b5085935050505092915050565b60006137b182613e99565b6137bb8185613ef2565b93506137c683613e6e565b8060005b838110156137fe576137db82614166565b6137e5888261364e565b97506137f083613ec9565b9250506001810190506137ca565b5085935050505092915050565b61381481613fe0565b82525050565b61382381613fec565b82525050565b61383a61383582613fec565b6140f4565b82525050565b600061384b82613ea4565b6138558185613efd565b935061386581856020860161402d565b80840191505092915050565b600061387e602c83613f08565b915061388982614197565b604082019050919050565b60006138a1602a83613f08565b91506138ac826141e6565b604082019050919050565b60006138c4602583613f08565b91506138cf82614235565b604082019050919050565b60006138e7601183613f08565b91506138f282614284565b602082019050919050565b600061390a602083613f08565b9150613915826142ad565b602082019050919050565b600061392d601283613f08565b9150613938826142d6565b602082019050919050565b6000613950602583613f08565b915061395b826142ff565b604082019050919050565b6000613973602583613f19565b915061397e8261434e565b602582019050919050565b6000613996605f83613f08565b91506139a18261439d565b606082019050919050565b60006139b9601283613f08565b91506139c482614412565b602082019050919050565b6139d881614016565b82525050565b6139ef6139ea82614016565b6140fe565b82525050565b6139fe81614020565b82525050565b6000613a108286613748565b9150613a1c8285613693565b602082019150613a2c8284613748565b9150819050949350505050565b6000613a4582846137a6565b915081905092915050565b6000613a5c8285613840565b9150613a688284613829565b6020820191508190509392505050565b6000613a8382613966565b9150613a8f82846139de565b60208201915081905092915050565b6000602082019050613ab36000830184613675565b92915050565b6000604082019050613ace6000830185613675565b613adb6020830184613675565b9392505050565b600060a082019050613af76000830188613675565b613b046020830187613675565b8181036040830152613b1681866136ea565b90508181036060830152613b2a81856136ea565b9050613b39608083018461380b565b9695505050505050565b6000608082019050613b586000830187613675565b8181036020830152613b6a81866136ea565b90508181036040830152613b7e81856136ea565b90508181036060830152613b9281846136ea565b905095945050505050565b6000604082019050613bb26000830185613675565b613bbf602083018461380b565b9392505050565b60006040820190508181036000830152613be081856136ea565b9050613bef6020830184613675565b9392505050565b6000602082019050613c0b600083018461380b565b92915050565b6000608082019050613c26600083018761381a565b613c3360208301866139f5565b613c40604083018561381a565b613c4d606083018461381a565b95945050505050565b60006020820190508181036000830152613c6f81613871565b9050919050565b60006020820190508181036000830152613c8f81613894565b9050919050565b60006020820190508181036000830152613caf816138b7565b9050919050565b60006020820190508181036000830152613ccf816138da565b9050919050565b60006020820190508181036000830152613cef816138fd565b9050919050565b60006020820190508181036000830152613d0f81613920565b9050919050565b60006020820190508181036000830152613d2f81613943565b9050919050565b60006020820190508181036000830152613d4f81613989565b9050919050565b60006020820190508181036000830152613d6f816139ac565b9050919050565b6000602082019050613d8b60008301846139cf565b92915050565b6000613d9b613dac565b9050613da7828261407a565b919050565b6000604051905090565b600067ffffffffffffffff821115613dd157613dd0614137565b5b602082029050602081019050919050565b600067ffffffffffffffff821115613dfd57613dfc614137565b5b602082029050919050565b600067ffffffffffffffff821115613e2357613e22614137565b5b602082029050919050565b600067ffffffffffffffff821115613e4957613e48614137565b5b602082029050919050565b6000819050919050565b6000819050602082019050919050565b60008190508160005260206000209050919050565b600060019050919050565b600081519050919050565b600081549050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b6000600182019050919050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b6000613f2f82614016565b9150613f3a83614016565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115613f6f57613f6e614108565b5b828201905092915050565b6000613f8582614016565b9150613f9083614016565b925082821015613fa357613fa2614108565b5b828203905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000613fd982613ff6565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561404b578082015181840152602081019050614030565b8381111561405a576000848401525b50505050565b600061407361406e8361418a565b613fae565b9050919050565b61408382614179565b810181811067ffffffffffffffff821117156140a2576140a1614137565b5b80604052505050565b60006140b682614016565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156140e9576140e8614108565b5b600182019050919050565b6000819050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006141728254614060565b9050919050565b6000601f19601f8301169050919050565b60008160001c9050919050565b7f546869732061646472657373206973206e6f74206173736f636961746564207760008201527f69746820746869732065696e0000000000000000000000000000000000000000602082015250565b7f4164647265737320686173206e6f206964656e74697479206173736f6369617460008201527f6564207769746820697400000000000000000000000000000000000000000000602082015250565b7f6974206973206e6f742070726f766964657220666f72207468652065696e207060008201527f6173736564000000000000000000000000000000000000000000000000000000602082015250565b7f5065726d697373696f6e2064656e696564000000000000000000000000000000600082015250565b7f50726f7669646564206964656e7469747920646f6573206e6f74206578697374600082015250565b7f5065726d697373696f6e2064656e696564320000000000000000000000000000600082015250565b7f6974206973206e6f74207265736f6c76657220666f72207468652065696e207060008201527f6173736564000000000000000000000000000000000000000000000000000000602082015250565b7f4920617574686f72697a65206372656174696f6e206f6620746869732049646560008201527f6e74697479000000000000000000000000000000000000000000000000000000602082015250565b7f43616e6e6f742064657374726f7920616e2045494e2066726f6d20616e20616460008201527f6472657373207468617420776173206e6f7420726563656e746c792072656d6f60208201527f7665642066726f6d20736169642045494e20766961207265636f766572792e00604082015250565b7f5065726d697373696f6e2064656e697465640000000000000000000000000000600082015250565b61444481613fce565b811461444f57600080fd5b50565b61445b81613fe0565b811461446657600080fd5b50565b61447281613fec565b811461447d57600080fd5b50565b61448981614016565b811461449457600080fd5b50565b6144a081614020565b81146144ab57600080fd5b5056fea26469706673582212204bac34118fa231bfcff14aca29c4eb82471adfb651f166bc73fb7cee39efa8d364736f6c63430008040033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101a95760003560e01c80635b5aed3a116100f9578063a687662d11610097578063d4b1cdcc11610071578063d4b1cdcc146104d9578063dd9ad9ed14610509578063e846fd9114610525578063fa57b57614610541576101a9565b8063a687662d14610471578063ab5f6781146104a1578063b8a5c2a6146104bd576101a9565b806385e3f058116100d357806385e3f058146103d65780638677ebe8146104095780638e1bb63314610439578063960b11f514610455576101a9565b80635b5aed3a1461036c5780636d1d35231461039c5780637d079951146103ba576101a9565b8063237f1a21116101665780633aedf3c9116101405780633aedf3c9146102fa5780633b4656a11461031657806353a9698a146103205780635726f66014610350576101a9565b8063237f1a211461027e5780632501faa5146102ae578063268e8970146102ca576101a9565b8063010887dc146101ae57806305c62c2f146101ca57806306c93c36146101fa57806314fb5646146102165780631bfe350814610246578063232e7d8314610262575b600080fd5b6101c860048036038101906101c3919061354f565b61055d565b005b6101e460048036038101906101df9190613094565b61067d565b6040516101f19190613d76565b60405180910390f35b610214600480360381019061020f919061354f565b61070e565b005b610230600480360381019061022b91906130bd565b610831565b60405161023d9190613d76565b60405180910390f35b610260600480360381019061025b9190613094565b6108bd565b005b61027c60048036038101906102779190613420565b610a5d565b005b61029860048036038101906102939190613094565b610b8d565b6040516102a59190613bf6565b60405180910390f35b6102c860048036038101906102c3919061348a565b610bde565b005b6102e460048036038101906102df91906132b3565b610cc2565b6040516102f19190613d76565b60405180910390f35b610314600480360381019061030f919061322a565b610cdb565b005b61031e610f7b565b005b61033a6004803603810190610335919061348a565b6110b4565b6040516103479190613bf6565b60405180910390f35b61036a6004803603810190610365919061354f565b611126565b005b61038660048036038101906103819190613461565b611246565b6040516103939190613bf6565b60405180910390f35b6103a4611261565b6040516103b19190613d76565b60405180910390f35b6103d460048036038101906103cf9190613420565b611267565b005b6103f060048036038101906103eb9190613461565b611397565b6040516104009493929190613b43565b60405180910390f35b610423600480360381019061041e9190613332565b6115de565b6040516104309190613bf6565b60405180910390f35b610453600480360381019061044e91906134c6565b61160c565b005b61046f600480360381019061046a919061354f565b611908565b005b61048b6004803603810190610486919061348a565b611a2b565b6040516104989190613bf6565b60405180910390f35b6104bb60048036038101906104b6919061319f565b611ab8565b005b6104d760048036038101906104d29190613420565b611e60565b005b6104f360048036038101906104ee919061348a565b611f8d565b6040516105009190613bf6565b60405180910390f35b610523600480360381019061051e91906133a9565b611fff565b005b61053f600480360381019061053a9190613420565b6121b1565b005b61055b600480360381019061055691906135a3565b6122de565b005b6000806000848152602001908152602001600020905060005b8251811015610677576105d58382815181106105bb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151836005016125ae90919063ffffffff16565b833373ffffffffffffffffffffffffffffffffffffffff167f54e2805007919dee52f88694f4c6f06bfd679d5d9784ee95ae44f4ff9020523e858481518110610647577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160405161065c9190613a9e565b60405180910390a3808061066f906140ab565b915050610576565b50505050565b600061068882610b8d565b6106c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106be90613c76565b60405180910390fd5b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000806000848152602001908152602001600020905060005b825181101561082b5761078683828151811061076c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518360030161267390919063ffffffff16565b833373ffffffffffffffffffffffffffffffffffffffff167fe41b11c1b8e658dea501b4a432bd3f7b3e6db83ef57ac16c52e5f288edeffec48584815181106107f8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516001604051610810929190613b9d565b60405180910390a38080610823906140ab565b915050610727565b50505050565b600081610861897fcc6e0b0e10f867dd093779929a8f4e113596135ab7a3f8e24b51ff88a5fdb3c38888886115de565b6108a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089790613d56565b60405180910390fd5b6108ae8a8a8a8a60016129c1565b91505098975050505050505050565b6000806000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167fec8acd470f49ff49dc25ffb0e4d48da58c5eb79f35afbec88e4abc7156889a738385604051610a51929190613ab9565b60405180910390a35050565b6000610a683361067d565b90506000806000838152602001908152602001600020905060005b8351811015610b8757610ae2848281518110610ac8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518360030161267390919063ffffffff16565b823373ffffffffffffffffffffffffffffffffffffffff167fe41b11c1b8e658dea501b4a432bd3f7b3e6db83ef57ac16c52e5f288edeffec4868481518110610b54577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516000604051610b6c929190613b9d565b60405180910390a38080610b7f906140ab565b915050610a83565b50505050565b6000610bd7600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611246565b9050919050565b600080600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160008085815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550823373ffffffffffffffffffffffffffffffffffffffff167fec8acd470f49ff49dc25ffb0e4d48da58c5eb79f35afbec88e4abc7156889a738385604051610cb5929190613ab9565b60405180910390a3505050565b6000610cd28433858560006129c1565b90509392505050565b808673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610dfc57610d3d867fcc6e0b0e10f867dd093779929a8f4e113596135ab7a3f8e24b51ff88a5fdb3c38787876115de565b610d7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7390613d56565b60405180910390fd5b610dab86600080610d8c8b61067d565b81526020019081526020016000206001016125ae90919063ffffffff16565b610db48761067d565b600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f19565b8573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610f1857610e5d877fcc6e0b0e10f867dd093779929a8f4e113596135ab7a3f8e24b51ff88a5fdb3c38787876115de565b610e9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9390613d56565b60405180910390fd5b610ecb86600080610eac8b61067d565b81526020019081526020016000206001016125ae90919063ffffffff16565b610ed48761067d565b600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b5b610f228761067d565b3373ffffffffffffffffffffffffffffffffffffffff167fa0e763710bdf81797303339803590cdfab14f495ab50975a41f3b00112c5c5238989604051610f6a929190613ab9565b60405180910390a350505050505050565b610fe133600080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060010161267390919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167f4ed4e3bbe2efe2f41f7496df45bc4627eb3610c8f242638c7165ea0fb285d607336040516110aa9190613a9e565b60405180910390a3565b60006110dd82600080868152602001908152602001600020600301612b1690919063ffffffff16565b61111c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161111390613c96565b60405180910390fd5b6001905092915050565b6000806000848152602001908152602001600020905060005b82518110156112405761119e838281518110611184577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518360050161267390919063ffffffff16565b833373ffffffffffffffffffffffffffffffffffffffff167fde03a0fb01946dd039d7a3ab05ede4cdb53127396add3b3fab48161425c82b48858481518110611210577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516040516112259190613a9e565b60405180910390a38080611238906140ab565b91505061113f565b50505050565b60006002548210801561125a575060018210155b9050919050565b60025481565b60006112723361067d565b90506000806000838152602001908152602001600020905060005b8351811015611391576112ec8482815181106112d2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151836003016125ae90919063ffffffff16565b823373ffffffffffffffffffffffffffffffffffffffff167fd2af86288d6ec28d93c5459bdc5a21da89b340c28ad430327e40139c1178986f86848151811061135e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516000604051611376929190613b9d565b60405180910390a38080611389906140ab565b91505061128d565b50505050565b600060608060606113a785611246565b6113e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113dd90613cd6565b60405180910390fd5b600080600087815260200190815260200160002090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16816001016000018260030160000183600501600001828054806020026020016040519081016040528092919081815260200182805480156114b757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161146d575b505050505092508180548060200260200160405190810160405280929190818152602001828054801561153f57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116114f5575b50505050509150808054806020026020016040519081016040528092919081815260200182805480156115c757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161157d575b505050505090509450945094509450509193509193565b60006115ed8686868686612ca2565b8061160157506116008686868686612d2c565b5b905095945050505050565b8061163a867fcc6e0b0e10f867dd093779929a8f4e113596135ab7a3f8e24b51ff88a5fdb3c38787876115de565b611679576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161167090613cb6565b60405180910390fd5b6000806000898152602001908152602001600020905060604262127500856116a19190613f24565b1015611841576000808a815260200190815260200160002060010160000180548060200260200160405190810160405280929190818152602001828054801561173f57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116116f5575b5050505050905060005b81518110156118115760016000846001016000018381548110611795577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558080611809906140ab565b915050611749565b5081600101600080820160006118279190612db9565b5050816003016000808201600061183e9190612db9565b50505b611868886000808c81526020019081526020016000206001016125ae90919063ffffffff16565b88600160008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550883373ffffffffffffffffffffffffffffffffffffffff167f2fe95fbd211d0471c596b1f81d913d1389d5d1ddeb2bdd96143acc651aa3b02e838b6040516118f5929190613bc6565b60405180910390a3505050505050505050565b6000806000848152602001908152602001600020905060005b8251811015611a2557611980838281518110611966577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151836003016125ae90919063ffffffff16565b833373ffffffffffffffffffffffffffffffffffffffff167fd2af86288d6ec28d93c5459bdc5a21da89b340c28ad430327e40139c1178986f8584815181106119f2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516001604051611a0a929190613b9d565b60405180910390a38080611a1d906140ab565b915050611921565b50505050565b600082600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414611aae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aa590613c56565b60405180910390fd5b6001905092915050565b80600060028110611af2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015181600160028110611b31577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151611c1d887fcc6e0b0e10f867dd093779929a8f4e113596135ab7a3f8e24b51ff88a5fdb3c388600060028110611b95577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015188600060028110611bd4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015188600060028110611c13577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201516115de565b611c5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c5390613cb6565b60405180910390fd5b611d43877fcc6e0b0e10f867dd093779929a8f4e113596135ab7a3f8e24b51ff88a5fdb3c388600160028110611cbb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015188600160028110611cfa577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015188600160028110611d39577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201516115de565b611d82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d7990613cf6565b60405180910390fd5b611db187600080611d928c61067d565b81526020019081526020016000206001016125ae90919063ffffffff16565b611dba8861067d565b600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611e068861067d565b3373ffffffffffffffffffffffffffffffffffffffff167fa0e763710bdf81797303339803590cdfab14f495ab50975a41f3b00112c5c5238a8a604051611e4e929190613ab9565b60405180910390a35050505050505050565b6000611e6b3361067d565b90506000806000838152602001908152602001600020905060005b8351811015611f8757611ee5848281518110611ecb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518360050161267390919063ffffffff16565b823373ffffffffffffffffffffffffffffffffffffffff167fde03a0fb01946dd039d7a3ab05ede4cdb53127396add3b3fab48161425c82b48868481518110611f57577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151604051611f6c9190613a9e565b60405180910390a38080611f7f906140ab565b915050611e86565b50505050565b6000611fb682600080868152602001908152602001600020600501612b1690919063ffffffff16565b611ff5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fec90613d16565b60405180910390fd5b6001905092915050565b8061203386836040516020016120159190613a78565b604051602081830303815290604052805190602001208787876115de565b612072576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161206990613cb6565b60405180910390fd5b6120d886600080600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060010161267390919063ffffffff16565b600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167f4ed4e3bbe2efe2f41f7496df45bc4627eb3610c8f242638c7165ea0fb285d607886040516121a19190613a9e565b60405180910390a3505050505050565b60006121bc3361067d565b90506000806000838152602001908152602001600020905060005b83518110156122d85761223684828151811061221c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151836005016125ae90919063ffffffff16565b823373ffffffffffffffffffffffffffffffffffffffff167f54e2805007919dee52f88694f4c6f06bfd679d5d9784ee95ae44f4ff9020523e8684815181106122a8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516040516122bd9190613a9e565b60405180910390a380806122d0906140ab565b9150506121d7565b50505050565b60008060008681526020019081526020016000209050600060405180602001604052803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525090508160010160000160405160200161234a9190613a39565b6040516020818303038152906040528051906020012085828660405160200161237593929190613a04565b60405160208183030381529060405280519060200120146123cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123c290613d36565b60405180910390fd5b60005b6123da83600101612da8565b8110156124a05760016000846001016000018381548110612424577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558080612498906140ab565b9150506123ce565b5081600101600080820160006124b69190612db9565b505081600301600080820160006124cd9190612db9565b505082156124ed5781600501600080820160006124ea9190612db9565b50505b853373ffffffffffffffffffffffffffffffffffffffff167f1807cc67f627d55c0a797a6c603fa124978caf5bb45c1748329489fd0185b9ef8460000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168660405161255a929190613b9d565b60405180910390a360008260000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505050565b6125b88282612b16565b61266f5781600001819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600001805490508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b5050565b61267d8282612b16565b156129bd5781600001600161269184612da8565b61269b9190613f7a565b815481106126d2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168260000160018460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461274f9190613f7a565b81548110612786577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548260010160008460000160018660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546128689190613f7a565b8154811061289f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000905581600001805480612987577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555b5050565b6000806002549050600260008154809291906129dc906140ab565b91905055508660008083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612a5c866000808481526020019081526020016000206001016125ae90919063ffffffff16565b80600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612aa985611267565b612ab2846121b1565b808673ffffffffffffffffffffffffffffffffffffffff167fe541733a4670852051762d3cdb7d9123bea21d01e252aa39ca403c8d0f5ab66c8989898989604051612b01959493929190613ae2565b60405180910390a38091505095945050505050565b6000808360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054118015612bb057508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836000018054905010155b8015612c9a57508173ffffffffffffffffffffffffffffffffffffffff168360000160018560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612c209190613f7a565b81548110612c57577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b905092915050565b60008573ffffffffffffffffffffffffffffffffffffffff1660018686868660405160008152602001604052604051612cde9493929190613c11565b6020604051602081039080840390855afa158015612d00573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff1614905095945050505050565b6000806040518060400160405280601c81526020017f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152509050612d9c878288604051602001612d7e929190613a50565b60405160208183030381529060405280519060200120878787612ca2565b91505095945050505050565b600081600001805490509050919050565b5080546000825590600052602060002090810190612dd79190612dda565b50565b5b80821115612df3576000816000905550600101612ddb565b5090565b6000612e0a612e0584613db6565b613d91565b90508083825260208201905082856020860282011115612e2957600080fd5b60005b85811015612e595781612e3f8882612f8c565b845260208401935060208301925050600181019050612e2c565b5050509392505050565b6000612e76612e7184613de2565b613d91565b90508082856020860282011115612e8c57600080fd5b60005b85811015612ebc5781612ea28882613055565b845260208401935060208301925050600181019050612e8f565b5050509392505050565b6000612ed9612ed484613e08565b613d91565b90508082856020860282011115612eef57600080fd5b60005b85811015612f1f5781612f05888261306a565b845260208401935060208301925050600181019050612ef2565b5050509392505050565b6000612f3c612f3784613e2e565b613d91565b90508082856020860282011115612f5257600080fd5b60005b85811015612f825781612f68888261307f565b845260208401935060208301925050600181019050612f55565b5050509392505050565b600081359050612f9b8161443b565b92915050565b600082601f830112612fb257600080fd5b8135612fc2848260208601612df7565b91505092915050565b600082601f830112612fdc57600080fd5b6002612fe9848285612e63565b91505092915050565b600082601f83011261300357600080fd5b6002613010848285612ec6565b91505092915050565b600082601f83011261302a57600080fd5b6002613037848285612f29565b91505092915050565b60008135905061304f81614452565b92915050565b60008135905061306481614469565b92915050565b60008135905061307981614480565b92915050565b60008135905061308e81614497565b92915050565b6000602082840312156130a657600080fd5b60006130b484828501612f8c565b91505092915050565b600080600080600080600080610100898b0312156130da57600080fd5b60006130e88b828c01612f8c565b98505060206130f98b828c01612f8c565b975050604089013567ffffffffffffffff81111561311657600080fd5b6131228b828c01612fa1565b965050606089013567ffffffffffffffff81111561313f57600080fd5b61314b8b828c01612fa1565b955050608061315c8b828c0161307f565b94505060a061316d8b828c01613055565b93505060c061317e8b828c01613055565b92505060e061318f8b828c0161306a565b9150509295985092959890939650565b60008060008060008061014087890312156131b957600080fd5b60006131c789828a01612f8c565b96505060206131d889828a01612f8c565b95505060406131e989828a01613019565b94505060806131fa89828a01612fcb565b93505060c061320b89828a01612fcb565b92505061010061321d89828a01612ff2565b9150509295509295509295565b60008060008060008060c0878903121561324357600080fd5b600061325189828a01612f8c565b965050602061326289828a01612f8c565b955050604061327389828a0161307f565b945050606061328489828a01613055565b935050608061329589828a01613055565b92505060a06132a689828a0161306a565b9150509295509295509295565b6000806000606084860312156132c857600080fd5b60006132d686828701612f8c565b935050602084013567ffffffffffffffff8111156132f357600080fd5b6132ff86828701612fa1565b925050604084013567ffffffffffffffff81111561331c57600080fd5b61332886828701612fa1565b9150509250925092565b600080600080600060a0868803121561334a57600080fd5b600061335888828901612f8c565b955050602061336988828901613055565b945050604061337a8882890161307f565b935050606061338b88828901613055565b925050608061339c88828901613055565b9150509295509295909350565b600080600080600060a086880312156133c157600080fd5b60006133cf88828901612f8c565b95505060206133e08882890161307f565b94505060406133f188828901613055565b935050606061340288828901613055565b92505060806134138882890161306a565b9150509295509295909350565b60006020828403121561343257600080fd5b600082013567ffffffffffffffff81111561344c57600080fd5b61345884828501612fa1565b91505092915050565b60006020828403121561347357600080fd5b60006134818482850161306a565b91505092915050565b6000806040838503121561349d57600080fd5b60006134ab8582860161306a565b92505060206134bc85828601612f8c565b9150509250929050565b60008060008060008060c087890312156134df57600080fd5b60006134ed89828a0161306a565b96505060206134fe89828a01612f8c565b955050604061350f89828a0161307f565b945050606061352089828a01613055565b935050608061353189828a01613055565b92505060a061354289828a0161306a565b9150509295509295509295565b6000806040838503121561356257600080fd5b60006135708582860161306a565b925050602083013567ffffffffffffffff81111561358d57600080fd5b61359985828601612fa1565b9150509250929050565b600080600080608085870312156135b957600080fd5b60006135c78782880161306a565b945050602085013567ffffffffffffffff8111156135e457600080fd5b6135f087828801612fa1565b935050604085013567ffffffffffffffff81111561360d57600080fd5b61361987828801612fa1565b925050606061362a87828801613040565b91505092959194509250565b60006136428383613666565b60208301905092915050565b600061365a8383613684565b60208301905092915050565b61366f81613fce565b82525050565b61367e81613fce565b82525050565b61368d81613fce565b82525050565b61369c81613e83565b6136a68184613ed6565b92506136b182613e54565b8060005b838110156136e25781516136c9878261364e565b96506136d483613eaf565b9250506001810190506136b5565b505050505050565b60006136f582613e8e565b6136ff8185613ee1565b935061370a83613e5e565b8060005b8381101561373b5781516137228882613636565b975061372d83613ebc565b92505060018101905061370e565b5085935050505092915050565b600061375382613e8e565b61375d8185613ef2565b935061376883613e5e565b8060005b83811015613799578151613780888261364e565b975061378b83613ebc565b92505060018101905061376c565b5085935050505092915050565b60006137b182613e99565b6137bb8185613ef2565b93506137c683613e6e565b8060005b838110156137fe576137db82614166565b6137e5888261364e565b97506137f083613ec9565b9250506001810190506137ca565b5085935050505092915050565b61381481613fe0565b82525050565b61382381613fec565b82525050565b61383a61383582613fec565b6140f4565b82525050565b600061384b82613ea4565b6138558185613efd565b935061386581856020860161402d565b80840191505092915050565b600061387e602c83613f08565b915061388982614197565b604082019050919050565b60006138a1602a83613f08565b91506138ac826141e6565b604082019050919050565b60006138c4602583613f08565b91506138cf82614235565b604082019050919050565b60006138e7601183613f08565b91506138f282614284565b602082019050919050565b600061390a602083613f08565b9150613915826142ad565b602082019050919050565b600061392d601283613f08565b9150613938826142d6565b602082019050919050565b6000613950602583613f08565b915061395b826142ff565b604082019050919050565b6000613973602583613f19565b915061397e8261434e565b602582019050919050565b6000613996605f83613f08565b91506139a18261439d565b606082019050919050565b60006139b9601283613f08565b91506139c482614412565b602082019050919050565b6139d881614016565b82525050565b6139ef6139ea82614016565b6140fe565b82525050565b6139fe81614020565b82525050565b6000613a108286613748565b9150613a1c8285613693565b602082019150613a2c8284613748565b9150819050949350505050565b6000613a4582846137a6565b915081905092915050565b6000613a5c8285613840565b9150613a688284613829565b6020820191508190509392505050565b6000613a8382613966565b9150613a8f82846139de565b60208201915081905092915050565b6000602082019050613ab36000830184613675565b92915050565b6000604082019050613ace6000830185613675565b613adb6020830184613675565b9392505050565b600060a082019050613af76000830188613675565b613b046020830187613675565b8181036040830152613b1681866136ea565b90508181036060830152613b2a81856136ea565b9050613b39608083018461380b565b9695505050505050565b6000608082019050613b586000830187613675565b8181036020830152613b6a81866136ea565b90508181036040830152613b7e81856136ea565b90508181036060830152613b9281846136ea565b905095945050505050565b6000604082019050613bb26000830185613675565b613bbf602083018461380b565b9392505050565b60006040820190508181036000830152613be081856136ea565b9050613bef6020830184613675565b9392505050565b6000602082019050613c0b600083018461380b565b92915050565b6000608082019050613c26600083018761381a565b613c3360208301866139f5565b613c40604083018561381a565b613c4d606083018461381a565b95945050505050565b60006020820190508181036000830152613c6f81613871565b9050919050565b60006020820190508181036000830152613c8f81613894565b9050919050565b60006020820190508181036000830152613caf816138b7565b9050919050565b60006020820190508181036000830152613ccf816138da565b9050919050565b60006020820190508181036000830152613cef816138fd565b9050919050565b60006020820190508181036000830152613d0f81613920565b9050919050565b60006020820190508181036000830152613d2f81613943565b9050919050565b60006020820190508181036000830152613d4f81613989565b9050919050565b60006020820190508181036000830152613d6f816139ac565b9050919050565b6000602082019050613d8b60008301846139cf565b92915050565b6000613d9b613dac565b9050613da7828261407a565b919050565b6000604051905090565b600067ffffffffffffffff821115613dd157613dd0614137565b5b602082029050602081019050919050565b600067ffffffffffffffff821115613dfd57613dfc614137565b5b602082029050919050565b600067ffffffffffffffff821115613e2357613e22614137565b5b602082029050919050565b600067ffffffffffffffff821115613e4957613e48614137565b5b602082029050919050565b6000819050919050565b6000819050602082019050919050565b60008190508160005260206000209050919050565b600060019050919050565b600081519050919050565b600081549050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b6000600182019050919050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b6000613f2f82614016565b9150613f3a83614016565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115613f6f57613f6e614108565b5b828201905092915050565b6000613f8582614016565b9150613f9083614016565b925082821015613fa357613fa2614108565b5b828203905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000613fd982613ff6565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561404b578082015181840152602081019050614030565b8381111561405a576000848401525b50505050565b600061407361406e8361418a565b613fae565b9050919050565b61408382614179565b810181811067ffffffffffffffff821117156140a2576140a1614137565b5b80604052505050565b60006140b682614016565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156140e9576140e8614108565b5b600182019050919050565b6000819050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006141728254614060565b9050919050565b6000601f19601f8301169050919050565b60008160001c9050919050565b7f546869732061646472657373206973206e6f74206173736f636961746564207760008201527f69746820746869732065696e0000000000000000000000000000000000000000602082015250565b7f4164647265737320686173206e6f206964656e74697479206173736f6369617460008201527f6564207769746820697400000000000000000000000000000000000000000000602082015250565b7f6974206973206e6f742070726f766964657220666f72207468652065696e207060008201527f6173736564000000000000000000000000000000000000000000000000000000602082015250565b7f5065726d697373696f6e2064656e696564000000000000000000000000000000600082015250565b7f50726f7669646564206964656e7469747920646f6573206e6f74206578697374600082015250565b7f5065726d697373696f6e2064656e696564320000000000000000000000000000600082015250565b7f6974206973206e6f74207265736f6c76657220666f72207468652065696e207060008201527f6173736564000000000000000000000000000000000000000000000000000000602082015250565b7f4920617574686f72697a65206372656174696f6e206f6620746869732049646560008201527f6e74697479000000000000000000000000000000000000000000000000000000602082015250565b7f43616e6e6f742064657374726f7920616e2045494e2066726f6d20616e20616460008201527f6472657373207468617420776173206e6f7420726563656e746c792072656d6f60208201527f7665642066726f6d20736169642045494e20766961207265636f766572792e00604082015250565b7f5065726d697373696f6e2064656e697465640000000000000000000000000000600082015250565b61444481613fce565b811461444f57600080fd5b50565b61445b81613fe0565b811461446657600080fd5b50565b61447281613fec565b811461447d57600080fd5b50565b61448981614016565b811461449457600080fd5b50565b6144a081614020565b81146144ab57600080fd5b5056fea26469706673582212204bac34118fa231bfcff14aca29c4eb82471adfb651f166bc73fb7cee39efa8d364736f6c63430008040033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}