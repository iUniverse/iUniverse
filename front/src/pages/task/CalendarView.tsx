import { useRecoilState, RecoilEnv } from "recoil";
import { calendarRangeState } from "src/state/CalendarState";
import styles from "../../styles/Calendar.module.css";
import Calendar from "./Calendar";

//Duplicate atom key 에러 문구 없애줌
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export default function CalendarView(props:any){ //프로젝트 정보 가져올 예정

    const [calendarRange, setCalendarRange] = useRecoilState(calendarRangeState);

    const movePrevMonth = ()=>{
        setCalendarRange((range)=> new Date(range.getFullYear(), range.getMonth()-1));
    }

    const moveNextMonth = ()=>{
        setCalendarRange((range)=> new Date(range.getFullYear(), range.getMonth()+1));
    }

    return (
        <>
           <div className={styles.contents}>
                <div className={styles.setting__bar}>
                    <div className={styles.move__date}>
                        <button onClick={movePrevMonth}><img src="/img/task/right-arrow.png"/></button>
                        <button onClick={moveNextMonth}><img src="/img/task/right-arrow.png"/></button>
                        <span>{`${calendarRange.getFullYear()}.${calendarRange.getMonth()+1 < 10? 0:''}${calendarRange.getMonth()+1}`}</span>
                    </div>
                    <div>
                        <button className={styles.move__today}><span>오늘</span></button>
                    </div>
                </div>
                    <Calendar />
           </div>
        </>
    )
}