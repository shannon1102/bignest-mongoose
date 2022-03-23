import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Base } from 'src/base/base.interface';


@Schema()
export class Genre extends Base {
  @Prop({ unique: true })
  name: string;
  

}
export const GenreSchema = SchemaFactory.createForClass(Genre);