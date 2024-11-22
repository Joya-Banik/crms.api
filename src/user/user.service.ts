import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginResult, User, UserLogin } from 'src/model/user';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(User) private userRepository : Repository<User>, 
        private jwtService : JwtService) {}
    
    async login_user(user : UserLogin) : Promise<LoginResult>{
        let result : LoginResult = {
            successed : false,
            message : "",
            token : ""
        };
        
        if (await this.userRepository.exists({where : {username : Equal(user.username)}})
            && await this.userRepository.exists({where : {password : Equal(user.password)}})) {
            result.successed = true;
            const payload = 
            result.token = await this.jwtService.signAsync({});
        }
        else{
            result.message = "Username of password incorrect";
        }

        return result;
    }
}
