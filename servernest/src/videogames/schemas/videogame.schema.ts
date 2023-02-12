
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 

export type VideogameDocument = Videogame & Document; 

@Schema() 
export class Videogame {
  @Prop() 
  title: string;

  @Prop()
  price: string;

  @Prop()
  description: string;

  @Prop()
  image_url: string;

  @Prop()
  cateogryId: number;

}

export const VideogameSchema = SchemaFactory.createForClass(Videogame);