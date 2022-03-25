import { TransactionInterceptor } from '../../common/interceptor/transaction.interceptor';
import { GenreDto } from './genre.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { GenreService } from './genre.service';
import mongoose from 'mongoose';
import { TransactionParam } from 'src/common/decorators/transaction-param.decorator';
import { Genre } from './genre.model';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) { }


  @Get()
  findAll() {
    return this.genreService.findAll()
  }
  @Post()
  // @UseInterceptors(TransactionInterceptor)
  create(@Body() createGenreDto: GenreDto,
  ) {
    return this.genreService.create(createGenreDto);
  }


}
