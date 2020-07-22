
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'visitantes' })
export class Guest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 50 })
    nombre: string;

    @Column("varchar", { length: 30 })
    correo: string;

    @Column("varchar", { length: 30 })
    departamento: string;

    @Column("varchar", { length: 50 })
    ciudad: string;
}