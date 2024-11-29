import { Module } from '@nestjs/common';
import { FcaseController } from './fcase.controller';
import { FcaseService } from './fcase.service';

@Module({
  controllers: [FcaseController],
  providers: [FcaseService]
})
export class FcaseModule {}
