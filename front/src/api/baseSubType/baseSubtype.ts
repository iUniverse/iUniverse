const url = 'http://localhost:3500/iuni_base_subtype';
//기본 baseSubType값 생성
//추후 baseSubType 쪽으로 옮길 예정
export async function initCreateBaseSubtype(basetype : any){
    try{
        const response = await fetch(url + `/init`, {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                'basetypeName' : basetype.name,
                'basetypeId' : basetype.id
            })
        })
        console.log(response);
        return response.json();
    }
    catch(e)
    {
        console.log(e);
        throw(e);
    }
}