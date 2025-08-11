import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { QuotesService } from './quotes/quotes.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const quotesService = app.get(QuotesService);
  await app.close();
}

bootstrap();
