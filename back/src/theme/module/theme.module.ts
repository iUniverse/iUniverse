
export function getInitTheme() : boolean {
    return true;
}
/* 기본 테마 데이터가 존재하는지 체크 */
export function checkInitTheme() : boolean{
    return false;
}

/* 업데이트 쿼리 만들기 */
export function makeUpdatQuery(data) : object {
    const update_query : object = {};
    
    update_query[JSON.parse(data.key)] = JSON.parse(data.value);
    return update_query;
}

/* 업데이트 쿼리 만들기 */
export function makeUpdateQuery(data) : object{
    const update_query : object = {};
    update_query[data.key] = data.value;
    return update_query;
}