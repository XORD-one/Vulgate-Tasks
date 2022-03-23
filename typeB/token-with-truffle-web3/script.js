const { ROPSTEN_API_KEY, WALLET_PUBLIC_ADDRESS, WALLET_PRIVATE_KEY } = require("./secret");
const Web3 = require("web3");
const Provider = require("@truffle/hdwallet-provider");
const MyContract = require("./build/contracts/Mutahhir.json");
console.log("ROPSTEN_API_KEY,  WALLET_PUBLIC_ADDRESS, WALLET_PRIVATE_KEY");
console.log(ROPSTEN_API_KEY, WALLET_PUBLIC_ADDRESS, WALLET_PRIVATE_KEY);

const init1 = async () => {
    const web3 = new Web3(ROPSTEN_API_KEY);
    const networkId = await web3.eth.net.getId();
    const myContract = new web3.eth.Contract(MyContract.abi, MyContract.networks[networkId].address);

    const tx = myContract.methods.totalSupply();
    const gas = await tx.estimateGas({ from: WALLET_PUBLIC_ADDRESS });
    const gasPrice = await web3.eth.getGasPrice();
    const data = tx.encodeABI();
    const nonce = await web3.eth.getTransactionCount(WALLET_PUBLIC_ADDRESS);

    const signedTx = await web3.eth.accounts.signTransaction(
        {
            to: myContract.options.address,
            data,
            gas,
            gasPrice,
            nonce,
            chainId: networkId,
        },
        WALLET_PRIVATE_KEY
    );
    console.log(`Old supply : ${await myContract.methods._totalSupply().call()}`);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log(`Transaction hash: ${receipt.transactionHash}`);
    console.log(`New data value: ${await myContract.methods._totalSupply().call()}`);
};
init1();
