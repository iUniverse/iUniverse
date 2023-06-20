import { Inject, Injectable } from "@nestjs/common";
import { BasetypeRepository } from "../basetype.repository";
import { FindBasetypeOutboundPort, CheckInit, ReturnCheckInit, Basetype } from "../outbound-port/find-basetype.outbound-port";

@Injectable()
export class FindBasetypeRepository implements FindBasetypeOutboundPort{
    constructor(
        private readonly findBasetypeRepo : BasetypeRepository
    ){}
    
    async loadProjectBasetype(param: number): Promise<Basetype[]> {
        try{
            return await this.findBasetypeRepo.loadProjectBasetype(param);
        }
        catch(e){
            console.log(e);
            throw e;
        }
    }
    async checkInit(data : CheckInit) : Promise<ReturnCheckInit>{
        try{
            console.log(data);
            if(data !== undefined){
                return await this.findBasetypeRepo.findCheckInit(data);
            }
            
        }
        catch(e){
            console.log(e);
            throw e;
        }   
        
    }
}