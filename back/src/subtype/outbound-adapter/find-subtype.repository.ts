import { Injectable } from "@nestjs/common";
import { FindSubtypeOutboundPort, Subtype } from "../outbound-port/find-subtype.outbound-port";
import { SubtypeRepository } from "../subtype.repository";

@Injectable()
export class FindSubtypeRepository implements FindSubtypeOutboundPort{
    constructor(
        private readonly findSubtypeRepo : SubtypeRepository
    ){}

    async loadSubtype(param : number) : Promise<Subtype[]>{
        try{
            return await this.findSubtypeRepo.loadSubtype(param);
        }
        catch(e){
            console.log(e);
            throw e;
        }
    }
}