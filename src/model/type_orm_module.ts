import { DataSourceOptions } from "typeorm";
import { User } from "./user";
import { Fir } from "./fir";
import { Accused } from "./accused";
import { Petitioner } from "./petitioner";
import { Fcase } from "./fcase";
import { Investigation } from "./investigation";

export const type_orm_module : DataSourceOptions = {
    type : 'mysql',
    host : 'localhost',
    username : 'root',
    database : 'crms',
    password : 'W7301@jqir#',
    port:3306,
    entities : [
        User,
        Fir,
        Accused,
        Petitioner,
        Fcase,
        Investigation
    ],
    synchronize : true,
    migrations : []
}