import { Interceptor, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Interceptor()
export class LoggingInterceptor implements NestInterceptor {
  intercept(dataOrRequest, context: ExecutionContext, stream$: Observable<any>): Observable<any> {
    const time: Date = new Date(Date.now());
    const start: Date = new Date(time.getTime());
    const logStr: string = `${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()} ${context.parent.name}.${context.handler.name}`;
    console.log(logStr.concat(' started'));

    return stream$.do(
      () => {
          time.setTime(Date.now());
          const elapsedTime = time.getTime() - start.getTime();
          console.log(logStr.concat(` completed in ${elapsedTime} ms`));
        },
    );
  }
}