import { BookDto } from './book.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from "./book.model";
import * as mongoose from 'mongoose';
import { TransactionService } from 'src/common/globals/transactionService';
export class BookRepository {
    constructor(@InjectModel(Book.name) private readonly bookModel: Model<Book>,
        private readonly transactionService: TransactionService

    ) {
        console.log("Init book repository");
        console.log(this.transactionService.getSession())
    }
    async create(items: BookDto) {
        try {
            const checkSession = this.transactionService.getSession()
            console.log(checkSession)
            await new this.bookModel(items).save({ session: checkSession });
        } catch (e) {
            throw new Error(`Error:${e}`);
        }
    }
    async createMany(items: BookDto[]) {

        try {
            for (let i = 0; i < items.length; i++) {
                await this.create(items[i])
            }
        } catch (e) {
            throw new Error('Error insert many books');
        }
    } 
    async findAll(): Promise<Book[]> {
        return await this.bookModel.find()
            .populate('author')
            .populate('genre')
    }

    async findOne(id: any): Promise<Book> {
        return await this.bookModel.findOne({ _id: id })
            .populate('author')
            .populate('genre')
    }


    delete(id: any) {
        throw new Error('Method not implemented.');
    }



    update(id: string, item: Book) {
        throw new Error('Method not implemented.');
    }
  
}

