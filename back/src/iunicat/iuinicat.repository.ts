import { CustomRepository } from "src/typeorm-ex.decorator";
import { IuniCat } from "./iunicat.entity";
import { Repository } from "typeorm";
import { CreateIuniCatDto } from "./dto/create-iunicat.dto";
import { UpdateIuniCatOPInputDto, UpdateIuniCatOPOutputDto } from "./outbound-port/update-iunicat.outbound-port";

@CustomRepository(IuniCat)
export class IuniCatRepository extends Repository<IuniCat>{
    async CreateIuniCat(param : CreateIuniCatDto):Promise<IuniCat>{
        return await this.save(param);;
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

    async FindIuniCat(param : any) : Promise<IuniCat>{
        return await this.findOne({ where : { userId : param }})
    }

    async LoadIuniCat() : Promise<Array<IuniCat>>{
        return await this.find();
    }

}