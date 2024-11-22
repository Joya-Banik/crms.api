import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Fir } from "./fir";
import { Investigation } from "./investigation";

@Entity()
export class Fcase{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    case_details : string;
    @Column()
    case_status : string;
    @ManyToOne(() => Fir)
    fir : number
    @ManyToOne(() => Investigation)
    investigation : number;
}