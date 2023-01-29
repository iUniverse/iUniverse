import { TypeOrmModuleOptions  } from "@nestjs/typeorm";

export const typeORMConfig : TypeOrmModuleOptions = {
    type : 'postgres',
    host : 'localhost',
    port : 5432,
    username : 'postgres',
    password : 'emth0229',
    database : 'iuniverse',
    entities : [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize : true, 
    /**
     * synchronize 주의 사항
     * 해당 기능은 어플리케이션을 다시 실행할 때, entity 안에서 수정된 칼럼의 길이, 타입 변경값등을 
     * 해당 테이블을 drop한 후 다시 생성해준다. 
     * 테스트용은 true로 하되 실제 서비스를 실행할 경우 false로 한다.
     */
}