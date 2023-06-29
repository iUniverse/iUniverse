import { DateInfo } from "./Weeks";
import styles from "../../styles/Calendar.module.css";

export default function DateCell({date}:DateInfo){

    // const [windowSize, setWindowSize] = useState({
    //     width: window.innerWidth,
    //     height: window.innerHeight
    // });

    // const handleResize = ()=>{
    //     setWindowSize({
    //         width: window.innerWidth,
    //         height: window.innerHeight
    //     });
    // }

    // useEffect(()=>{
    //     window.addEventListener('resize', handleResize);

    //     return ()=>{window.removeEventListener('resize', handleResize)};
    // }, []);

    // let left = date.getDay()

    return (
        <div className={`${styles.date__container} ${styles.cell}`}>{date.getDate()}</div>
    )
}