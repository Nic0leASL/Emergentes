import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // --- COMIENZO DE LA CONFIGURACIÓN CORS ---
  app.enableCors({
    // Aquí es donde defines qué dominios pueden hacer peticiones a tu API.
    origin: [
      'http://localhost:5173', // Para desarrollo local (Vite/React)
      'https://nombre-de-tu-app.vercel.app', // <-- ¡TU URL DE VERCEL AQUÍ!
      'https://sedes-referencias-frontend.vercel.app', // Ejemplo si el nombre es fijo
      // Puedes usar una expresión regular si necesitas muchos subdominios
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Importante si usas cookies o sesiones (Auth)
  });
  // --- FIN DE LA CONFIGURACIÓN CORS ---
  
  // NestJS usará el puerto que Heroku le asigne (process.env.PORT)
  await app.listen(process.env.PORT || 3000); 
}
bootstrap();