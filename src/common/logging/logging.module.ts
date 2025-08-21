import { Module, Global } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { LoggerModule } from 'nestjs-pino';

@Global()
@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport: process.env.NODE_ENV === 'development'
          ? {
            target: 'pino-pretty',
            options: {
              colorize: true,
              levelFirst: true,
              translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
              ignore: 'pid,hostname',
              messageFormat: '{levelLabel} [{context}] {msg}',
              errorLikeObjectKeys: [ 'err', 'error' ],
            },
          }
          : undefined,
        level: process.env.LOG_LEVEL || 'info',
        customProps: () => ({ context: 'App' }),
      },
    }),
  ],
  providers: [
    LoggerService
  ],
  exports: [ LoggerService ],
})
export class LoggingModule { }