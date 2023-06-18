import { initCreateBaseSubtype } from "api/baseSubType/baseSubtype";

const url = 'http://localhost:3500/iuni_basetype';




/* 기본 baseType값 생성 */
async function initCreateBaseType(projectId : number, basetypeName : string){
    try{
        console.log(projectId);
        console.log(basetypeName);
        const data = {
            'projectId' : projectId,
            'name' : basetypeName
        };
        const response = await fetch(url+`/init`, {
            method : 'POST',
            cache : 'no-cache',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        console.log(response);
        return response.json();
    }
    catch(e){
        console.log(e);
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
    try{
        let result = await initCheck(id);
        result = result.filter((e : any) => e.result === false);    
        for(const data of result){
            const basetype = await initCreateBaseType(id, data.name);
            await initCreateBaseSubtype(basetype);
        }

        
        return 'complete';
    }
    catch(e){
        return 'error';
    }
}

/* baseType값 생성 */
// export async function createBaseType(){
//     try{
//         const response = await fetch(url, {
//             method : 'POST',
//             cache : 'no-cache',
//             headers : {
//                 'Accept' : 'application/json',
//                 'Content-Type' : 'application/json'
//             },
//             body : JSON.stringify({
                
//             })
//         })
//     }
//     catch(e){
//         throw(e);
//     }
// }