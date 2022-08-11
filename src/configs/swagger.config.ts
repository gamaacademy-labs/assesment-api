import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { INestApplication } from '@nestjs/common'

export default class SwaggerConfig {
  static init(app: INestApplication): void {
    const options = new DocumentBuilder()
      .setTitle('API - Boilerplate Nest')
      .setDescription('A Nest Boilerplate')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document, {
      explorer: false,
    });
  }
}
