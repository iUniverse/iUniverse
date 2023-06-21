export class BasetypeInit{
    name : string;
    description : string;
    projectId : number;
}


export class CreateBaseTypeDto{
    readonly id : number;
    readonly name : string;
    readonly description : string;
    readonly createDate : Date;
    readonly projectId: number;
}

