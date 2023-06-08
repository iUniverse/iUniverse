import { useRecoilState, RecoilEnv } from "recoil";
import { calendarRangeState } from "src/state/CalendarState";
import styles from "../../styles/Calendar.module.css";
import Calendar from "./Calendar";

//Duplicate atom key 에러 문구 없애줌
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export default function CalendarView(props:any){ //프로젝트 정보 가져올 예정

    const [calendarRange, setCalendarRange] = useRecoilState(calendarRangeState);

    const movePrevMonth = ()=>{
        setCalendarRange((range)=>{ return new Date(range.getFullYear(), range.getMonth()-1)});
    }

    const moveNextMonth = ()=>{
        setCalendarRange((range)=>{return new Date(range.getFullYear(), range.getMonth()+1)});
    }

    return (
        <>
           <div className={styles.contents}>
                <div className={styles.setting__bar}>
                    <button onClick={movePrevMonth}>&lt;</button>
                    <span>{`${calendarRange.getMonth()+1}월`}</span>
                    <button onClick={moveNextMonth}>&gt;</button>
                </div>
                <Calendar></Calendar>
           </div>
        </>
    )
}