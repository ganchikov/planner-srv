import { ExceptionFilter, Catch } from '@nestjs/common';
import { HttpException } from '@nestjs/common';

@Catch()
export class GenericExceptionFilter implements ExceptionFilter {
  async catch(exception, response) {
    response
      .status(500)
      .json({
        statusCode: 500,
        message: exception.message,
      });
  }
}