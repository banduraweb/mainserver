import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type ProductEntityDocument = ProductEntity & Document;
@Schema()
export class ProductEntity {
  @Prop()
  id: number;
  @Prop()
  title: string;
  @Prop()
  image: string;
  @Prop()
  likes: number;
}

export const ProductEntitySchema = SchemaFactory.createForClass(ProductEntity);
