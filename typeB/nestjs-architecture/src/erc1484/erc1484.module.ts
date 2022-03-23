import { Module } from '@nestjs/common';
import { Erc1484Controller } from './erc1484.controller';
import { Erc1484Service } from './erc1484.service';

@Module({
  controllers: [Erc1484Controller],
  providers:[Erc1484Service]
})
export class Erc1484Module {}