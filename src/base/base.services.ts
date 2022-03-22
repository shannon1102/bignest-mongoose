import { BaseSchema, Base } from './base.interface';
import { IBaseRepository } from './i.base.repository';
import { IBaseService } from './i.base.service';

export class BaseService<T extends Base>  implements IBaseService<T>{
    constructor(private readonly baseRepository: IBaseRepository<T>){}
    findById(id: any): Promise<T> {
        throw new Error('Method not implemented.');
    }
    update(id: any,entity: T): Promise<T> {
        throw new Error('Method not implemented.');
    }
    findAll(): Promise<T[]> {
        return this.baseRepository.findAll()
    }
    findOne(id: string): Promise<T> {
        return this.baseRepository.findOne(id)
    }

    create(entity: T): Promise<T> {
        return this.baseRepository.create(entity)
    }
    delete(id: any): Promise<T> {
        return this.baseRepository.delete(id)
    }
    
}