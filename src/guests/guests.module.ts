import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Guest } from './guest.entity';
import { GuestsController } from './guests.controller';
import { GuestsService } from './guests.service';

@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forFeature( [ Guest ] )
    ],
    exports: [ 
        TypeOrmModule 
    ],
    controllers: [
        GuestsController
    ],
    providers: [
        GuestsService
    ],
})
export class GuestsModule {}
