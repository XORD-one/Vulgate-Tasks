import { Injectable } from '@nestjs/common';
import {ethers, providers} from 'ethers'
import {abi} from "./abi";
const cAddress  = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
@Injectable()
export class Erc1484Service {
    

 provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
 signer = this.provider.getSigner();
 
 



 
 cInstance = new ethers.Contract(cAddress,abi['abi'],this.signer);

 identityExists = async(ein : number)=>{
    
     console.log((await this.signer.getBalance()).toString());
     let res = await this.cInstance.identityExists(ein);
     console.log(`response recieved is ${res}`);
     return res;
     

 }
 createIdentity = async(recovery:string,resolvers:any,providers:any)=>{
     let res = await this.cInstance.createIdentity(recovery,providers,resolvers);
     console.log(`response recieved is ${res}`);
     return await res;
 }
 
createDelegatedIDentity = async()=>{
    
    let msgHash = ethers.utils.arrayify(ethers.utils.id("I authorize creation of this Identity"));
    
    let acc2 = await this.provider.getSigner(1);
    let acc3 = await this.provider.getSigner(2);
    let sig2 = await acc2.signMessage(msgHash);
    let sigV = await ethers.utils.splitSignature(sig2);
    let addr1 = await this.signer.getAddress();
    let addr2 = await acc2.getAddress();
    let addr3 = await acc3.getAddress();
    console.log(`id of address 1 is ${addr1}, address 2 is ${addr2}`);
    let res = await this.cInstance.createIdentityDelegated(
    addr1,
    addr2,
    [addr2,addr3],
    [addr2,addr3],
    sigV.v,sigV.r,sigV.s,2
    )
    return res;
}
 










}