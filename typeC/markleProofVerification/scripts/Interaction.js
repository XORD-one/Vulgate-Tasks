const markleRoot = require("./../root.js");

async function main() {
    [deployer, taker, maker, partner] = await ethers.getSigners();
    const MyContract = await ethers.getContractFactory("VerifyContract");
    const contractInstance = await MyContract.attach("0x121c7da7183b623cb84d7c6f780142892b962a8b");

    console.log(deployer.address);

    // console.log("markleRoot", markleRoot);
    console.log("markle root",markleRoot.root);
    console.log("markle leaf", markleRoot.leaf);
    console.log("markle proof", markleRoot.proof);

    // Now you can call functions of the contract

    const isVerified = await contractInstance.connect(deployer).claim(markleRoot.proof, markleRoot.root);
    console.log("isVerified =>", isVerified);
}

(async function () {
    try {
        const res = await main();
        // console.log(res);
    } catch (error) {
        console.log(error);
    }
})();
