import { BookRepository } from './book.repository';
import { Book } from './book.model';
import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BookService {

  constructor(
    private readonly BookRepository: BookRepository
  ) {
  }
  async create(createBookDto: Book) {
    return await this.BookRepository.create(createBookDto)
  }
  async createMany(createBookDto: Book[] ){
    return await this.BookRepository.createMany(createBookDto)

  }
  async findAll() {
    return await this.BookRepository.findAll()
  }

  async findOne(id: any) {
    return await this.BookRepository.findOne(id);
  }

  async update(id: any, updateBookDto: Book) {
    console.log("In update ")
    console.log(updateBookDto)
    return await this.BookRepository.update(id, updateBookDto)
  }


  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
