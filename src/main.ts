import helmet from 'helmet';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // helmet for setting
  app.use(helmet());

  // Enable CORS
  app.enableCors();

  // Set global prefix for API routes
  app.setGlobalPrefix('api');

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
  console.log(`Server is running on port http://localhost:${port}`);
  console.log(
    `Swagger documentation is available at http://localhost:${port}/api/docs`,
  );
}
bootstrap();
