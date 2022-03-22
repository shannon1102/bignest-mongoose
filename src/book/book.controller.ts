import { TransactionInterceptor } from './../common/interceptor/transaction.interceptor';
import { BaseService } from './../base/base.services';
import { BaseController } from './../base/base.controller';
import { Book } from './book.model';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { BookService } from './book.service';
import { LoggingInterceptor } from 'src/common/interceptor/logging.interceptor';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) { }
  // constructor(private readonly bookService: BaseService<Book>) {
  //   // super(bookService);
  // }

  @Post('/many')
  @UseInterceptors(TransactionInterceptor)
  createMany(@Body() createBooksDto: Book[]) {
    return this.bookService.createMany(createBooksDto);
  }

  @Post()
  @UseInterceptors(TransactionInterceptor)
  create(@Body() createBookDto: Book) {
    return this.bookService.create(createBookDto);
  }


  @Get()

  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.bookService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: any, @Body() updateBookDto: Book) {
    console.log(updateBookDto)
    return this.bookService.update(id, updateBookDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.bookService.remove(+id);
  // }
}
