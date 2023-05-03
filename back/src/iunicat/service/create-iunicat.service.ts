import { Injectable } from "@nestjs/common";
import { CreateIuniCatOPInputDto, CreateIuniCatOPOutputDto, CreateIuniCatOutboundPort } from "../outbound-port/create-iunicat.outbound-port";
import { IuniCatRepository } from "../iuinicat.repository";

@Injectable()
export class CreateIuniCatRepository implements CreateIuniCatOutboundPort{
    constructor(
        private readonly createIunicatRepo : IuniCatRepository
    ){}

    async create(param : CreateIuniCatOPInputDto) : Promise<CreateIuniCatOPOutputDto>{
        return await this.createIunicatRepo.CreateIuniCat(param);
    }
}