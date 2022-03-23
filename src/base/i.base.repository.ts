import mongoose from "mongoose";
import { Base } from "./base.interface";

export interface IBaseRepository<T extends Base> {

    findAll(): Promise<T[]>;

    findOne(id: any): Promise<T>;

    create(item: T,session : mongoose.ClientSession): Promise<T>;

    update(id: string, item: T);

    delete(id: string);
}