import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { type_orm_module } from './model/type_orm_module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/jwt_constrain';

@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot(type_orm_module),
    JwtModule.register({
      global:true,
      secret:jwtConstants.secret,
      signOptions:{expiresIn:'1y'}
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
