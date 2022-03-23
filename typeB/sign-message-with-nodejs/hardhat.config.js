require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
const Web3 = require("web3");
require("dotenv").config();

// const MyContract = require("./build/contracts/Mutahhir.json");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
//  task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//       console.log(account.address);
//     }
//   });

task("accounts", "Prints accounts", async (_, { web3 }) => {
    console.log(await web3.eth.getAccounts());
});

/**
 * 
 // task action function receives the Hardhat Runtime Environment as second argument
 task("accounts", "Prints accounts", async (_, { web3 }) => {
   // const web3 = new Web3(ROPSTEN_API_KEY);
   
   // const accounts = await web3.eth.getAccounts();
   // for (const account of accounts) {
     //     console.log(account.address);
     // }
     var accounts=[]
     web3.eth.getAccounts().then(function (acc) {
       accounts = acc;
      });
      web3.eth.defaultAccount = accounts[1]
      console.log(accounts);
      // const networkId = await web3.eth.net.getId();
      // const myContract = new web3.eth.Contract(MyContract.abi, MyContract.networks[networkId].address);
    });
    
    */
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    networks: {
        rinkeby: {
            url: `${process.env.INFURA_URL_RINKEBY}`,
            accounts: [`${process.env.WALLET_PRIVATE_KEY}`],
            // gas: 2100000,
            // gasPrice: 8000000000,
            // saveDeployments: true,
        },
    },
    solidity: "0.8.10",
    settings: {
        optimizer: {
            enabled: true,
            runs: 200,
        },
    },
    networks: {
        hardhat: {
            chainId: 1337,
        },
    },
};
