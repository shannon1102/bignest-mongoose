import { TransactionInterceptor } from '../../common/interceptor/transaction.interceptor';
// import { BaseService } from './../base/base.services';
// import { BaseController } from './../base/base.controller';
import { Book } from './book.model';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './book.dto';

@Controller('book')
@UseInterceptors(TransactionInterceptor)
export class BookController {
  constructor(private readonly bookService: BookService) { }

  @Post()
  async create(@Body() createBookDto: BookDto,
  ) {

    return await this.bookService.create(createBookDto);
  }

  @Post('/many')
  // @UseInterceptors(TransactionInterceptor)
  async createMany(@Body() booksDto: BookDto[],
  ) {

    return await this.bookService.createMany(booksDto);
  }


  @Get()
  // @UseInterceptors(TransactionInterceptor)
  async findAll(
  ) {

    return await this.bookService.findAll();
  }
  @Get(':id')
  // @UseInterceptors(TransactionInterceptor)
  async findOne(
    @Param('id') id: any
  ) {

    return await this.bookService.findOne(id);
  }


}
