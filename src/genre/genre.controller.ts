import { GenreDto } from './genre.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenreService } from './genre.service';
import mongoose from 'mongoose';
import { TransactionParam } from 'src/common/decorators/transaction-param.decorator';
import { Genre } from './genre.model';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) { }

  @Post()
  create(@Body() createGenreDto: Genre,
    @TransactionParam() transaction: mongoose.ClientSession) {
    return this.genreService.create(createGenreDto,
      transaction
    );
  }

}
