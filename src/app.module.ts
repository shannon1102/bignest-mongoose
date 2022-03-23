import { TransactionService } from 'src/book/transactionService';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import  { TextEncoder, TextDecoder } from "util";
import { BookModule } from './book/book.module';
import { GenreModule } from './genre/genre.module';
import { TransactionInterceptor } from './common/interceptor/transaction.interceptor';



@Module({
  imports: [ MongooseModule.forRoot('mongodb+srv://IamVan:L3huyv4n@balo.a46z5.mongodb.net/myFirstDatabase'), BookModule , GenreModule,
],
  controllers: [AppController],
  providers: [AppService, TransactionService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer
        .apply()
        .forRoutes();
    }

}
