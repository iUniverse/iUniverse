import { Injectable } from "@nestjs/common";
import { CreateSubtype, CreateSubtypeOutboundPort, ReturnSubtype, SubtypeInit } from "../outbound-port/create-subtype.outbound-port";
import { Subtype } from "../subtype.entity";
import { SubtypeRepository } from "../subtype.repository";


@Injectable()
export class CreateSubtypeRepository implements CreateSubtypeOutboundPort{
    constructor(
        private readonly createSubtypeRepo : SubtypeRepository
    ){}

    async create(data : CreateSubtype) : Promise<ReturnSubtype>{
        return await this.createSubtypeRepo.CreateSubtype(data)
    }

    async createInit(data : SubtypeInit) : Promise<ReturnSubtype>{
        return await this.createSubtypeRepo.CreateSubtypeInit(data);
    } 
}