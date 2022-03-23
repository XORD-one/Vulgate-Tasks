// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    // We get the contract to deploy
     const [deployer] = await ethers.getSigners();
     
     console.log("Deploying contracts with the account:", deployer.address);
     
     console.log("Account balance:", (await deployer.getBalance()).toString());
     
     const MIT20 = await ethers.getContractFactory("Mutahhir");
     const mit20 = await MIT20.deploy();
     
     console.log("Mutahhir ERC20 address:", mit20.address);




    // Set up an ethers contract, representing our deployed Box instance
    const address = "0xdd1B9731D1eac27f706B7E09194644D6B68f7A4a";
    const contract = await ethers.getContractFactory("Mutahhir");
    const contractInstance = await contract.attach(address);
    const value = await contractInstance.functions.totalSupply();
    console.log("total supply is: ", value.toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
