import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GenreDto } from './genre.dto';
import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import { Genre } from './genre.model';

@Injectable()
export class GenreRepository {
    constructor(@InjectModel(Genre.name) private readonly genreModel: Model<Genre>,
        // private readonly transactionService: TransactionService
    ) {

    }
    async create(items: GenreDto,session: mongoose.ClientSession) {
        

            try {
                await new this.genreModel(items).save({ session: session });

            } catch (e) {
                throw new Error('Error insert many books');
            }
        }

}
