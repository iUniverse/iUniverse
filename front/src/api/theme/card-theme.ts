const url = 'http://localhost:3500/iuni_theme';


export function loadSkeleton() : object{
    const skeleton_size = {
        0 : {
            'firstWidth' : '90%',
            'secondWidth' : '55%' 
        },
        1 : {
            'firstWidth' : '92%',
            'secondWidth' : '80%'
        },
        2 : {
            'firstWidth' : '87%',
            'secondWidth' : '17%'
        },
        3 : {
            'firstWidth' : '90%',
            'secondWidth' : '15%'
        },
        4 : {
            'firstWidth' : '92%',
            'secondWidth' : '50%'
        },
        5 : {
            'first-sekeleton' : 'test',
            'firstWidth' : '94%',
            'secondWidth' : '45%'
        },
        6 : {
            'firstWidth' : '93%',
            'secondWidth' : '55%'
        },
        7 : {
            'firstWidth' : '93%',
            'secondWidth' : '93%'
        },
        8 : {
            'firstWidth' : '93%',
            'secondWidth' : '12%'
        },
        9 : {
            'firstWidth' : '95%',
            'secondWidth' : '55%'
        },
        10 : {
            'firstWidth' : '97%',
            'secondWidth' : '92%'
        },
        11 : {
            'firstWidth' : '90%',
            'secondWidth' : '21%'
        }
    }

    return skeleton_size;
}

export interface SelectTheme {
    id: number;
    name: string;
}

export interface themeInfo {
    "colors" : [];
    "fontColor" : string;
    "id" : number;
    "name" : string;
    "otherName" : string;
    "userId" : number;
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
export async function updateTheme(updateCardTheme : {id :number, key : string, value : any}) : Promise<any>{
    try{
        const response = await fetch(url, {
            method : 'PATCH',
            cache : 'no-cache',
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body : new URLSearchParams({
                id : JSON.stringify(updateCardTheme.id),
                key : JSON.stringify(updateCardTheme.key),
                value : JSON.stringify(updateCardTheme.value)
            })
        });
        return response.json();
    }
    catch(e){
        throw(e);
    }
}

/* 테마 삭제 */
export async function removeTheme() {

}
