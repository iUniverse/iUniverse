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

export async function getSkeleton(index : number, type: string) : Promise<object>{
    interface  skeleton_color{
        [type:string] : string;
    }
    const skeleton_color : skeleton_color = {
        'white' : '#fff',
        'black' : '#222',
    }
    interface skeleton_size {
        [index : number] : object;
    }

    const skeleton_size : skeleton_size = {
        0 : {
            'badge' : '60px',
            'first-skeleton-width' : '286px',
            'second-skeleton-width' : '159px' 
        },
        1 : {
            'badge' : '60px',
            'first-skeleton-width' : '293px',
            'second-skeleton-width' : '230px'
        },
        2 : {
            'first-skeleton-width' : '277px',
            'second-skeleton-width' : '93px'
        },
        3 : {
            'first-skeleton-width' : '294px',
            'second-skeleton-width' : '93px'
        },
        4 : {
            'badge' : '60px',
            'first-skeleton-width' : '297px',
            'second-skeleton-width' : '128px'
        },
        5 : {
            'badge' : '60px',
            'first-sekeleton' : 'test',
            'first-skeleton-width' : '297px',
            'second-skeleton-width' : '129px'
        },
        6 : {
            'badge' : '60px',
            'first-skeleton-width' : '297px',
            'second-skeleton-width' : '129px'
        },
        7 : {
            'first-skeleton-width' : '297px',
            'second-skeleton-width' : '265px'
        },
        8 : {
            'first-skeleton-width' : '297px',
            'second-skeleton-width' : '40px'
        },
        9 : {
            'first-skeleton-width' : '297px',
            'second-skeleton-width' : '128px'
        },
        10 : {
            'first-skeleton-width' : '297px',
            'second-skeleton-width' : '265px'
        },
        11 : {
            'first-skeleton-width' : '297px',
            'second-skeleton-width' : '40px'
        }
    }
    return { 'size' : skeleton_size[index], 'color' : skeleton_color[type]};
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