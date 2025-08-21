import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ ConfigService ],

      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.database'),
        autoLoadEntities: true,
        synchronize: configService.get('database.synchronize'),
        migrations: [ __dirname + '/database/migrations/*{.ts,.js}' ],
        migrationsRun: configService.get('database.migrationsRun'),
        logging: configService.get('database.logging'),
        // Add connection pool configuration for better performance
        poolSize: configService.get('database.poolSize', 10),
        /// Add SSL configuration for production
        ssl: configService.get('database.ssl', false) ? { rejectUnauthorized: false } : false,
      })
    }),
  ],
})
export class DatabaseModule {}
