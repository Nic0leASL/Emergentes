// En tu archivo backend-nest-dev/src/main.ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Añade un ValidationPipe global para validar automáticamente los DTOs.
  app.useGlobalPipes(new ValidationPipe());

  // Lista de orígenes permitidos. Usamos una expresión regular para Netlify.
  // const allowedOrigins = [
  //   'http://localhost:5173', // Entorno de desarrollo local
  //   /^https:\/\/([a-z0-9-]+\--)?sedes-referencias\.netlify\.app$/, // URLs de Netlify (principal y previews)
  // ];

  app.enableCors({
    origin: [
      'http://localhost:5173',
      'https://sedes-referencias.netlify.app', // URL principal de Netlify
      'https://68d9ddb72bd7d34072d176ab--sedes-referencias.netlify.app' // URL específica que da error
    ],
    credentials: true,
  });

  // El puerto puede ser diferente dependiendo de tu configuración en Render.
  // Usualmente Render lo gestiona con process.env.PORT.
  await app.listen(process.env.PORT || 3000); // Render usará process.env.PORT
}
bootstrap();
