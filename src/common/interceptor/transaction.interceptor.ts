import { TransactionService } from './../../book/transactionService';
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Connection } from 'mongoose';
import { catchError, Observable, tap, throwError } from "rxjs";
import { InjectConnection } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class TransactionInterceptor implements NestInterceptor {
    constructor(
        @InjectConnection() private connection: Connection,
        private readonly transactionService: TransactionService

    ) {
        console.log("Init Transaction");
     }

    async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
        const httpContext = context.switchToHttp();
        const req = httpContext.getRequest();
        const session = await this.connection.startSession();
        session.startTransaction();
        req.transaction = session;
        this.transactionService.setSession(session);

        return next.handle()
            .pipe(
                tap(() => {
                    // this.transactionService.getSession().commitTransaction()
                    session.commitTransaction()
                    console.log("Thanh cong")
                }),
                catchError(err => {
                    // this.transactionService.getSession().abortTransaction()
                    session.abortTransaction()
                    console.log('ERROR');
                    return throwError(() => err);
                }),

            );
    }
}

