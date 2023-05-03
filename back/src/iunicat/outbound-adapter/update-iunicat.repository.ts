import { Injectable } from "@nestjs/common";
import { IuniCatRepository } from "../iuinicat.repository";
import { FindIuniCatOPInputDto, FindIuniCatOPOutputDto, FindIuniCatOutboundPort } from "../outbound-port/find-iunicat.outbound-port";
import { UpdateIuniCatOPInputDto, UpdateIuniCatOPOutputDto, UpdateIuniCatOutboundPort } from "../outbound-port/update-iunicat.outbound-port";

@Injectable()
export class UpdateIuniCatRepository implements UpdateIuniCatOutboundPort{
    constructor(
        private readonly updateIuniCatRepo : IuniCatRepository
    ){}

    async update(param:UpdateIuniCatOPInputDto) : Promise<UpdateIuniCatOPOutputDto>{
        return await this.updateIuniCatRepo.UpdateIuniCat(param);
    }
}