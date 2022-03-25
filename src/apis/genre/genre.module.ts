import { GenreRepository } from './genre.repository';
import { Module } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Genre, GenreSchema } from './genre.model';
import { TransactionService } from 'src/common/globals/transactionService';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Genre.name, schema: GenreSchema }])
  ],
  controllers: [GenreController],
  providers: [GenreService,GenreRepository,TransactionService,TransactionService],
  exports: [GenreRepository]
})
export class GenreModule {}
