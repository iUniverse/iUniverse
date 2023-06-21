
export type BaseTypeInit = {
    readonly name : string;
    readonly description : string;
    projectId : number | undefined;
};

const init_basetypes :BaseTypeInit[] = [
    {
        name: '프로젝트 멤버 역할',
        description: '프로젝트 멤버 역할을 지정해요.',
        projectId : undefined,
    },
    {
        name : '프로젝트 상태',
        description : '프로젝트의 현재 상태를 나타내요.',
        projectId : undefined,
    },
    {
        name : '태스크 상태',
        description : '태스크의 현재 상태를 나타내요.',
        projectId : undefined,
    }
];

export function getInitBaseType(projectId : number) : BaseTypeInit[]{
    for(const basetype of init_basetypes){
        basetype['projectId'] = projectId
    }
    return init_basetypes;
}

export async function findInitBaseType(data : any) : Promise<BaseTypeInit> {
    return await init_basetypes.find(el => el.name === data.name);
}