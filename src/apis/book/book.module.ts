import { GenreService } from '../genre/genre.service';
import { GenreModule } from '../genre/genre.module';
import { GenreRepository } from '../genre/genre.repository';
import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './book.model';
import { BookRepository } from './book.repository';
import { TransactionService } from 'src/common/globals/transactionService';

@Module({
  imports: [MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),GenreModule],
  controllers: [BookController],
  providers: [BookService, BookRepository, TransactionService,GenreService],
})
export class BookModule { }
