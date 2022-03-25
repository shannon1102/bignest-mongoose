import { AuthorModule } from './apis/author/author.module';

import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './apis/book/book.module';
import { GenreModule } from './apis/genre/genre.module';
import { TransactionInterceptor } from './common/interceptor/transaction.interceptor';
import { ConfigModule } from '@nestjs/config';
import { TransactionService } from './common/globals/transactionService';
import { GenreController } from './apis/genre/genre.controller';
import { BookController } from './apis/book/book.controller';
import { BookService } from './apis/book/book.service';
import { GenreService } from './apis/genre/genre.service';
import { BookRepository } from './apis/book/book.repository';
import { GenreRepository } from './apis/genre/genre.repository';
import { Book, BookSchema } from './apis/book/book.model';
import { Genre, GenreSchema } from './apis/genre/genre.model';
import { Author, AuthorSchema } from './apis/author/author.model';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TestModule } from './test/test.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://IamVan:L3huyv4n@balo.a46z5.mongodb.net/myFirstDatabase'),
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
    MongooseModule.forFeature([{ name: Genre.name, schema: GenreSchema }]),
    MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }]),
    BookModule,
    GenreModule,
    AuthorModule,
    TransactionService,
    TestModule
  ],
  controllers: [AppController, BookController, GenreController],
  providers: [AppService, TransactionService, BookService, GenreService, BookRepository, GenreRepository,
  
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      // .apply(TransactionInterceptor)
      // .exclude({ path:'*',method: RequestMethod.GET})
      // .forRoutes('*');
    
  }
}
