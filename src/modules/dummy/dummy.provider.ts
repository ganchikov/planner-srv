import { Connection } from 'mongoose';
import { DummySchema } from './dummy.schema';

export const DummyProvider = [
  {
    provide: 'DummyModelToken',
    useFactory: (mongoose) => mongoose.connection.model('Dummy', DummySchema),
    inject: ['DbToken'],
  },
];