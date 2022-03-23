import { Genre } from './../genre/genre.model';

import { TransactionInterceptor } from './../common/interceptor/transaction.interceptor';
import { InjectConnection } from '@nestjs/mongoose';
import { throwError } from 'rxjs';
import { BaseRepository } from 'src/base/base.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from "./book.model";
import * as mongoose from 'mongoose';
import { TransactionService } from './transactionService';
export class BookRepository {
    constructor(@InjectModel(Book.name) private readonly bookModel: Model<Book>,
        private readonly transactionService: TransactionService

    ) {

    }
    async create(items: Book, session: mongoose.ClientSession) {

        try {
            const newGenre = new Genre({name: "genre1"})

            await new this.bookModel(items).save({ session: session });

        } catch (e) {
            throw new Error('Error insert many books');
        }
    }

    // async createMany(items: Book[]) {

    //     try {
    //         for (let i = 0; i < items.length; i++) {
    //             await this.create(items[i])
    //         }
    //     } catch (e) {
    //         throw new Error('Error insert many books');
    //     }
    // }
}


 // delete(id: any) {
    //     throw new Error('Method not implemented.');
    // }
    // constructor(@InjectModel(Book.name) private readonly bookModel: Model<Book>){
    //     // super(bookModel)
    // }
    // async findAll(): Promise<Book[]> {
    //    return await this.bookModel.find()
    // }
    // findOne(id: string): Promise<Book> {
    //     throw new Error('Method not implemented.');
    // }
    // create(item: Book): Promise<Book> {
    //     throw new Error('Method not implemented.');
    // }
    // update(id: string, item: Book) {
    //     throw new Error('Method not implemented.');
    // }