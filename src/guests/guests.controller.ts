import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
  Get,
  HttpService,
} from '@nestjs/common';
import { map } from 'rxjs/operators';

import { GuestsService } from './guests.service';
import { DataGuestDto } from './dto/data-guest-dto';

@Controller('guests')
export class GuestsController {
  constructor(private guestService: GuestsService, private http: HttpService) {}

  @Post()
  async create(@Body() guestDto: DataGuestDto, @Res() res) {
    const resp = await this.guestService.create(guestDto);
    res.status(HttpStatus.OK).json(resp);
  }

  @Get()
  async findAll(@Res() res) {
    const resp = await this.guestService.findAll();
    res.status(HttpStatus.OK).json(resp);
  }

  @Get('/departamentos')
  async getDepartment() {
    const URL = `https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json`;
    const response = await this.http
      .get(URL, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(
        map(resp => {
          return resp.data;
        }),
      )
      .toPromise();

    return response;
  }
}
