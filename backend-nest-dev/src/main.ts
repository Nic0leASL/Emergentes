// c:\Users\as280\Downloads\sedes-referencias-main\sedes-referencias-main\backend-nest-dev\src\main.ts

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // ----> CANARIO DE VERIFICACIÓN DE DESPLIEGUE <----
  console.log("--- INICIANDO BACKEND - VERSIÓN [PON LA FECHA Y HORA AQUÍ] ---");

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
