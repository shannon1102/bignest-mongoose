export interface IBaseService<T> {
  
    findOne(id: any): Promise<T>
    
    create(data: T): Promise<T>
  
    update(id: any, data: T): Promise<T>
  
    delete(id: any): any
  }