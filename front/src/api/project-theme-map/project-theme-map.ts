import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";

/* project-theme-map 생성 */
const url = 'http://localhost:3500/iuni_project_theme'
interface projectThemeMap {
    'projectId' : number,
    'themeId' : number,
    'userId' : number
    'isUse' : boolean 
}
export async function createProjectTheme(data : projectThemeMap){
    try{
        
        const response = await fetch(url, {
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
        throw(e);
    }
}

/* project-theme-map 조회 */
export async function findProjectTheme(id : number){
    try{
        const response = await fetch(url + `/${id}`, {
            method : 'GET',
            cache : 'no-cache'
        })
        return response.json();
    }
    catch(e){
        throw(e);
    }
}

/* project-theme-map 삭제 */
export async function removeProjectTheme(id : number){
    const response = await fetch(url, {
        method : 'DELETE',
        cache : 'no-cache',
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body : new URLSearchParams({
            id : JSON.stringify(id)
        })
    });

    return response.json();
}

