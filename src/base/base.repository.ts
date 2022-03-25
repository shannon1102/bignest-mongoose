import { BaseSchema, Base } from './base.interface';
import { Model } from 'mongoose';
import { IBaseRepository } from './i.base.repository';
import { InjectConnection } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
export class BaseRepository<T extends Base> implements IBaseRepository<T>{
    constructor(
        private readonly model: Model<T>,

    ) {
    }
    // async create(item: T,session : mongoose.ClientSession): Promise<T> {
    //     try {
    //         const newBook = await new this.model(item).save({session: session});
    //         return newBook
    //     } catch (error) {
    //         throw new Error('Error');
    //     }
    // };
    create(item: T,session : mongoose.ClientSession): Promise<T> {
        throw new Error('Method not implemented.');
    }
    async findAll(): Promise<T[]> {
        return await this.model.find();
    };
    async findOne(id: string): Promise<T> {
        return await this.model.findOne({ id: id })
    };

    async update(id: any, item: T) {
        const updatedOne = await this.model.updateOne({ _id: id },);
        return updatedOne
    };
    delete(id: any) {
        return null
    };
}