import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { GeneralResponse } from '../config/general.response';
import { DataGuestDto } from './dto/data-guest-dto'
import { Guest } from './guest.entity'


@Injectable()
export class GuestsService {

    constructor(
        @InjectRepository( Guest )
        private guestsRepository: Repository < Guest >,
    ){}

    public generalResponse = {
        list: [],
        row: null,
        error: false,
        message: '',
        statusCode: 200
    }


    private _setError ( err: string ): any {
        console.log( err );
        this.generalResponse.message = err;
        this.generalResponse.error = true;
        this.generalResponse.statusCode = 400;
        return this.generalResponse;
    }


    async create( guest: DataGuestDto ): Promise < GeneralResponse > {
        try {
            const newGuest = new Guest();
            for( const key of Object.keys(guest) ) {
                if( newGuest[key] !== guest[key] ) newGuest[key] = guest[key];
            }

            this.generalResponse.row = await this.guestsRepository.save ( newGuest );
            this.generalResponse.list = [];
            return this.generalResponse;

        } catch ( err ) {
            console.log("\nError Creando el registro");
            return this._setError( err );
        }
    }

    
    async findAll(): Promise < GeneralResponse > {
        try {
            this.generalResponse.list = await this.guestsRepository.find();
            this.generalResponse.row = null;
            return this.generalResponse;

        } catch ( err ) {
            console.log("\nError Obteniendo los registros");
            return this._setError( err );
        }
    }

}
