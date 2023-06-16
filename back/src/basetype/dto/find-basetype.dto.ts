export type CheckInit = {
    readonly projectId : number;
    readonly name : string;
    readonly description : string;
}

export type ReturnCheckInit = {
    readonly name : string;
    readonly result : boolean
}