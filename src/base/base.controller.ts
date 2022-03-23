// import { Delete, Get, HttpStatus, Patch, Res, Post, Body, Param } from '@nestjs/common';
// import { BaseSchema, Base } from './base.interface';
// // import { BaseService } from './base.services';
// export class BaseController<T extends Base> {
//     constructor(private readonly baseService: BaseService<T>) { }
//     @Post()
//     async create(@Body() createBookDto: T) {
//         return await this.baseService.create(createBookDto);
//     }

//     @Get()
//     async findAll() {
//         const entities = await this.baseService.findAll();
//         return this.baseService.findAll();
//     }

//     @Get(':id')
//     async findOne(@Param('id') id: string) {
//         return await this.baseService.findOne(id);
//     }

//     @Patch(':id')
//     async update(@Param('id') id: string, @Body() updateBookDto: T) {
//         return this.baseService.update(id,updateBookDto);
//     }

//     @Delete(':id')
//     async remove(@Param('id') id: string) {
//         return this.baseService.delete(id);
//     }

// }