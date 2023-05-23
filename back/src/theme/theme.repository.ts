import { CustomRepository } from "src/typeorm-ex.decorator";
import { Repository, TreeRepositoryUtils } from "typeorm";
import { CreateThemeDto } from "./dto/create-theme.dto";
import { Theme } from './theme.entity';
import { FindThemeDto } from "./dto/find-theme.dto";
import { FindThemeOPInputDto, LoadThemeOPOutputDto } from "./outbound-port/find-theme.outbound-port";
import { CreateThemeOPInputDto } from "./outbound-port/create-theme.outbound-port";

@CustomRepository(Theme)
export class ThemeRepository extends Repository<Theme>{
    async CreateTheme(CreateThemeDto: CreateThemeDto): Promise<Theme> {
        try {
            return await this.save(CreateThemeDto);
        }
        catch (e) {
            throw e;
        }
    }

    async LoadMyTheme(param: number): Promise<LoadThemeOPOutputDto> {
        try {
            const result = await this.find({
                where: {
                    userId: param
                }
            });
            return { 'themeList': result }
        }
        catch (e) {
            console.log(e);
            throw e;
        }

    }

    async FindMyTheme(param : FindThemeOPInputDto) : Promise<Theme>{
        try{
            const result = await this.findOne({
                where :{
                    userId : param.userId
                }
            }); 

            console.log(result);
            return result; 
        }
        catch(e){
            throw e;
        }
    }
    async FindTheme(param: FindThemeOPInputDto): Promise<Theme> {
        try {
            const result = await this.findOne({
                where: {
                    id: param.id,
                    userId : param.userId
                }
            });
            
            return result;
        }
        catch (e) {
            throw e;
        }
    }

    async CheckInitTheme(param: FindThemeOPInputDto): Promise<boolean> {
        try {
            const result = await this.findOne({
                where: {
                    userId: param.userId,
                    name: param.name,
                }
            });
            if (result === null)
                return false;
            else
                return true;
        }
        catch (e) {
            throw e
        }

    }

    async CreateInitTheme(param: CreateThemeOPInputDto): Promise<boolean> {
        try {
            await this.create(param);
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
}