export class ReturnCheckInit {
    readonly name : string;
    readonly result : boolean
}

export class Basetype {
    id : number;
    name : string;
    description : string;
    createDate : Date;
}

export const FIND_BASETYPE_INBOUND_PORT = 'FIND_BASETYPE_INBOUND_PORT' as const;

export interface FindBasetypeInboundPort{

    checkInit(data : number) : Promise<Array<ReturnCheckInit>>;

    findBasetypeByName(projectId : number, name : string) : Promise<Basetype>
    
    loadProjectBasetype(data : number) : Promise<Array<Basetype>>;
}



