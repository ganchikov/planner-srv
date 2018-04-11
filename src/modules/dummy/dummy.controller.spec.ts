import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import {getModelToken} from '@nestjs/mongoose';
import {Schema, Model} from 'mongoose';

import {Collections} from '../../constants/mongo';
import {Counter} from '../../interfaces/counter.interface';
// import {CounterSchema} from '../counter/counter.schema';
import {mockgooseProvider} from '../database/mockgoose.provider';
import {DummyModule} from './dummy.module';
import { DummyService} from './dummy.service';
// import {DummySchema} from './dummy.schema';

describe('TeamsController', () => {

  let svc: DummyService;

  // const token = getModelToken(DummySchema);
  // const provider = {
  //   provide: token,
  //   useFactory: async connection => connection.model('dummy', DummySchema),
  //   inject: ['MockgooseToken'],
  // } as any;

  beforeAll(async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    const module = await Test.createTestingModule({
      components: [DummyService],
      imports: [{provide: 'DummyModelToken', useValue: {}}],
    }).compile();
    svc = module.get<DummyService>(DummyService);
  });

  describe('test', () => {
    it('should pass', async () => {
      // const result = [{name: 'A', members: []}];
      // jest.spyOn(svc, 'dummyMethod').mockImplementation(() => 'result');

      expect(1).toBe(1);
      // expect(await svc.dummyMethod()).toBe('result');
      // // expect(appController.root()).toBe('Hello World!');
    });
  });
});
