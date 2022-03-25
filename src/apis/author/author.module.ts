import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TransactionService } from "src/common/globals/transactionService";
import { AuthorController } from "./author.controller";
import { Author, AuthorSchema } from "./author.model";
import { AuthorRepository } from "./author.repository";
import { AuthorService } from "./author.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }])
  ],
  controllers: [AuthorController],
  providers: [AuthorService,AuthorRepository,TransactionService],
  exports: [AuthorRepository]
})
export class AuthorModule {}
