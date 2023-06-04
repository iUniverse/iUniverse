import { CustomRepository } from "src/typeorm-ex.decorator";
import { Repository, TreeRepositoryUtils } from "typeorm";
import { CreateThemeDto } from "./dto/create-theme.dto";
import { Theme } from './theme.entity';
import { FindThemeDto } from "./dto/find-theme.dto";
import { FindThemeOPInputDto, LoadThemeOPOutputDto } from "./outbound-port/find-theme.outbound-port";
import { CreateThemeOPInputDto } from "./outbound-port/create-theme.outbound-port";
import { UpdateThemeOPInputDto } from "./outbound-port/update-theme.outbound-port";
import { makeUpdatQuery } from "./module/theme.module";

@CustomRepository(Theme)
export class ThemeRepository extends Repository<Theme>{
    /* 테마 생성하기 */
    async CreateTheme(CreateThemeDto: CreateThemeDto): Promise<Theme> {
        try {
            return await this.save(CreateThemeDto);
        }
        catch (e) {
            throw e;
        }
    }

    /* 나의 테마 불러오기 */
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

    /* 나의 테마 찾기 */
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

    /* 테마 찾기 */
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

    /* 테마 업데이트 */
    async UpdateTheme(param : UpdateThemeOPInputDto) : Promise<boolean>{
        // const obj : object = {};
        // obj[param.key] = JSON.parse(param.value);
        // console.log(param);

        const result = await this.createQueryBuilder()
                                .update(Theme)
                                .set(makeUpdatQuery(param))
                                .where("id = :id", { id : param.id })
                                .execute();

        return result.affected === 1 ? true : false;
    }

    /* 기본 테마 있는지 확인 */
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

    /* 기본 테마 생성 하기 */
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