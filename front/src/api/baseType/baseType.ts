const url = 'http://localhost:3500/iuni_base_type';

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