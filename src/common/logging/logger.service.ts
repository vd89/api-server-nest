import { Injectable } from '@nestjs/common';
import pino, { Logger } from 'pino';

@Injectable()
export class LoggerService {
  private logger: Logger;

  constructor () {
    const transports: any[] = [];

    if (process.env.NODE_ENV === 'development') {
      transports.push({
        target: 'pino-pretty',
        options: {
          colorize: true,
          levelFirst: true,
          translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
          ignore: 'pid,hostname',
          messageFormat: '{levelLabel} [{context}] {msg} {args}',
          errorLikeObjectKeys: [ 'err', 'error' ],
        },
      });
    }

    this.logger = pino({
      level: process.env.LOG_LEVEL || 'info',
      base: { context: 'App' },
      transport: transports.length
        ? { targets: transports }
        : undefined,
    });
  }
  setContext (context: string): void {
    this.logger = this.logger.child({ context });
  }

  info (message: string, ...args: any[]) {
    this.logger.info({ args }, message);
  }

  error (message: string, ...args: any[]) {
    this.logger.error({ args }, message);
  }

  warn (message: string, ...args: any[]) {
    this.logger.warn({ args }, message);
  }

  debug (message: string, ...args: any[]) {
    this.logger.debug({ args }, message);
  }
}