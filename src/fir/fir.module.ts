import { Module } from '@nestjs/common';
import { FirController } from './fir.controller';
import { FirService } from './fir.service';

@Module({
  controllers: [FirController],
  providers: [FirService]
})
export class FirModule {}
