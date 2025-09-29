// En tu archivo backend-nest-dev/src/main.ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Añade un ValidationPipe global para validar automáticamente los DTOs.
  app.useGlobalPipes(new ValidationPipe());

  // Habilita CORS para TODOS los orígenes.
  // Esto es para depuración. Si esto funciona, el problema es 100% el despliegue.
  app.enableCors();

  // El puerto puede ser diferente dependiendo de tu configuración en Render.
  // Usualmente Render lo gestiona con process.env.PORT.
  await app.listen(process.env.PORT || 3000); // Render usará process.env.PORT
}
bootstrap();
