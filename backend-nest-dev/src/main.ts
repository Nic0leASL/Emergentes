// c:\Users\as280\Downloads\sedes-referencias-main\sedes-referencias-main\backend-nest-dev\src\main.ts

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // Lista de orígenes permitidos. Usamos una expresión regular para Netlify.
  const allowedOrigins = [
    'http://localhost:5173', // Entorno de desarrollo local
    /^https:\/\/([a-z0-9-]+\--)?sedes-referencias\.netlify\.app$/, // URLs de Netlify (principal y previews)
  ];

  app.enableCors({
    // La función `origin` es la forma más robusta de manejar una whitelist.
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.some(o => (o instanceof RegExp ? o.test(origin) : o === origin))) {
        callback(null, true);
      } else {
        callback(new Error('No permitido por CORS'));
      }
    },
    // Aseguramos que el método OPTIONS esté explícitamente permitido.
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
