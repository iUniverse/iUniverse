import IUniFooter from "./footer";
import IUniHeader from "./header";
import IUniLeftSide from "./leftSide";
import IUniRightSide from "./rightSide";
import IUniContent from "./content";
export default function IUniLayout({children} : any){
    return(
        <>
             <div className="iuni_container">
                <IUniLeftSide />
                {/* <IUniHeader /> */}
                <IUniContent page={children} />
                <IUniFooter />
            </div>
        </>
    )
}