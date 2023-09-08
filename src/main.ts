import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    // key: fs.readFileSync('./secrets/server.key'),
    // cert: fs.readFileSync('./secrets/server.crt'),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
