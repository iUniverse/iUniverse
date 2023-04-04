import { IsNotEmpty } from "class-validator";
import { FindProjectDto } from "../dto/find-project.dto";

export class FindProjectIPInputDto {
    @IsNotEmpty()
    id : number;
}

export class FindProjectIPOutputDto{
    @IsNotEmpty()
    name : string;
    description : string;
    updateDate : Date;
    color : string;
    startDate : Date;
    endDate : Date;
    dueDate : Date;
    processRate : number;
    typeId : number;
    statusId : number;
    creatorId : number;
    @IsNotEmpty()
    id : number;
    @IsNotEmpty()
    createDate : Date;
    isPrivate : boolean;
}

// export type FindProjectInboundPortOutputDto = FindProjectDto;

export const FIND_PROJECT_INBOUND_PORT = 'FIND_PROJECT_INBOUND_PORT' as const;

export interface FindProjectInboundPort{
    find(
        params : FindProjectIPInputDto,
    ): Promise<FindProjectIPOutputDto>;
}