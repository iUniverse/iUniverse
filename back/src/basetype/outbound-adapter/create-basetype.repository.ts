import { Injectable } from "@nestjs/common";
import { Basetype } from "../basetype.entity";
import { BasetypeRepository } from "../basetype.repository";
import { BasetypeInit } from "../dto/create-basetype.dto";
import { CreateBasetypeOutboundPort } from "../outbound-port/create-basetype.outbound-port";

@Injectable()
export class CreateBasetypeRepository implements CreateBasetypeOutboundPort{
    constructor(
        private readonly createBasetypeRepo : BasetypeRepository
    ){}
    
    async createInit(data : BasetypeInit) : Promise<Basetype>{
        const result = await this.createBasetypeRepo.CreateBaseType(data);
        return result;
    }
}