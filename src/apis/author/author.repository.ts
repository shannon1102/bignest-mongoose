import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AuthorDto } from './author.dto';
import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import { TransactionService } from 'src/common/globals/transactionService';
import { Author } from './author.model';

@Injectable()
export class AuthorRepository {
    constructor(@InjectModel(Author.name) private readonly AuthorModel: Model<Author>,
        private readonly transactionService: TransactionService
    ) {
        console.log("Init Author repository");
        console.log(this.transactionService.getSession())
    }

    async create(items: AuthorDto) {
        try {
            const checkedSession = this.transactionService.getSession();
            await new this.AuthorModel(items).save({ session: checkedSession });
        } catch (e) {
            throw new Error(`Error: ${e}`);
        }
    }
    async findAll() {
        return await this.AuthorModel.find();
    }

}
