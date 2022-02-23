import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nest Server Working With Hot Reload & Docker Compose!!';
  }
}
