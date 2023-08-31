import { CustomRepository } from "src/typeorm-ex.decorator";
import { Repository } from "typeorm";
import { Basetype } from "./basetype.entity";
import { BasetypeInit } from "./dto/create-basetype.dto";
import { CheckInit, ReturnCheckInit } from "./dto/find-basetype.dto";


@CustomRepository(Basetype)
export class BasetypeRepository extends Repository<Basetype>{

    async CreateBaseType(data: BasetypeInit): Promise<Basetype> {
        try {
            const result = await this.save(data);
            return result;
        }
        catch (e) {
            throw (e);
        }

    }

    async loadProjectBasetype(param: number): Promise<Basetype[]> {
        try {
            const result = await this.find({
                where: {
                    projectId: param
                }
            });
            return result === null ? [] : result;
        }
        catch (e) {
            throw e;
        }
    }

    async findBasetypeName(projectId : number, name : string) : Promise<Basetype>{
        try{
            const result = await this.findOne({
                where : {
                    projectId : projectId,
                    name : name
                }
            });
            return result;
        }
        catch(e){
            throw e;
        }
    }

    async findCheckInit(data: any): Promise<ReturnCheckInit> {
        try {
            const result = await this.findOne({
                where: {
                    projectId: data.projectId,
                    name: data.name
                }
            });

            if (result === null)
                return { 'name': data.name, 'result': false }
            else
                return { 'name': data.name, 'result': true }
        }
        catch (e) {
            throw e;
        }
    }
}