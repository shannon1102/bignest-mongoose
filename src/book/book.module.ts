import { GenreRepository } from './../genre/genre.repository';
import { GenreService } from './../genre/genre.service';
import { GenreModule } from './../genre/genre.module';

import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './book.model';
import { BookRepository } from './book.repository';
// import { BaseService } from 'src/base/base.services';
import { TransactionService } from './transactionService';

@Module({
  imports: [MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]), GenreModule],
  controllers: [BookController],
  providers: [BookService, BookRepository, TransactionService]
})
export class BookModule { }
