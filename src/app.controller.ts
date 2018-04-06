import { Get, Controller, Req } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  root(@Req() request): string {
    return 'Hello World!';
  }
}
