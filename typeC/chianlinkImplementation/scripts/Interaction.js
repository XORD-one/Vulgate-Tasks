
async function main() {
    [deployer, taker, maker, partner] = await ethers.getSigners();
    const MyContract = await ethers.getContractFactory("PriceGetter");
    const contractInstance = await MyContract.attach("0x99eC4C075d07D82bBc8Ca9D5f2B3209cBE64B154");

    console.log(deployer.address);

    const ethDaiPrice = await contractInstance.getEthDai();
    console.log("ethDaiPrice", ethDaiPrice.toString()/1e18);
}

(async function () {
    try {
        const res = await main();
        // console.log(res);
    } catch (error) {
        console.log(error);
    }
})();
