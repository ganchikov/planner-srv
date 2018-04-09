import {Module, Global} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Collections} from 'constants/mongo';
import {CounterService} from './counter.service';
import {CounterSchema} from './counter.schema';

@Global()
@Module({
    imports: [MongooseModule.forFeature([{name: Collections.counters, schema: CounterSchema}])],
    components: [CounterService],
    exports: [CounterService],
})
export class CounterModule {}