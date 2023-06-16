const url = 'http://localhost:3500/iuni_basetype';

/* 기본 baseType값 생성 */
export async function initCreateBaseType(projectId : number, basetypeName : string){
    try{
        const response = await fetch(url+'/init', {
            method : 'POST',
            cache : 'no-cache',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                projectId : projectId,
                name : basetypeName
            })
        })
        return response.json();
    }
    catch(e){
        throw(e);
    }
}

async function initCheck(id : number) : Promise<any>{
    try{
        console.log(id);
        const response = await fetch(url+`/init/${id}`, {
            method : 'GET',
            cache : 'no-cache',
        })
        return response.json();
    } catch(e){
        throw(e);
    }
}

export async function initBaseTypeCheck(id : number){
    let result = await initCheck(id);
    result = result.filter((e : any) => e.result === false);
    console.log(result);
    for(const data of result){
        initCreateBaseType(id, data.name)
    }
    console.log('완료');
    return 'complete';
}
/* baseType값 생성 */
export async function createBaseType(){
    try{
        const response = await fetch(url, {
            method : 'POST',
            cache : 'no-cache',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                
            })
        })
    }
    catch(e){
        throw(e);
    }
}