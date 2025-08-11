import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Service that gives a list of quotes back as json
// Service that gives a single quote back as json

// Controller for a Route that returns a random quote
// Controller for a Route that returns all quotes

// basic server functionality
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3232);
  console.log(`Server ist running on port ${await app.getUrl()}`);
}

bootstrap();
