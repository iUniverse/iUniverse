const url = 'http://localhost:3500/iuni_task';

export async function create(projectId:number, name : string, statusId : number){
    const data = {
        'projectId' : projectId,
        'name' : name,
        'statusId' : statusId
    };

    const response = await fetch(url, {
        method : 'POST',
        cache : 'no-cache',
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        // body : new URLSearchParams({
        //     'projectId' : projectId.toString(),
        //     'name' : name,
        // }),
        //body : 
        body : JSON.stringify(data)
    })

    return response.json();
}

/* 특정보드에 속해있는 모든 테스크 상태값 변경 */
export async function updateAllTaskByStatus(postStatusId : number, currentStatusId : number){
    try{
        const data = {
            'pastStatusId' : postStatusId,
            'currentStatusId' : currentStatusId
        };

        const response = await fetch(url + '/allstatus', {
            method : 'PATCH',
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

    }
}

/* 테스크 정보 업데이트 */
export async function updateTask(updateTask : {id : number, key : string, value : any}) : Promise<any>{
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

/* projectId로 task 목록 불러오기 */
export async function loadByProjectId(id: number){
    
    const response = await fetch(url+`/${id}`, {
        method : 'GET',
        cache : 'no-cache'
    })
    
    return response.json();
}