import { atom, atomFamily, selector } from "recoil";

//today는 변하는 값이 아님. atom 사용할 필요 X
type todayInfo = {
    year: number,
    month: number,
    date: number
}

type calendar = {
    startDay: number; //달의 시작 요일
    weekCount: number; //달을 표시할 줄의 개수
    lastDate: number; // 달의 마지막 날짜
}

function GetLastDateList(date: Date): number[]{
    const year = date.getFullYear();
    let lastDateList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
    //윤년 확인
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ) lastDateList[1] = 29;
    else lastDateList[1] = 28;

    return lastDateList;
}

export const calendarRangeState = atom<Date>({
    key: 'calendarRangeState',
    default: new Date()
})

//표시할 캘린더의 정보임. 달의 시작 요일, 달을 표시할 줄의 개수, 달의 마지막 날짜
export const firstDateState = selector<Date>({
    key: 'firstDateState',
    get: ({get})=>{
        const range = get(calendarRangeState);

        const startDay = new Date(range.getFullYear(), range.getMonth(), 1).getDay();
        let firstDate = new Date(range.getFullYear(), range.getMonth(), 1-startDay);
 
        return firstDate;
    }
})



//일단 순서 신경안쓰고 태스크들 다 표시한 후 (=마운트 후) 태스크 리스트를 재배치 해볼까??
//useEffect써서! 며칠부터 며칠 사이의 태스크 리스트를 재배치 한다는 함수를 만들어야 할듯.