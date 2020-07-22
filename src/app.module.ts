import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { connectionBD } from 'src/config/dbProviders';
import { GuestsModule } from './guests/guests.module';


@Module({
  imports: [
    connectionBD,
    GuestsModule,
  ],
  controllers: [
    AppController, 
  ],
  providers: [
  ],
})
export class AppModule {}
