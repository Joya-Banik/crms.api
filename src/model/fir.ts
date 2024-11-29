import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Fir{
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    date_lodged : Date

    @Column()
    inscident_date : Date

    @Column()
    place : string

    @ManyToOne(() => User, (User) => User.id)
    @JoinColumn()
    petitioner : User;
}