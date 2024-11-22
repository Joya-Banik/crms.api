import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Fir } from "./fir";

@Entity()
export class Accused {
    @PrimaryGeneratedColumn()
    id : number;
    @Column()
    name : string;
    @Column()
    gender : number;
    @Column()
    age : number;
    status : string;
    @ManyToOne(()=>Fir)
    fir_id : number;

}