import { Genre } from './../genre/genre.model';
import { BookRepository } from './book.repository';
import { Book } from './book.model';
import mongoose from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
// import { GenreRepository } from 'src/genre/genre.repository';

@Injectable()
export class BookService {

  constructor(
    private readonly bookRepository: BookRepository,
    // private readonly genreRepository: GenreRepository
  ) {
  }
  async create(createBookDto: Book, session: mongoose.ClientSession) {
    const newGenre = new Genre()
    newGenre.name = createBookDto.name
    console.log(typeof newGenre);
    
    // await this.genreRepository.create({name:"Alo"}, session)
    return await this.bookRepository.create(createBookDto, session)
  }
  // async createMany(createBookDto: Book[] ){
  //   return await this.BookRepository.createMany(createBookDto)

  // }
  // async findAll() {
  //   return await this.BookRepository.findAll()
  // }

  // async findOne(id: any) {
  //   return await this.BookRepository.findOne(id);
  // }

  // async update(id: any, updateBookDto: Book) {
  //   console.log("In update ")
  //   console.log(updateBookDto)
  //   return await this.BookRepository.update(id, updateBookDto)
  // }


  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
