import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME ?? 'postgres',
  password: process.env.DB_PASSWORD ?? 'adminPassword',
  database: process.env.DB_DATABASE ?? 'task_manager',
  autoLoadEntities: true,
  synchronize: false, // Use migrations!
  migrations: [ __dirname + '/database/migrations/*{.ts,.js}' ],
  migrationsRun: true,
};
