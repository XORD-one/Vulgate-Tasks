import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Erc1484Module } from './erc1484/erc1484.module';
import { Erc1484Service } from './erc1484/erc1484.service';

@Module({
  imports: [Erc1484Module],
controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
