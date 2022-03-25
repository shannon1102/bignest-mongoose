import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GenreDto } from './genre.dto';
import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import { Genre } from './genre.model';
import { TransactionService } from 'src/common/globals/transactionService';

@Injectable()
export class GenreRepository {
    constructor(@InjectModel(Genre.name) private readonly genreModel: Model<Genre>,
        private readonly transactionService: TransactionService
    ) {
        console.log("Init genre repository");
        console.log(this.transactionService.getSession())
    }

    async create(items: GenreDto) {
        try {
            const checkedSession = this.transactionService.getSession();
            await new this.genreModel(items).save({ session: checkedSession });
        } catch (e) {
            throw new Error(`Error: ${e}`);
        }
    }
    async findAll() {
        return await this.genreModel.find();
    }

}
