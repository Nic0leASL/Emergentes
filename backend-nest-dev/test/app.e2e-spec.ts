import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';  // Importa el módulo principal de la app

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],  // Importa tu módulo principal
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())  // Haciendo una solicitud GET al servidor
      .get('/')
      .expect(200)  // Esperando un estado 200
      .expect('Hello World!');  // Esperando la respuesta 'Hello World!'
  });
});
