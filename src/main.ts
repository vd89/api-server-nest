import helmet from 'helmet';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import pinoHttp from 'pino-http';

import { NestFactory } from '@nestjs/core';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { LoggerService } from './common/logging/logger.service';


import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';

async function bootstrap () {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  // helmet for setting
  app.use(helmet());
  app.useLogger(app.get(Logger));
  // Use pino-http for request logging
  app.use(pinoHttp());

  // Enable CORS
  app.enableCors();

  // Set global prefix for API routes
  app.setGlobalPrefix('api');

  app.useGlobalInterceptors(new ResponseInterceptor());

  app.useGlobalFilters(new AllExceptionsFilter());

  // Setting the swagger setting

  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // Start the application
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  const logger = app.get(LoggerService);
  logger.info(`Server is running on port http://localhost:${port}/api`);
  logger.info(`Swagger documentation is available at http://localhost:${port}/api/docs`);
}
bootstrap();
