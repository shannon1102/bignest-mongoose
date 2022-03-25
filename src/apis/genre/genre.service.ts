import { GenreDto } from './genre.dto';

import { ClientSessionOptions } from 'http2';
import mongoose from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Genre } from './genre.model';
import { GenreRepository } from './genre.repository';


@Injectable()
export class GenreService {
  constructor(
    private readonly genreRepository: GenreRepository
  ) {
  }
  async create(createGenreDto: GenreDto) {
    return await this.genreRepository.create(createGenreDto)
  }
  async findAll() {
    return await this.genreRepository.findAll()
  }
}
