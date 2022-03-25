import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Author extends Document {
  @Prop({ unique: true })
  name: string;
}
export const AuthorSchema = SchemaFactory.createForClass(Author);