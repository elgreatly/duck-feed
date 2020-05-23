import { Controller, Get, Post, Body } from '@nestjs/common';
import { AddDuckFeedRequestDto } from './dto/request/add-duck-feed-request.dto';
import { DuckFeedService } from './services/duck-feed.service';
import { TranslateService } from './../../infrastructure/services/translate.service';
import { ErrorMessagesEnum } from './../../infrastructure/enums/error-messages.enum';
import { AddDuckFeedResponseDto } from './dto/response/add-duck-feed-response.dto';

@Controller('')
export class DuckFeedController {

    constructor(
        private duckFeedService: DuckFeedService,
        private translateService: TranslateService,
        ) {}

    @Post('v1/duck-feed')
    async createFeedRecord(@Body() duckFeedData: AddDuckFeedRequestDto): Promise<AddDuckFeedResponseDto> {
        await this.duckFeedService.addDuckFeed(duckFeedData);
        return {
            status: 200,
            message: this.translateService.translate(ErrorMessagesEnum.successCreate),
        };
    }
}
