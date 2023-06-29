const url = 'http://localhost:3500/iuni_board';

interface CreateBoard {
    name : string;
    orderNum : number;
    projectId : number;
    color : string;
    fontColor : string;
}

/* 새로운 보드 생성 */
export async function createNewBoard(data : CreateBoard){
    try{
        const response = await fetch(url +'/', {
            method : 'POST',
            cache : 'no-cache',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        });
        return response.json();
    }
    catch(e){
        throw e;
    }
}   

/* 보드 수정 */
export async function updateBoard(updateTask : {id : number, key : string, value : any}) : Promise<any>{
    try{
        const response = await fetch(url, {
            method : 'PATCH',
            cache : 'no-cache',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(updateTask)
        });

        return response.json();
    }
    catch(e){
        console.log(e);
        throw(e);
    }
}

/* 보드 삭제 */
export async function removeProjectBoard(id : number) {
    try{
        const response = await fetch(url + `/${id}`, {
            method : 'DELETE',
            cache : 'no-cache',
        });
        return response;
    }
    catch(e){
        throw e;
    }
}

/* 보드 기본값 생성 */
export async function initCreateBoard(projectId : number){
    try{
        const data = {
            'type' : 'default',
            'projectId' : projectId
        }

        const response = await fetch(url + '/init', {
            method : 'POST',
            cache : 'no-cache',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        });
        
        console.log(response);
    }
    catch(e){
        return 'error';
    }
}

export async function loadBoardByProjectId(projectId : number){
    try{
        const response = await fetch(url + `/${projectId}`, {
            method : 'GET',
            cache : 'no-cache'
        });

        return response.json();
    }
    catch(e){
        throw e;
    }
}