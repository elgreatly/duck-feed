import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class DuckFeed extends Document {
  @Prop()
  food: string;
}

export const DuckFeedSchema = SchemaFactory.createForClass(DuckFeed);
