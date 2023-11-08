import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// async function
async function start() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
// async function ends

//! Samandar Irismatillayev (new)
//* Some test

start();
