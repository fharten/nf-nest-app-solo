import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuoteModule } from './quotes/quotes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from './quotes/quote.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/entity/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    QuoteModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Quote, User],
      synchronize: true,
      migrations: [__dirname + '/../database/migrations/*.{js,ts}'], // Path to your migration files
      migrationsRun: false, // Set to true if you want migrations to run on app start (careful in prod!)
      logging: ['query', 'error'],
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
