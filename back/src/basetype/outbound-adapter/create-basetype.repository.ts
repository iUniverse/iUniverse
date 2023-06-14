import { Basetype } from "../basetype.entity";
import { BasetypeRepository } from "../basetype.repository";
import { BasetypeInit } from "../dto/create-basetype.dto";
import { CreateBasetypeOutboundPort } from "../outbound-port/create-basetype.outbound-port";

export class CreateBasetypeRepository implements CreateBasetypeOutboundPort{
    constructor(
        private readonly createBasetypeRepo : BasetypeRepository
    ){}
    
    async createInit(data : BasetypeInit) : Promise<Basetype>{
        const result = await this.createBasetypeRepo.Create(data);
        return result;
    }
}