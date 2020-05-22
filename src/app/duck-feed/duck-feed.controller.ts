import { Controller, Get, Post } from '@nestjs/common';

@Controller('/duck-feed')
export class DuckFeedController {

    @Post('/')
    async createFeedRecord() {
            return 'default';
    }
}
