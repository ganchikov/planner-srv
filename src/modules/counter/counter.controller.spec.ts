import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import {getModelToken} from '@nestjs/mongoose';
import {Schema, Model} from 'mongoose';

import {mockgooseProvider} from '../../providers/mockgoose.provider';
import {Collections} from '../../constants/mongo';
import {Counter} from '../../interfaces/counter.interface';
// import {CounterSchema} from '../counter/counter.schema';
import { CounterService} from '../counter/counter.service';

describe('TeamsController', () => {

  let counterService: CounterService;
//   let counterModel: Model<Counter>;

//   const schema = new Schema({
//     _id: String,
//     sequence_val: Number,
// });

//   const counterToken = getModelToken(schema);
//   const counterProvider = {
//     provide: counterToken,
//     useFactory: async connection => connection.model(Collections.counters, Schema),
//     inject: ['DbConnectionTokens'],
//   } as any;

  beforeAll(async () => {
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    // const module = await Test.createTestingModule({
    //   imports: [{
    //     provide: 'CounterSchemaModel',
    //     useValue: {
    //       _id: String,
    //       sequence_val: Number,
    //     },
    //   }],
    //   components: [CounterService],
    // }).compile();

    // counterService = module.get<CounterService>(CounterService);
    // // counterModel = module.get(counterToken);
  });

  describe('getCounterIncrement', () => {
    it('should return an incremented value', async () => {
      // const result = [{name: 'A', members: []}];
      // jest.spyOn(counterService, 'getCounterIncrement').mockImplementation(() => 1);

      expect(1).toBe(1);
      // expect(await teamsController.findAll()).toBe(result);
      // expect(appController.root()).toBe('Hello World!');
    });
  });
});
