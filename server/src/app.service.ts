import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to DigiCom Backend!';
  }

  getTest(): string {
    return 'This is a test!';
  }
}
