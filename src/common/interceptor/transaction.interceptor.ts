import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Connection } from 'mongoose';
import { catchError, Observable, tap, throwError } from "rxjs";
import { InjectConnection } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class TransactionInterceptor implements NestInterceptor {

    constructor(
        @InjectConnection()
        private connection: Connection
    ) { }

    async intercept(
        context: ExecutionContext,
        next: CallHandler
    ): Promise<Observable<any>> {
        const transactionSession = await this.connection.startSession();
        const httpContext = context.switchToHttp();
        const req = httpContext.getRequest();

        transactionSession.startTransaction();
        req.transaction = transactionSession;
        console.log("Aloo")
        return next.handle()
            .pipe(
                tap(() => {

                    transactionSession.commitTransaction();
                    console.log("Committed")
                    transactionSession.endSession();
                    // console.log(transactionSession)
                }),
                catchError(err => {
                    console.log("Rollback")
                    transactionSession.abortTransaction();
                    transactionSession.endSession();
                    return throwError(() => err);
                }),

            );
    }
}

