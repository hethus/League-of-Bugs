import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  app.set('trust proxy', 1);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('League of Bugs')
    .setDescription(
      'League of Bugs (LoB) é um projeto desenvolvido para o modulo 4 da Blue com base no jogo League of Legends!',
    )
    .addTag('status')
    .addTag('auth')
    .addTag('users')
    .addTag('favorites')
    .addTag('purchase bugpoints')
    .addTag('purchase champions')
    .addTag('champions')
    .addTag('classes (adm)')
    .addTag('bugpoints (adm)')
    .addBearerAuth()
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 8000);
}
bootstrap();
