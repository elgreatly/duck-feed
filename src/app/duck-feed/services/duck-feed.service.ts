import { Injectable } from '@nestjs/common';
import { AddDuckFeedRequestDto } from '../dto/request/add-duck-feed-request.dto';
import { DuckFeedRepository } from '../repository/duck-feed.repository';

@Injectable()
export class DuckFeedService {

    constructor(private duckFeedRepository: DuckFeedRepository) {}

    async addDuckFeed(duckFeedData: AddDuckFeedRequestDto): Promise<void> {
        await this.duckFeedRepository.create(duckFeedData);
    }
}
