//id
//name
//projectId
//color
//fontColor
//createDate
//taskOrder
const init_board = {
    'default' : [
        {
            'name' : '대기중',
            'color' : '#1120ff',
            'fontColor' : '#ffffff',
            'orderNum' : 0
        },
        {
            'name' : '진행중',
            'color' : '#1120ff',
            'fontColor' : '#ffffff',
            'orderNum' : 1
        },
        {
            'name' : '완료',
            'color' : '#1120ff',
            'fontColor' : '#ffffff',
            'orderNum' : 2
        }
    ]
}

interface InitCreateData {
    type : string;
    projectId : number
}
export async function initCreateBoard(data : InitCreateData){
    const result = init_board[data.type];
    for(const board of result){
        board.projectId = data.projectId
    }
    return result;
}