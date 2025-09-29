// En tu archivo backend-nest-dev/src/main.ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Añade un ValidationPipe global para validar automáticamente los DTOs.
  app.useGlobalPipes(new ValidationPipe());

  // Configuración de CORS explícita para aceptar todo.
  // Esto es para asegurarnos de que no hay ninguna mala configuración.
  app.enableCors({
    origin: true, // Refleja el origen de la petición
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // El puerto puede ser diferente dependiendo de tu configuración en Render.
  // Usualmente Render lo gestiona con process.env.PORT.
  await app.listen(process.env.PORT || 3000); // Render usará process.env.PORT
}
bootstrap();
