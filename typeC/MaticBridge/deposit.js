const { getMaticPOSClient, from } = require("./config");

const amount = "1_000_000_000_000_000"; // amount in wei 0.001 ETH
const token = "0xf7E55e84d5419C4Aac87e67975959cb37a65Dcfb"; //parent (goerli)

const execute = async () => {
    try {
        const tx = await getMaticPOSClient().depositERC20ForUser(token, from, amount);
        console.log("ERC20 deposit:: tx.transactionHash"); // eslint-disable-line
        console.log(tx.transactionHash); // eslint-disable-line
    } catch (e) {
        console.error(e); // eslint-disable-line
    }
};
(async function () {
    await execute();
    process.exit(0);
})();

// execute().then(() => process.exit(0))
