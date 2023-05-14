import { Injectable } from "@nestjs/common";
import { CreateIuniCatOutboundPort,
    CreateIuniCatOPInputDto,
    CreateIuniCatOPOutputDto, 
    CreateInitOPInputDto} from "../outbound-port/create-iunicat.outbound-port";
import { IuniCatRepository } from "../iuinicat.repository";

@Injectable()
export class CreateIuniCatRepository implements CreateIuniCatOutboundPort{
    constructor(
        private readonly createIuniCatRepo : IuniCatRepository
    ){}

    async create(param : CreateIuniCatOPInputDto) : Promise<CreateIuniCatOPOutputDto> {
        const result = await this.createIuniCatRepo.CreateIuniCat(param);
        return result;
    }

    async createInit(param: CreateInitOPInputDto): Promise<CreateIuniCatOPOutputDto> {
        return await this.createIuniCatRepo.CreateInit(param);
    }
}