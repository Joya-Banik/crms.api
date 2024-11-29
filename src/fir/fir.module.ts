import { Module } from '@nestjs/common';
import { FirController } from './fir.controller';
import { FirService } from './fir.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fir } from 'src/model/fir';
import { User } from 'src/model/user';
import { Fcase } from 'src/model/fcase';

@Module({
  imports:[TypeOrmModule.forFeature([Fir, User, Fcase])],
  controllers: [FirController],
  providers: [FirService]
})
export class FirModule {}
