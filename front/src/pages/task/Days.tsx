import styles from "../../styles/Calendar.module.css";

export default function Days(){

    const days = [ '일', '월', '화', '수', '목', '금', '토'];

    return (
        <>
            {days.map((day,i)=>(
                    <div key={'days_'+i} className={styles.day__box}>{day}</div>
                ))}
        </>
    )
}