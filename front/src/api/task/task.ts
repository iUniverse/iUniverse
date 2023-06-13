const url = 'http://localhost:3500/iuni_task';

export async function create(projectId:number, name : string){
    const response = await fetch(url, {
        method : 'POST',
        cache : 'no-cache',
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body : new URLSearchParams({
            'projectId' : projectId.toString(),
            'name' : name
        })
    })

    return response.json();
}

/* projectId로 task 목록 불러오기 */
export async function loadByProjectId(id: number){
    
    const response = await fetch(url+`/${id}`, {
        method : 'GET',
        cache : 'no-cache'
    })
    
    return response.json();
}