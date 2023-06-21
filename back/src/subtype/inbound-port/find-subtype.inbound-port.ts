
export class Subtype{
    id : number;
    name : string;
    description : string;
    color : string;
    fontColor : string;
    createDate : Date;
    basetypeId : number;
    orderNum : number;
}

export const FIND_SUBTYPE_INBOUND_PORT = 'FIND_SUBTYPE_INBOUND_PORT' as const;

export interface FindSubtypeInboundPort{
    loadSubtype(param : number) : Promise<Subtype[]>;
}