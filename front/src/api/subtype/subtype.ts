const url = 'http://localhost:3500/iuni_subtype';
//기본 baseSubType값 생성
//추후 baseSubType 쪽으로 옮길 예정
export async function initCreateBaseSubtype(basetype : any){
    try{
        const data = {
            'basetypeName' : basetype.name,
            'basetypeId' : basetype.id
        }

        const response = await fetch(url + `/init`, {
            method : 'POST',
            cache : 'no-cache',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        return response.json();
    }
    catch(e)
    {
        console.log(e);
        throw(e);
    }
}

interface CreateSubtype {
    basetypeId : number;
    name : string;
    description : string;
    orderNum : number;
    color : string;
    fontColor : string;
    defaultVal : boolean;
}

export async function removeSubtype(id : number){
    try{        
        const response = await fetch(url+`/${id}`, {
            method : 'DELETE',
            cache : 'no-cache',
        });

        return response;
    }
    catch(e){

    }
}

export async function createSubtype(data : CreateSubtype){
    try{
        const response = await fetch(url, {
            method : 'POST',
            cache : 'no-cache',
            headers : {

                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        return response.json();
    }
    catch(e){
        console.log(e);
        throw(e);
    }
}

export async function loadProjectSubtype(basetypeId : number) {
    try{
        console.log(basetypeId);
        const response = await fetch(url+`/${basetypeId}`, {
            method : 'GET',
            cache : 'no-cache'
        });
        return response.json();
    }
    catch(e) {
        throw e;
    }
}