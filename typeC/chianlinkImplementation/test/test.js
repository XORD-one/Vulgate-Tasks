const { expect } = require("chai");
const { poll } = require("ethers/lib/utils");
const { waffle,ethers } = require("hardhat");
const { userInfo } = require("os");
const provider = waffle.provider;
const web3 = require("web3");



describe('Greeter', () =>{

    const [owner, accountOne] = provider.getWallets();


    // beforeEach( async () =>{
    //     Greeter = await ethers.getContractFactory("Greeter");
    //     greeter = await Greeter.deploy("Hello World");
    // })


    // it('Should return set string', async () =>{
    //     let message =await greeter.greet();
    //     await expect(message).equal("Hello World");
    // })

   
})