import IUniFooter from "./footer";
import IUniHeader from "./header";
import IUniLeftSide from "./leftSide";
import IUniRightSide from "./rightSide";
import IUniContent from "./content";
export default function IUniLayout({children} : any){
    
    return(
        <>
             <div className="iuni_container">
                <div className="iuni_main">
                    <IUniLeftSide />
                    {/* <IUniHeader /> */}
                    <IUniContent page={children} />
                </div>
                <IUniFooter />
            </div>
        </>
    )
}