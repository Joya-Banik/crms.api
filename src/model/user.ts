import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number;
    @Column()
    username : string;
    @Column()
    password : string;
    @Column()
    role : string;
}

export interface UserLogin{
    username : string;
    password : string;
}

export interface LoginResult{
    successed : boolean;
    message : string;
    token : string;
}