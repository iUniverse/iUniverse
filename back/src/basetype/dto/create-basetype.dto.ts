

export class BasetypeInit{
    readonly name : string;
    readonly description : string;
    readonly projectId : number;
}


export class CreateBaseTypeDto{
    readonly id : number;
    readonly name : string;
    readonly description : string;
    readonly createDate : Date;
    readonly projectId: number;
}

