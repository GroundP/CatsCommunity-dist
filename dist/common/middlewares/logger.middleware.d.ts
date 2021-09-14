import { NestMiddleware } from '@nestjs/common';
import { Response, Request, NextFunction } from 'express';
export declare class LoggerMiddleware implements NestMiddleware {
    private logger;
    use(req: Request, res: Response, next: NextFunction): void;
}
