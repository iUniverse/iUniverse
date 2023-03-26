import React, { useEffect, useState } from "react";

export default function IUniLeftSide(){
    const [firstItem, setFirstItem] = useState('');
    const [secondItem, setSecondItem] = useState('');
    const [thirdItem, setThirdItem] = useState('');
    const [fortItem, setForthItem] = useState('');
    const [fifthItem, setFifthItem] = useState('');
    
    function renderItem(){
        
        const width = window.innerWidth;
        if(width >= 768){
            setFirstItem(() => "/img/layout/leftSide/home.png");
            setSecondItem(() => "/img/layout/leftSide/tasks.png");
            setThirdItem(() => "/img/layout/leftSide/check.png");
            setForthItem(() => "/img/layout/leftSide/smile.png");
        } else {
            setFirstItem(() => "/img/layout/leftSide/check.png");
            setSecondItem(() => "/img/layout/leftSide/tasks.png");
            setThirdItem(() => "/img/project/widget_cog.png");
            setForthItem(() => "/img/layout/leftSide/smile.png");
            setFifthItem(() => "/img/layout/leftSide/smile.png");
        }
        
    }


    useEffect(() => {
        renderItem();
    }, []);
    

    return(
        <>
            <div className="iuni_left_side">
                <div className="row">
                    <div className="col-12">
                        <div className="leftSide">
                            <div className="leftSide-logo">
                                <div className="template-color">
                                </div>
                            </div>
                            <div className="leftSide-item">
                                <img src={firstItem} />  
                                  
                            </div>
                            <div className="leftSide-item">
                                <img src={secondItem} />    
                            </div>
                            <div className="leftSide-item">
                                <img src={thirdItem} />    
                            </div>
                            <div className="leftSide-item">
                                <img src={fortItem} />    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}