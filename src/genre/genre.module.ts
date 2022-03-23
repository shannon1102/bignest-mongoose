import { TransactionService } from 'src/book/transactionService';
import { GenreRepository } from './genre.repository';
import { Module } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Genre, GenreSchema } from './genre.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Genre.name, schema: GenreSchema }])
  ],
  controllers: [GenreController],
  providers: [GenreService,GenreRepository,TransactionService],
  exports: [GenreRepository]
})
export class GenreModule {}
