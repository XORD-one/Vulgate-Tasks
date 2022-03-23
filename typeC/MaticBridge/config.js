const HDWalletProvider = require("@truffle/hdwallet-provider");
const MaticPOSClient = require("@maticnetwork/maticjs").POSClient;
console.log("MaticPOSClient", MaticPOSClient());
require('dotenv').config()

const parentProvider = "https://goerli.infura.io/v3/7f6f5921404842ba992a4d334431c6f7"; // Parent chain provider
const maticProvider = "https://polygon-mumbai.infura.io/v3/7f6f5921404842ba992a4d334431c6f7"; // child chain provider
const privateKey = process.env.WALLET_PRIVATE_KEY;
const posClient = new POSClient();
(async () => {
const maticPOSClient = await posClient.init ({
    network: "testnet",
    version: "mumbai",
    parentProvider: new HDWalletProvider([privateKey], ...[parentProvider]),
    maticProvider: new HDWalletProvider([privateKey], ...[maticProvider]),
    parentDefaultOptions: { from: "0xB7bedc98860c55fD31d0bA9F89a77483Bc59a225" },
    maticDefaultOptions: { from: "0xB7bedc98860c55fD31d0bA9F89a77483Bc59a225" },

    RootChainManager: "0x0d2ae21bf7e72f646ef8e1f2aa92edbd13588691",
    RootChainManagerProxy: "0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74",
    DummyStateSender: "0x4Ad6FFD6D9b49E832e5ac56f5aEcaB137F9F91C6",
    ERC20Predicate: "0x4b1544c9b01707f68f97ee70083e96ebe9bfe633",
})})();

module.exports = {
    getMaticPOSClient: maticPOSClient,
    from: "0xB7bedc98860c55fD31d0bA9F89a77483Bc59a225",
    privateKey: process.env.WALLET_PRIVATE_KEY,
    to: process.env.DESTINATION_WALLET_ADDRESS,
};
