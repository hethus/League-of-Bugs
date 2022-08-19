import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'App is running! Documentation: https://league-of-bugs.onrender.com/docs/';
  }
}
