import { Module, NestModule, MiddlewaresConsumer, RequestMethod} from '@nestjs/common';
import {LoggerMiddleware} from './middleware/logger.middleware';
import {MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import {TeamsModule} from 'services/teams/teams.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/plannerdb'),
    TeamsModule],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(LoggerMiddleware).with('AppModule').forRoutes(AppController);
  }
}
