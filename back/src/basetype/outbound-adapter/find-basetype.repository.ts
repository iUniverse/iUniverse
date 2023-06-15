import { BasetypeRepository } from "../basetype.repository";
import { CheckInit } from "../dto/find-basetype.dto";
import { FindBasetypeOutboundPort } from "../outbound-port/find-basetype.outbound-port";

export class FindBasetypeRepository implements FindBasetypeOutboundPort{
    constructor(
        private readonly findBasetypeRepo : BasetypeRepository
    ){}

    async checkInit(data : CheckInit) : Promise<boolean>{
        return await this.findBasetypeRepo.CheckInit(data);
    }
}