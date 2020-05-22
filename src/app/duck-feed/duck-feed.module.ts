import { Module } from '@nestjs/common';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { DuckFeedService } from './services/duck-feed.service';
import { DuckFeedController } from './duck-feed.controller';

@Module({
    controllers: [DuckFeedController],
    providers: [DuckFeedService],
    imports: [InfrastructureModule],
})
export class DuckFeedModule {

}
