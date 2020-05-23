import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DuckFeed } from './schemas/duck-feed.schema';
import { AddDuckFeedRequestDto } from '../dto/request/add-duck-feed-request.dto';

@Injectable()
export class DuckFeedRepository {
  constructor(@InjectModel('duckFeedInfo') private readonly duckFeedModel: Model<DuckFeed>) {}

  async create(duckFeedData: AddDuckFeedRequestDto): Promise<DuckFeed> {
    const duckFeedInfo = {
        fedTime: duckFeedData.fed_time,
        food: duckFeedData.food,
        place: duckFeedData.place,
        numberOfDucks: duckFeedData.number_of_ducks,
        foodType: duckFeedData.food_type,
        foodWeight: duckFeedData.food_weight,
    };
    const createdDuckFeedInfo = new this.duckFeedModel(duckFeedInfo);
    return await createdDuckFeedInfo.save();
  }
}
