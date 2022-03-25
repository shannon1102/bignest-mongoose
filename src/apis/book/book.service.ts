import { BookDto } from './book.dto';
import { GenreRepository } from 'src/apis/genre/genre.repository';
import { Genre } from '../genre/genre.model';
import { BookRepository } from './book.repository';
import { Book } from './book.model';
import mongoose from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { TransactionService } from 'src/common/globals/transactionService';

@Injectable()
export class BookService {

  constructor(
    private readonly bookRepository: BookRepository,
    private readonly genreRepository: GenreRepository,
  ) {
  }
  async create(createBookDto: BookDto) {

    // await this.genreRepository.create({name:"Test3"},session)
    // return await this.bookRepository.create(createBookDto, session)

    // await this.genreRepository.create({name:"Test9"})
    return await this.bookRepository.create(createBookDto)
  }

  async createMany(booksDto: BookDto[] ){
    return await this.bookRepository.createMany(booksDto)
  }
  async findAll() {
    return await this.bookRepository.findAll()
  }

  async findOne(id: any) {
    return await this.bookRepository.findOne(id);
  }

  // async update(id: any, updateBookDto: Book) {
  //   console.log("In update ")
  //   console.log(updateBookDto)
  //   return await this.BookRepository.update(id, updateBookDto)
  // }


  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
