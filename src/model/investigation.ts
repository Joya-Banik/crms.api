import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Investigation{
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name : string

    @Column()
    rank: string
}