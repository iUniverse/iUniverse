import { Inject, Injectable } from "@nestjs/common";
import { BasetypeRepository } from "../basetype.repository";
import { FindBasetypeOutboundPort, CheckInit, ReturnCheckInit, Basetype } from "../outbound-port/find-basetype.outbound-port";

@Injectable()
export class FindBasetypeRepository implements FindBasetypeOutboundPort{
    constructor(
        private readonly findBasetypeRepo : BasetypeRepository
    ){}
    async findBasetypeByName(projectId: number, name: string): Promise<Basetype> {
        try{
            return await this.findBasetypeRepo.findBasetypeName(projectId, name);
        }
        catch(e){
            throw e;
        }
    }

    async loadProjectBasetype(param: number): Promise<Basetype[]> {
        try{
            return await this.findBasetypeRepo.loadProjectBasetype(param);
        }
        catch(e){
            throw e;
        }
    }

    async checkInit(data : CheckInit) : Promise<ReturnCheckInit>{
        try{
            if(data !== undefined){
                return await this.findBasetypeRepo.findCheckInit(data);
            }
            
        }
        catch(e){
            throw e;
        }   
        
    }
}