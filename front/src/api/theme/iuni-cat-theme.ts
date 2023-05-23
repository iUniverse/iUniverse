import { IuniCatStyle } from "api/project/iuni-cat";

const url = 'http://localhost:3500/iuni_cat';

interface catExist {
    is_exist : boolean;
}


/* 기본 iuniCat이 있는지 체크 */
export async function checkInitCatStyle() : Promise<any>{
    try{
        const response = await fetch(url + `/init`, {
            method : 'GET',
            cache : 'no-cache'
        });
        
        return response.json();
        
    } 
    catch (e) {
        throw(e);
    }
}


/* 나의 아유니 캣 정보 가져오기 */
export async function findMyIuniCat() : Promise<any> {
    try{
        const response = await fetch(url + `/`, {
            method : 'GET',
            cache : 'no-cache'
        });
        return response.json();
    }
    catch(e){
        throw(e);
    }
}

/* 나의 아유니 캣 스타일 변경 */
export async function updateMyIuniCat() : Promise<any>{
    
}

/* 기본 iuniCat 생성 */
export async function createInitCatStyle() : Promise<any>{
    try{
        const response = await fetch(url + `/init`, {
            method : 'POST',
            cache : 'no-cache',
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
        })
        return response.json();
    }
    catch(e){
        throw(e);
    }
}