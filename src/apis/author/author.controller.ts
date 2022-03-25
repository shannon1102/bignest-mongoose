import { TransactionInterceptor } from '../../common/interceptor/transaction.interceptor';
import { AuthorDto } from './author.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { AuthorService } from './author.service';


@Controller('genre')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) { }


  @Get()
  findAll() {
    return this.authorService.findAll()
  }
  @Post()
  // @UseInterceptors(TransactionInterceptor)
  create(@Body() authorDto: AuthorDto,
  ) {
    return this.authorService.create(authorDto);
  }


}
