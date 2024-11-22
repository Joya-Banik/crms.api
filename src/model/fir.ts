import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Petitioner } from "./petitioner";

@Entity()
export class Fir{
    @PrimaryGeneratedColumn()
    id : number;
    @Column('date')
    date_lodged : Date;
    @Column('date')
    inscident_data : Date;
    @Column('time')
    inscident_time : Date;
    @ManyToOne((() => Petitioner))
    petitioner : number;
}