const { getMaticPOSClient, from } = require("./config");

const burnHash = "0xbadbf10a33ba5ae48cfa1660e011eb15bf927773610ace9466c71d14749d4132";

const execute = async () => {
    try {
        const tx = await getMaticPOSClient().exitERC20(burnHash, {
            from: from,
            gasPrice: 900000000000,
            gas: 400000,
        });
        console.log("ERC20 exit:: tx.transactionHash"); // eslint-disable-line
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
