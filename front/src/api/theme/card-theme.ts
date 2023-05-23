const url = 'http://localhost:3500/iuni_theme';


export function loadSkeleton() : object{
    const skeleton_size = {
        0 : {
            'badge' : '60px',
            'firstWidth' : '286px',
            'secondWidth' : '159px' 
        },
        1 : {
            'badge' : '60px',
            'firstWidth' : '293px',
            'secondWidth' : '230px'
        },
        2 : {
            'firstWidth' : '277px',
            'secondWidth' : '93px'
        },
        3 : {
            'firstWidth' : '294px',
            'secondWidth' : '93px'
        },
        4 : {
            'badge' : '60px',
            'firstWidth' : '297px',
            'secondWidth' : '128px'
        },
        5 : {
            'badge' : '60px',
            'first-sekeleton' : 'test',
            'firstWidth' : '297px',
            'secondWidth' : '129px'
        },
        6 : {
            'badge' : '60px',
            'firstWidth' : '297px',
            'secondWidth' : '129px'
        },
        7 : {
            'firstWidth' : '297px',
            'secondWidth' : '265px'
        },
        8 : {
            'firstWidth' : '297px',
            'secondWidth' : '40px'
        },
        9 : {
            'firstWidth' : '297px',
            'secondWidth' : '128px'
        },
        10 : {
            'firstWidth' : '297px',
            'secondWidth' : '265px'
        },
        11 : {
            'firstWidth' : '297px',
            'secondWidth' : '40px'
        }
    }

    return skeleton_size;
}

export interface SelectTheme {
    id: number;
    name: string;
}

export interface themeInfo {
    'bannerBC' : string,
    'favoriteBColors' : string[],
    'fontColor' : string,
    'id' : number,
    'name' : string,
    'userId' : number
}

/* 나의 테마 전체 불러오기 */
export async function loadMyTheme() {
    const response = await fetch(url + '/', {
        method: 'GET',
        cache: 'no-cache'
    })
    return response.json();
}

export async function loadMyThemeInfo(requireList : string[] | undefined){
    const my_theme_list = await loadMyTheme();
    if(requireList === undefined){
        return my_theme_list.themeList;
    } else {
        const result : object[] = []
        for(const my_theme of my_theme_list.themeList){
            const temp : any = {};
            for(const val of requireList){
                temp[val] = my_theme[val];
            }
            result.push(temp);
        }
        return result;
    }
}
export async function getTheme(id : number) : Promise<themeInfo | string>{
    const response = await fetch(url + `/themes/${id}`, {
        method: 'GET',
        headers : {
            Accept : 'application/json'
        },
        cache: 'no-cache'
    });    
    const value = await response.text();
    return value === '' ? value : JSON.parse(value);
}

/* 나의 기본 설정된 테마 불러오기 */
export async function getMyInitTheme() {
    try{
        const response = await fetch(url + `/mytheme`, {
            method: 'GET',
            cache: 'no-cache'
        });

        return response.json();
        
    }
    catch(e){
        console.log(e);
        return null;
    }
    
}

export async function createInitTheme(themeName : string) : Promise<boolean> {
    try{
        const response = await fetch(url + `/init`, {
            method : 'POST',
            cache : 'no-cache',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                name :  themeName,
            })
        })
        return true;
    }
    catch(e){
        console.log(`Error Create Init Theme : ${e}`);
        return false;
    }  
    
}


/* 기본테마 있는지 체크 */
export async function checkInitTheme(themeName : string) : Promise<any> {
    try{
        const response = await fetch(url + `/init/${themeName}`, {
            method: 'GET',
            cache: 'no-cache'
        });
        return response.json();
    }catch(e){
        throw(e);
    }
}

/* 테마 업데이트 */
export async function updateTheme() {

}

/* 테마 삭제 */
export async function removeTheme() {

}