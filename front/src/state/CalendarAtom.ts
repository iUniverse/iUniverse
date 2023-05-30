import { atom, selector } from "recoil";


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

export const calendarRangeState = atom({
    key: 'calendarRangeState',
    default: new Date()
})

//표시할 캘린더의 정보임. 달의 시작 요일, 달을 표시할 줄의 개수, 달의 마지막 날짜
export const calendarInfoState = selector({
    key: 'calendarInfo',
    get: ({get})=>{
        const range = get(calendarRangeState);

        const startDay = new Date(range.getFullYear(), range.getMonth(), 1).getDay();
        const lastDate = GetLastDateList(range)[range.getMonth()];
        const weekCount = Math.ceil((startDay + lastDate)/7);
        
        return {
            startDay: startDay,
            lastDate: lastDate,
            weekCount: weekCount
        }
    }
})
