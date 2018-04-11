import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import {mockgooseProvider} from './mockgoose.provider';

@Module({
  components: [...databaseProviders, mockgooseProvider],
  exports: [...databaseProviders, mockgooseProvider],
})
export class DatabaseModule {}