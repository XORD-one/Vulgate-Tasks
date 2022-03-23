require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
console.log(`${process.env.WALLET_PRIVATE_KEY}`);
module.exports = {
    networks: {
        rinkeby: {
            url: `${process.env.INFURA_URL_RINKEBY}`,
            accounts: [`${process.env.WALLET_PRIVATE_KEY}`],
            gas: 2100000,
            gasPrice: 8000000000,
            saveDeployments: true,
        },
    },
    // solidity: {
    //     version: "0.8.10",
    //     settings: {
    //         optimizer: {
    //             enabled: true,
    //             runs: 200,
    //         },
    //     },
    // },
    // paths: {
    //     sources: "./contracts",
    //     tests: "./test",
    //     cache: "./cache",
    //     artifacts: "./artifacts",
    // },
    // mocha: {
    //     timeout: 20000,
    // },
};
