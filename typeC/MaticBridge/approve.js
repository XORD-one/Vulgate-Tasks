const { getMaticPOSClient, from } = require("./config");

const amount = "1_000_000_000_000_000"; // amount in wei 0.001 ETH
const token = "0xf7E55e84d5419C4Aac87e67975959cb37a65Dcfb"; //parent (goerli)

async function execute() {
    const maticPOSClient = getMaticPOSClient();
    const result = await maticPOSClient.approveERC20ForDeposit(token, amount, { from });
    console.log("ERC20 approve:: result");
    console.log(result);
}

(async function () {
    await execute();
    process.exit(0);
})();

// execute().then(_ =>   process.exit(0))
