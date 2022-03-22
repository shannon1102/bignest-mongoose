import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import  { TextEncoder, TextDecoder } from "util";
import { BookModule } from './book/book.module';



@Module({
  imports: [ MongooseModule.forRoot('mongodb+srv://IamVan:L3huyv4n@balo.a46z5.mongodb.net/myFirstDatabase'), BookModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
