import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Petitioner {
    @PrimaryGeneratedColumn()
    id : number;
    @Column()
    name : string;
    @Column()
    contact : string;
}