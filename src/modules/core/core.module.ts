import { Module } from '@nestjs/common';
import { CoreController } from './core.controller';
import { CoreService } from './core.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/database/database.module';
import { LoggingModule } from 'src/common/logging/logging.module';


import appConfig from 'src/config/app.config';
import databaseConfig from 'src/config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [ appConfig, databaseConfig ] }),
    DatabaseModule,
    LoggingModule,
  ],
  controllers: [ CoreController ],
  providers: [ CoreService ],
  exports: [ CoreService ],
})
export class CoreModule { }