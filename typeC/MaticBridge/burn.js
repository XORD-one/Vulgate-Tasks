const { getMaticPOSClient, from } = require("./config");

const amount = "1_000_000_000_000_000"; // amount in wei 0.001 ETH
// const token = pos.child.erc20
const token = "0xf9D9841aDb4F80F765dbFb1dEA09Fb0c6818d75Eg"; //child erc20 (matic)

const execute = async () => {
    try {
        const tx = await getMaticPOSClient().burnERC20(token, amount, {
            from: from,
            gasPrice: 900000000000,
            gas: 300000,
        });
        console.log("ERC20 burn:: tx"); // eslint-disable-line
        console.log(tx); // eslint-disable-line
    } catch (e) {
        console.error(e); // eslint-disable-line
    }
};
(async function () {
    await execute();
    process.exit(0);
})();

// execute().then(() => process.exit(0))
