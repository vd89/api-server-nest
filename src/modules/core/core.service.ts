import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/common/logging/logger.service';

@Injectable()
export class CoreService {

  constructor (private readonly logger: LoggerService) {
    this.logger.setContext(CoreService.name);
  }
  getStatus (): string {
    this.logger.info('getStatus called');
    return 'Hello World! This is a NestJS application.';
  }
}