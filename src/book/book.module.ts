import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './book.model';
import { BookRepository } from './book.repository';
import { BaseService } from 'src/base/base.services';

@Module({
  imports:[ MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])],
  controllers: [BookController],
  providers: [BookService,BookRepository,BaseService]
})
export class BookModule {}
