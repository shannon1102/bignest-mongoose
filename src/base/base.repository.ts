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
    async findAll(): Promise<T[]> {
        return await this.model.find();
    };
    async findOne(id: string): Promise<T> {
        return await this.model.findOne({ id: id })
    };
    async create(item: T): Promise<T> {
        try {
            console.log(item)
            return await new this.model(item).save();
        } catch (error) {
            throw new Error('Error');

        }

    };
    async update(id: any, item: T) {
        // const t = {...item}
        const updatedOne = await this.model.updateOne({ _id: id },);
        console.log(updatedOne)
        return updatedOne
    };
    delete(id: any) {
        return null
    };
}