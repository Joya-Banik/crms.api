import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginResult, UserLogin } from 'src/model/user';

@Controller('api/user')
export class UserController 
{
    constructor(private userServive : UserService){}

    @Post()
    async login(@Body() user: UserLogin) : Promise<LoginResult> {
        return await this.userServive.login_user(user);
    }
}
