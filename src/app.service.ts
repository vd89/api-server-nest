import { Injectable } from '@nestjs/common';
import { LoggerService } from './common/logging/logger.service';

@Injectable()
export class AppService {
  constructor (private readonly logger: LoggerService) { }

  getHello(): string {
    this.logger.info('getHello called');
    return 'Hello World! This is a NestJS application.';
  }
}
