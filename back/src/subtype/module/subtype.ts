type ReturnSubtypeInit = {
    name: string;
    description; string;
    color: string;
    fontColor: string;
    baseTypeId: number;
    orderNum: number;
}

type SubtypeInit = {
    readonly basetypeId : number;
    readonly basetypeName : string;
}

const init_subtypes = {
    '프로젝트 멤버 역할': [
        {
            'name': '관리자',
            'description': '프로젝트의 관리자',
            'color': '',
            'fontColor': '',
            'baseTypeId': 0,
            'orderNum': 0,
        },
        {
            'name': '매니저',
            'description': '프로젝트의 매니저',
            'color': '',
            'fontColor': '',
            'baseTypeId': 0,
            'orderNum': 1,
        },
        {
            'name': '참여자',
            'description': '프로젝트의 참여자',
            'color': '',
            'fontColor': '',
            'baseTypeId': 0,
            'orderNum': 3,
        }
    ],
    '프로젝트 상태': [
        {
            'name': '대기중',
            'description': '프로젝트 대기 상태',
            'color': '',
            'fontColor': '',
            'baseTypeId': 0,
            'orderNum': 0,
        },
        {
            'name': '진행중',
            'description': '프로젝트 진행 상태',
            'color': '',
            'fontColor': '',
            'baseTypeId': 0,
            'orderNum': 1,
        },
        {
            'name': '완료',
            'description': '프로젝트 완료 상태',
            'color': '',
            'fontColor': '',
            'baseTypeId': 0,
            'orderNum': 2,
        }
    ],
    '태스크 상태': [
        {
            'name': '대기중',
            'description': '태스크 대기 상태',
            'color': '',
            'fontColor': '',
            'baseTypeId': 0,
            'orderNum': 0,
        },
        {
            'name': '진행중',
            'description': '태스크 진행 상태',
            'color': '',
            'fontColor': '',
            'baseTypeId': 0,
            'orderNum': 1,
        },
        {
            'name': '완료',
            'description': '태스크 완료 상태',
            'color': '',
            'fontColor': '',
            'baseTypeId': 0,
            'orderNum': 2,
        }
    ],
} as const;


export async function loadInitSubType(data : SubtypeInit) : Promise<ReturnSubtypeInit[]>{
    const result = init_subtypes[data.basetypeName];
    for(const init_subtype of result){
        init_subtype.baseTypeId = data.basetypeId;
    }
    return result;
}