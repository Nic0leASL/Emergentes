import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar la validación global para todos los DTOs
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  // Habilitar CORS para permitir peticiones desde tu frontend en Vercel
   app.enableCors({
    // Permite solo peticiones desde tu frontend de Vercel
    origin: 'https://emergentes-bxqy.vercel.app', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Añade OPTIONS explícitamente
    credentials: true,
    // Permite cabeceras de Content-Type y Authorization (para tokens)
    allowedHeaders: 'Content-Type, Accept, Authorization', 
  });

  // Iniciar la aplicación en el puerto que Heroku asigne, o 3000 en local
  await app.listen(process.env.PORT || 3000);
}

bootstrap();