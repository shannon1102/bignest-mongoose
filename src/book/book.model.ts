import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Base } from 'src/base/base.interface';


@Schema()
export class Book extends Base {
  @Prop({ unique: true })
  name: string;
  @Prop()
  description: string;
  @Prop()
  author: string;

  @Prop()
  genre: string;

}
export const BookSchema = SchemaFactory.createForClass(Book);