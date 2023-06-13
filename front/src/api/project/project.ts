
/** 프로젝트 생성 */
const url = 'http://localhost:3500/iuni_project';

export async function createProject(name:string){
    try{
        const response = await fetch(url,{
            method : 'POST',
            cache : 'no-cache',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                name : name,
                description : '무제',
                creatorId : 0
            })
        })
        return response.json();
    }
    catch(e){
        throw(e);
    }    
}

/** 프로젝트 특정 프로젝트 불러오기 */
export async function getProject(id : number){
    const response = await fetch(url+`/${id}`, {
        method : 'GET',
        cache : 'no-cache',
    })
    return response.json();
}

/** 프로젝트 불러오기 */
export async function loadProject(){
    try{
        const response = await fetch(url, {
            method : 'GET',
            cache : 'no-cache',
        })
        return response.json();
    }
    catch(e){
        throw(e)
    }
}

/** 프로젝트 업데이트 */
export async function updateProject(obj : {id: number, key : string, value : string}){
    try{
        const response = await fetch(url, {
            method : 'PATCH',
            cache : 'no-cache',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(obj)
        })
        return response.json();
    }
    catch(e){
        throw(e);
    }    
}

/** 프로젝트 삭제 */
export function removeProject(id : number){

}

