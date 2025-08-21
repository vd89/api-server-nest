import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER ?? 'postgres',
  password: process.env.DB_PASS ?? 'adminPassword',
  database: process.env.DB_NAME ?? 'task_manager',
  autoLoadEntities: true,
  synchronize: false, // Use migrations!
  migrations: ['dist/database/migrations/*.js'],
  migrationsRun: true,
};
