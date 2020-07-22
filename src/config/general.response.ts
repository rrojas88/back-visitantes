
import { Guest } from '../guests/guest.entity'

export class GeneralResponse  {
    list: Guest[];
    row: Guest;
    error: boolean;
    message: string;
    statusCode: number;
}
