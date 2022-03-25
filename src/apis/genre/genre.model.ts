import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
@Schema()
export class Genre extends Document {
  @Prop({ unique: true })
  name: string;
  

}
export const GenreSchema = SchemaFactory.createForClass(Genre);