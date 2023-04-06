export default function Calendar(props:any){ //프로젝트 정보 가져올 예정



    return (
        <>
            <div>
                나는 캘린더얌 ㅎㅎ
            </div>

            <style jsx>{`
                div {
                    width: 100%;
                    height: 100%;
                    background-color: tomato;
                }
            `}</style>
        </>
    )
}

type todayInfo = {
    year: number,
    month: number,
    today: number
}

class GetCalendarInfo {

    //년도가 바뀔때마다 윤년 계산해야하니까 set year(){} 만들자. 이 안에는 isChangeYear을 true로 바꾸는 부분 추가해야함!!!!!

    private today: todayInfo;
    private calendar : {
         startDay: number; //달의 시작 요일
         weekCount: number; //달을 표시할 줄의 개수
         lastDate: number; // 달의 마지막 날짜
    }
    private lastDateList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    private isChangeYear = false;

    constructor (date?: Date){   
        this.today = this.getTodayInfo(date);

        this.setLastDateList();
        this.calendar = this.getCalendarInfo();
    }
    
    setLastDateList(){
        const year = this.today.year;
        
        //윤년 확인
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ) this.lastDateList[1] = 29;
        else this.lastDateList[1] = 28;

        this.isChangeYear = false;
    }

    getTodayInfo(date?: Date){
        let newDate;
        if (date === undefined) newDate = new Date(); 
        else newDate = date;

        let today = {
            year: newDate.getFullYear(),
            month: newDate.getMonth(),
            today: newDate.getDate()
        }

        return today;
    }

    getCalendarInfo(){
        let calendarInfo = {
            startDay: new Date(this.today.year, this.today.month, 1).getDay(), //1일이 출력되는 위치.
            lastDate: this.lastDateList[this.today.month],
            weekCount: Math.ceil((this.calendar.startDay + this.calendar.lastDate)/7)
        };

        return calendarInfo;
    }

    get calendarInfo(){
        return {
            today: this.today,
            calendar: this.calendar
        };
    }

    set resetDate(newDate:Date){
        this.today = this.getTodayInfo(newDate); 
        this.setLastDateList();
        this.calendar = this.getCalendarInfo();
    }

}