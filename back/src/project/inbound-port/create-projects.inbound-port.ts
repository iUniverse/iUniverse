import { IsNotEmpty, IsString } from "class-validator";

// export type CreateProjectsInboundPortInputDto = {
//     name : string;
//     descriptionsssss : string;
// };

export class CreateProjectsInboundPortInputDto {
    @IsNotEmpty()
    @IsString()
    readonly name : string;
    @IsNotEmpty()
    readonly description : string;
}

export class InputDto {
    @IsNotEmpty()
    readonly name : string;
    @IsNotEmpty()
    readonly description : string;
}

export class OutputDto {
    @IsNotEmpty()
    name : string;
    @IsNotEmpty()
    id : number;
    @IsNotEmpty()
    createDate : Date,
}

export type CreateProjectsInboundPortOutputDto = {s
    name : string
    id : number,
    createDate : Date,
};

export const CREATE_PROJECTS_INBOUND_PORT = 'CREATE_PROJECTS_INBOUND_PORT' as const;

export interface CreateProjectsInboundPort{
    create(
        params : CreateProjectsInboundPortInputDto,
    ) : Promise<CreateProjectsInboundPortOutputDto>;
} 
