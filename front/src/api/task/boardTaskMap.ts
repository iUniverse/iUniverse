const url = 'http://localhost:3500/iuni_board_task_map'
export async function addBoardTaskMap(boardId: number, taskId: number) {
    try {
        const data = {
            'boardId': boardId,
            'taskId': taskId
        };

        const response = await fetch(url + '/', {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }
    catch (e) {
        throw e;
    }
}

/* updateBoard 변경 */
export async function updateBoardTaskMap(boardId: number, taskId: number, updateBoardId: number) {
    try {
        const data = {
            'boardId': boardId,
            'taskId': taskId,
            'updateBoardId': updateBoardId
        };

        const response = await fetch(url + '/', {
            method: 'PATCH',
            cache: 'no-cache',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }
    catch (e) {
        throw e;
    }
}
/* 프로젝트 별 보드 아이디 리스트로 테스크 불러오기*/
export async function loadTaskByBoardId(boardId: number) {
    try {
        const response = await fetch(url + `/byboardid/${boardId}`, {
            method: 'GET',
            cache: 'no-cache',
        });
        
        return response.json();
    }
    catch (e) {
        throw e;
    }
}
