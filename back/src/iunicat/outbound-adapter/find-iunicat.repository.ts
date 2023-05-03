import { Injectable } from "@nestjs/common";
import { IuniCatRepository } from "../iuinicat.repository";
import { FindIuniCatOPInputDto, FindIuniCatOPOutputDto, FindIuniCatOutboundPort } from "../outbound-port/find-iunicat.outbound-port";

@Injectable()
export class FindIuniCatRepository implements FindIuniCatOutboundPort{
    constructor(
        private readonly findIuniCatRepo : IuniCatRepository
    ){}

    async find(param:FindIuniCatOPInputDto) : Promise<FindIuniCatOPOutputDto>{
        return await this.findIuniCatRepo.FindIuniCat(param);
    }
}