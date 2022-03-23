import { TransactionInterceptor } from './../common/interceptor/transaction.interceptor';
// import { BaseService } from './../base/base.services';
// import { BaseController } from './../base/base.controller';
import { Book } from './book.model';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { BookService } from './book.service';
import { LoggingInterceptor } from 'src/common/interceptor/logging.interceptor';
import { TransactionParam } from 'src/common/decorators/transaction-param.decorator';
import mongoose from 'mongoose';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) { }

  @Post()
  @UseInterceptors(TransactionInterceptor)
  async create(@Body() createBookDto: Book,
    @TransactionParam() transaction : mongoose.ClientSession) {

    
    return await this.bookService.create(createBookDto,transaction);
  }

}
