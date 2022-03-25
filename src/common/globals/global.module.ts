import { TransactionService } from './transactionService';
import { Global, Module } from "@nestjs/common";

@Global()
@Module({

    providers: [TransactionService],
    exports: [TransactionService],
})
export class TransactionModule { }