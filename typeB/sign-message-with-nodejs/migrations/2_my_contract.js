// const MyToken = artifacts.require('verifySignature')
// const MyContract = artifacts.require('MyContract')
// const fs = require('fs')

// module.exports = async (deployer, network, accounts) => {
//   await deployer.deploy(MyToken)

//   await deployer.deploy(MyContract, MyToken.address)

//   const metaDataFile = `${__dirname}/../build/contracts/MyContract.json`
//   const metaData = require(metaDataFile)
//   metaData.networks[deployer.network_id] = {}
//   metaData.networks[deployer.network_id].address = MyContract.address
//   fs.writeFileSync(metaDataFile, JSON.stringify(metaData, null, 4))
// }

var MITSign = artifacts.require("verifySignature");

module.exports = function(deployer) {
    deployer.deploy(MITSign);
    // Additional contracts can be deployed here
};