import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  anotherGet(): string {
    return 'Another Get!';
  }
  printName(name): Object {
    return {
      status: 'success',
      statusCode: 200,
      data:{
        name,
      }
    }
  }
}
