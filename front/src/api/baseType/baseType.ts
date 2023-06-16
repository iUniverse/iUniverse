const url = 'http://localhost:3500/iuni_basetype';

/* 기본 baseType값 생성 */
export async function initCreateBaseType(){
    try{
        const response = await fetch(url+'/init', {
            method : 'POST',
            cache : 'no-cache',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
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
    const result = await initCheck(id);
    console.log(result);    
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