import { Injectable } from "@nestjs/common";
import { CreateInitOPInputDto, CreateIuniCatOPInputDto, CreateIuniCatOPOutputDto, CreateIuniCatOutboundPort } from "../outbound-port/create-iunicat.outbound-port";
import { IuniCatRepository } from "../iuinicat.repository";

@Injectable()
export class CreateIuniCatService implements CreateIuniCatOutboundPort{
    constructor(
        private readonly createIunicatRepo : IuniCatRepository
    ){}
    
    async create(param : CreateIuniCatOPInputDto) : Promise<CreateIuniCatOPOutputDto>{
        return await this.createIunicatRepo.CreateIuniCat(param);
    }

    async createInit(param : CreateInitOPInputDto) : Promise<CreateIuniCatOPOutputDto>{
        return await this.createIunicatRepo.CreateInit(param);
    }
}