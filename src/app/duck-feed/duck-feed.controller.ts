import { Controller, Get, Post, Body, HttpStatus } from '@nestjs/common';
import { AddDuckFeedRequestDto } from './dto/request/add-duck-feed-request.dto';
import { DuckFeedService } from './services/duck-feed.service';
import { TranslateService } from './../../infrastructure/services/translate.service';
import { ErrorMessagesEnum } from './../../infrastructure/enums/error-messages.enum';
import { AddDuckFeedResponseDto } from './dto/response/add-duck-feed-response.dto';
import { DuckFeedMoel } from './models/duck-feed.model';

@Controller('')
export class DuckFeedController {

    constructor(
        private duckFeedService: DuckFeedService,
        private translateService: TranslateService,
        ) {}

    @Post('v1/duck-feed')
    async createFeedRecord(@Body() duckFeedData: AddDuckFeedRequestDto): Promise<AddDuckFeedResponseDto> {
        const duckFeedModel = new DuckFeedMoel({
            fedTime: duckFeedData.fed_time,
            food: duckFeedData.food,
            place: duckFeedData.place,
            numberOfDucks: duckFeedData.number_of_ducks,
            foodType: duckFeedData.food_type,
            foodWeight: duckFeedData.food_weight,
            isScheduled: duckFeedData.schedule,
        });
        await this.duckFeedService.addDuckFeed(duckFeedModel);
        const message = (duckFeedData.schedule) ? ErrorMessagesEnum.successCreatedAndScheduled : ErrorMessagesEnum.successCreated;
        return {
            status: HttpStatus.CREATED,
            message: this.translateService.translate(message),
        };
    }
}
