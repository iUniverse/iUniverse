import IUniFooter from "./footer";
import IUniHeader from "./header";
import IUniLeftSide from "./leftSide";
import IUniRightSide from "./rightSide";

export default function IUniLayout({children} : any){
    return(
        <>
             <div className="iuni_container">
                <IUniLeftSide />
                <IUniHeader />
                <IUniRightSide />
                <div className="iuni_content item">Content</div>
                <IUniFooter />
            </div>
        </>
    )
}