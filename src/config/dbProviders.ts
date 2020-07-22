
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from "typeorm";

export const defaultOptionsBD: ConnectionOptions = {
    type: 'sqlite',
    database: 'store/guests.db',
    synchronize: true,
    logging: false,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
};

export const connectionBD = TypeOrmModule.forRoot( defaultOptionsBD );
