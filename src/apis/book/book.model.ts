import { Author } from './../author/author.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { Genre } from '../genre/genre.model';

@Schema()
export class Book extends Document {
  @Prop({ unique: true })
  name: string;
  @Prop()
  urlImage: string;
  @Prop()
  description: string;
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Author'})
  author:  Author
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Genre'})
  genre:  Genre
}
export const BookSchema = SchemaFactory.createForClass(Book);