import { createDeflate } from "zlib";
import styles from "../../styles/Calendar.module.css";
import Calendar from "./Calendar";

export default function CalendarView(props:any){ //프로젝트 정보 가져올 예정

    let calendar = new CalendarInfo();

    return (
        <>
           <div className={styles.contents}>
                <div className={styles.setting__bar}>달력위에 필터, 날짜 등 설정하는 부분</div>
                <Calendar></Calendar>
           </div>
        </>
    )
}

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

class CalendarInfo {

    private today: todayInfo;
    private calendar : calendar;
    private lastDateList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    constructor (date?: Date){   
        this.today = this.getTodayInfo(date);

        this.setLastDateList();
        this.calendar = this.getCalendarInfo();
    }
    
    getTodayInfo(date?: Date){
        let newDate;
        if (date === undefined) newDate = new Date(); 
        else newDate = date;

        let today = {
            year: newDate.getFullYear(),
            month: newDate.getMonth(),
            date: newDate.getDate()
        }

        return today;
    }

    setLastDateList(){
        const year = this.today.year;
        
        //윤년 확인
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ) this.lastDateList[1] = 29;
        else this.lastDateList[1] = 28;

    }

    getCalendarInfo(){
        let calendarInfo = {
            startDay: new Date(this.today.year, this.today.month, 1).getDay(), //1일이 출력되는 위치.
            lastDate: this.lastDateList[this.today.month],
            weekCount: 0
        };

        calendarInfo.weekCount = Math.ceil((calendarInfo.startDay + calendarInfo.lastDate)/7)

        return calendarInfo;
    }

    get calendarInfo(){
        return {
            today: {
                year: this.today.year,
                month: this.today.month+1,
                today: this.today.date
            },
            calendar: this.calendar
        };
    }

    set resetDate(newDate:Date){
        this.today = this.getTodayInfo(newDate); 
        this.setLastDateList();
        this.calendar = this.getCalendarInfo();
    }
}

const taskInfo = [
    {
        name: '태스크1111',
        startDate: new Date('2023-04-12'),
        deuDate: new Date('2023-04-22'),
        createDeflate: new Date('2023-04-11')
    },
    {
        name: '태스크22222',
        startDate: new Date('2023-04-17'),
        deuDate: new Date('2023-04-20'),
        createDeflate: new Date('2023-04-16')
    },
    {
        name: '태스크3333',
        createDeflate: new Date('2023-04-25')
    },
]