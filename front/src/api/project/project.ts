
/** 프로젝트 생성 */
const url = 'http://localhost:3500/iuni_project';

export async function createProject(name:string){
    const response = await fetch(url,{
        method : 'POST',
        cache : 'no-cache',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            name : name
        })
    })

    return response.json();
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
    const response = await fetch(url, {
        method : 'GET',
        cache : 'no-cache',
    })
    return response.json();
}

/** 프로젝트 업데이트 */
export async function updateProject(obj : {id: string, key : string, value : string}){
    const response = await fetch(url, {
        method : 'put',
        cache : 'no-cache',
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body : new URLSearchParams({
            id : obj.id,
            key : obj.key,
            value : obj.value
        })
    })
}

/** 프로젝트 삭제 */
export function removeProject(id : number){

}

