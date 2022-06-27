import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'App is running! Documentation: https://localhost:8000/docs';
  }
}
