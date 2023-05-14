import { CustomRepository } from "src/typeorm-ex.decorator";
import { IuniCat } from "./iunicat.entity";
import { Repository } from "typeorm";
import { CreateInitDto, CreateIuniCatDto } from "./dto/create-iunicat.dto";
import { UpdateIuniCatOPInputDto, UpdateIuniCatOPOutputDto } from "./outbound-port/update-iunicat.outbound-port";
import { CheckInitDto } from "./dto/find-iunicat.dto";
import { CreateIuniCatOPOutputDto } from "./outbound-port/create-iunicat.outbound-port";

@CustomRepository(IuniCat)
export class IuniCatRepository extends Repository<IuniCat>{
    async CreateIuniCat(param : CreateIuniCatDto):Promise<CreateIuniCatOPOutputDto>{
        return await this.save(param);
    }

    async CreateInit(param : CreateInitDto) : Promise<CreateIuniCatOPOutputDto>{
        return await this.save(param); 
    }
    
    async UpdateIuniCat(param : any) : Promise<UpdateIuniCatOPOutputDto>{
        const obj : object = {};
        obj[param.key] = JSON.parse(param.value);
        const result = await this.createQueryBuilder()
                                .update(IuniCat)
                                .set(obj)
                                .where("id = :id", { id : param.id})
                                .execute();
        
        return {'result': result.affected === 1 ? true : false}
    }
    
    async FindIuniCat(param : CheckInitDto) : Promise<IuniCat>{
        return await this.findOne({ where : { userId : param.userId }})
    }

    async CheckIuniCat(param : CheckInitDto) : Promise<boolean>{
        const response = await this.findOne({where : { userId : param.userId}})
        return response === null ? false : true;
    }

    async LoadIuniCat() : Promise<Array<IuniCat>>{
        return await this.find();
    }

}