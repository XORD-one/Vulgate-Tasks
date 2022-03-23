import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/another')
  anotherGet(): string {
    return this.appService.anotherGet();
  }
  @Get(':name')
  printName(@Param('name') name): Object {
    return this.appService.printName(name);
  }
}
