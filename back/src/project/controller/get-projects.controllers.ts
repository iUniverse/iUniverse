import { Controller, Get, Inject } from '@nestjs/common';

@Controller()
export class GetProjectsController {
    constructor(){}

    @Get('/projects')
    async find(){
        return;
    }
}