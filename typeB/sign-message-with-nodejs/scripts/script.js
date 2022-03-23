const { ROPSTEN_API_KEY, WALLET_PUBLIC_ADDRESS, WALLET_PRIVATE_KEY } = require("./../secret");
const Web3 = require("web3");
const MyContract = require("./../build/contracts/verifySignature.json");

const init3 = async () => {
    try {
        const web3 = new Web3(ROPSTEN_API_KEY);
        const networkId = await web3.eth.net.getId();
        const myContract = new web3.eth.Contract(MyContract.abi, MyContract.networks[networkId].address);

        const checking = await myContract.methods;
        const messageHash = await checking.getMessageHash(myContract.options.address, "message to sign", 1).call();
        console.log(messageHash);
        console.log("|\n");

        const signedMessageHash = await checking.getSignedMessageHash(messageHash).call();
        console.log(signedMessageHash, "\n|\n");

        const signedMessage = web3.eth.accounts.sign("message to sign", WALLET_PRIVATE_KEY);
        // {message, messageHash, signature, v, r, s }= signedMessage
        console.log(signedMessage, "\n|\n");

        const verifyResponse = await checking
            .verify(WALLET_PUBLIC_ADDRESS, myContract.options.address, "message to sign", 1, signedMessage.signature)
            .call();
        console.log(verifyResponse, "\n|\n");

        const recoverSignerResponse = await checking.recoverSigner(signedMessageHash, signedMessage.signature).call();
        console.log(recoverSignerResponse, "\n|\n");
    } catch (error) {
        console.log(error.message);
    }
};
init3();
