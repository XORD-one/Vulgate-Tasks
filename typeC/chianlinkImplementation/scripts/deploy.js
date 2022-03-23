// scripts/create-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {

//Deploying Normal Contract
  const PriceGetter = await ethers.getContractFactory("PriceGetter");
  const priceGetter = await PriceGetter.deploy();
  await priceGetter.deployed();
    console.log("PriceGetter Contract Address", priceGetter.address);
  
}

main();
