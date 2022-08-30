import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import SwaggerConfig from './configs/swagger.config';
if (process.env.NODE_ENV === 'development') require('dotenv/config');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerConfig.init(app)
  app.enableCors()
  await app.listen(Number(process.env.PORT) || 8080)
}
bootstrap();
