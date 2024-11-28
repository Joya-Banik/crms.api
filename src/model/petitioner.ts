import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Petitioner {
    @PrimaryColumn()
    nid : number;
    @Column()
    name : string;
    @Column()
    contact : string;
}