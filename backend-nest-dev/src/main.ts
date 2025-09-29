import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar la validación global para todos los DTOs
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Ignora propiedades que no están en el DTO
    forbidNonWhitelisted: true, // Lanza un error si se reciben propiedades no deseadas
  }));

  // Habilitar CORS para permitir peticiones desde tu frontend en Vercel
  app.enableCors({
    origin: 'https://emergentes-le9i.vercel.app', // URL de Vercel sin la barra final
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Iniciar la aplicación en el puerto que Heroku asigne, o 3000 en local
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
