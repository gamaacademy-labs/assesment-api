import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import SwaggerConfig from './configs/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerConfig.init(app)
  await app.listen(8080);
}
bootstrap();
