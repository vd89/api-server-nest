import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino'; // Add this import
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import { LoggingModule } from './common/logging/logging.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [ appConfig, databaseConfig ] }),
    // LoggerModule.forRoot({
    //   pinoHttp: {
    //     transport: process.env.NODE_ENV === 'development'
    //       ? {
    //           target: 'pino-pretty',
    //           options: {
    //             colorize: true,
    //             levelFirst: true,
    //             translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
    //             ignore: 'pid,hostname',
    //             messageFormat: '{levelLabel} [{context}] {msg}',
    //             errorLikeObjectKeys: ['err', 'error'],
    //           },
    //         }
    //       : undefined,
    //     level: process.env.LOG_LEVEL || 'info',
    //     customProps: () => ({ context: 'App' }),
    //   },
    // }),
    DatabaseModule,
    LoggingModule,
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule { }
