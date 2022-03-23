// scripts/create-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {

//Deploying Normal Contract
  const Markle = await ethers.getContractFactory("VerifyContract");
  const markle = await Markle.deploy();
  await markle.deployed();
    console.log("Markel VerifyContract Contract Address", markle.address);


//Deploying Upgradable Contract  
  // const Greeter = await ethers.getContractFactory("GreeterUpgrade");
  // const greeter = await upgrades.deployProxy(Greeter,["Hello World"],{initializer: 'initialize'});
  // await greeter.deployed();
  // console.log("Greeter Upgradable Contract Address", greeter.address);

//Upgrading Upgradable Contract  
  // const proxyAddress = '0x9539f8A71e8129623050ee117a92Efa6c5a23e5b';  
  // const Greeter = await ethers.getContractFactory("GreeterUpgrade");
  // const GreeterAddress = await upgrades.prepareUpgrade (proxyAddress,Greeter);
  // console.log("Greeter upgrade address :",GreeterAddress);
  
}

main();
