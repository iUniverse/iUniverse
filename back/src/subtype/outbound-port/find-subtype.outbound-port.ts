export type Subtype = {
    id : number;
    name : string;
    description : string;
    color : string;
    fontColor : string;
    createDate : Date;
    basetypeId : number;
    orderNum : number;
    defaultVal : boolean;
}

export const FIND_SUBTYPE_OUTBOUND_PORT = 'FIND_SUBTYPE_OUTBOUND_PORT' as const;

export interface FindSubtypeOutboundPort{
    loadSubtype(param : number) : Promise<Subtype[]>
}
