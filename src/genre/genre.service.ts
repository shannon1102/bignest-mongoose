import { GenreDto } from './genre.dto';

import { ClientSessionOptions } from 'http2';
import { Model } from 'mongoose';
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
  async create(createGenreDto: Genre, session: mongoose.ClientSession) {
    return await this.genreRepository.create(createGenreDto,session)
  }
}
