import { useRecoilValue, RecoilEnv } from "recoil";
import { calendarInfoState } from "src/state/CalendarAtom";
import styles from "../../styles/Calendar.module.css";

//Duplicate atom key 에러 문구 없애줌
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export default function Calendar(){

    return (
        <div className={styles.calendar_container}>
            <div className={styles.days}>
                <Days></Days>
            </div>
            <div className={styles.calendar__box}>
                <Weeks></Weeks>
            </div>
        </div>
    )
}


function Days(){

    const days = [ '일', '월', '화', '수', '목', '금', '토'];

    return (
        <>
            {days.map((day,i)=>(
                    <div key={'days_'+i} className={styles.day__box}>{day}</div>
                ))}
        </>
    )
}

function Weeks(){
    const firstDate = useRecoilValue(calendarInfoState);
    // const firstDate = new Date();
    let weeks = [];

    for (let i=0; i<42; i=i+7){
        let date = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate()+i);
        weeks.push(<Week key={'week_'+i} number={i} date={date}></Week>)
    }

    return <>{weeks}</>;
}

interface DateInfo {
    number?: number,
    date: Date
}
  
function Week({number, date}:DateInfo){

    let days = [];
    for (let i=0; i<7; i++){
        let key = 'date_'+number+'_'+i;
        let dateInfo = new Date(date.getFullYear(), date.getMonth(), date.getDate()+i);
        days.push(<Day key={key} date={dateInfo}></Day>);
    }

    return <div className={styles.week__container}>{days}</div>;
}

function Day({date}:DateInfo){
    return (
        <div className={styles.date__container}>{date.getDate()}</div>
    )
}