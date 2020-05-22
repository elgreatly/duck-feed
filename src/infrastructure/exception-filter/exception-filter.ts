import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = exception.getStatus();
        Logger.log(exception);
        const errors = [
            {
                message: exception.message,
            },
        ];

        if (exception.message.errors || exception.message.error) {
            response.status(status).json(exception.message);
        } else {
            response.status(status).json({
                status,
                message: exception.message,
                errors,
            });
        }
    }
}
