import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { FirService } from './fir.service';

@Controller('fir')
export class FirController {
    constructor(private firService: FirService) {}
    @Post()
    function (@Body() fir : any) : any {
        return "";
    }
    @Get()
    @Put()
    @Delete()
}
