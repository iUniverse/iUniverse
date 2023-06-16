import styles from "../../styles/Calendar.module.css";
import Days from "./Days";
import Weeks from "./Weeks";

export default function Calendar(){

    return (
        <div className={styles.calendar_container}>
            <div className={styles.days}>
                <Days></Days>
            </div>
            <div className={styles.calendar__box}>
                    <Weeks />
            </div>
        </div>
    )
}