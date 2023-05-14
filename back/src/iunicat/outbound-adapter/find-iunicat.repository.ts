import { Injectable } from "@nestjs/common";
import { IuniCatRepository } from "../iuinicat.repository";
import { CheckInitCatOPInputDto, FindIuniCatOPInputDto, FindIuniCatOPOutputDto, FindIuniCatOutboundPort } from "../outbound-port/find-iunicat.outbound-port";

@Injectable()
export class FindIuniCatRepository implements FindIuniCatOutboundPort{
    constructor(
        private readonly findIuniCatRepo : IuniCatRepository
    ){}

    async findMyCat(param:FindIuniCatOPInputDto) : Promise<FindIuniCatOPOutputDto>{
        return await this.findIuniCatRepo.FindIuniCat(param);
    }

    async checkInit(param: CheckInitCatOPInputDto): Promise<boolean> {
        return await this.findIuniCatRepo.CheckIuniCat(param);
    }    
}