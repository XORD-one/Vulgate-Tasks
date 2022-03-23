import { Controller ,Body,Get,Post,Param,Response, Res} from '@nestjs/common';
import { Erc1484Service } from './erc1484.service';
import {identityDTO} from './identity.dto';
@Controller('erc1484')
export class Erc1484Controller {
    constructor(private readonly erc1484S: Erc1484Service ){}
    @Get('delegated')
    async createIdentityDelegated(@Response() res){
        let resu = await this.erc1484S.createDelegatedIDentity();
        return res.send(resu);

    }
    @Post()
    async createIdentity(@Response() res, @Body() identity : identityDTO){
        let resu = await this.erc1484S.createIdentity(identity.recoveryAddress,
            identity.providers,identity.resolvers);
            return  res.send(resu);


    }

        @Get(":id")
        async getIdentity(@Response() res,@Param('id') id :number){
                let resu = await this.erc1484S.identityExists(id);
                return  res.send(resu);
                console.log(resu);

        }
       
      
    }