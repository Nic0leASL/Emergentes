import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// ¡Asegúrate de que no haya importaciones de NestJS aquí abajo!
// Por ejemplo:
// import { NestFactory } from '@nestjs/core'; <--- ¡ELIMINAR ESTO!
// async function bootstrap() {...} <--- ¡ELIMINAR ESTO!