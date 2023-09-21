import React, { useEffect, useState } from "react";

export default function IUniLeftSide() {
    const [firstItem, setFirstItem] = useState('/img/layout/leftSide/home.webp');
    const [secondItem, setSecondItem] = useState('/img/layout/leftSide/project.webp');
    const [thirdItem, setThirdItem] = useState('/img/layout/leftSide/calendar.webp');
    const [fortItem, setForthItem] = useState('/img/layout/leftSide/project_add_btn.webp');
    const [fifthItem, setFifthItem] = useState('');


    return (
        <>
            <div className="iuni_left_side">
                <div className="leftSide">
                    <div className="item logo">
                        <img src="/img/layout/leftSide/logo.webp" alt="" />
                    </div>
                    <div className="item">
                        <img src={firstItem} />
                    </div>
                    <div className="item">
                        <img src={secondItem} />
                    </div>
                    <div className="item">
                        <img src={thirdItem} />
                    </div>
                </div>
                <div className="bottomSide">
                    <div className="item logo">
                        <img src="/img/layout/leftSide/logo.webp" alt="" />
                    </div>
                    <div className="item">
                        <img src={firstItem} />
                    </div>
                    <div className="item">
                        <img src={secondItem} />
                    </div>
                    <div className="item center">
                        <div className="add">
                            <img src={fortItem} style={{ width: "48px", height: "48px" }} />
                        </div>
                    </div>
                    <div className="item">
                        <img src={thirdItem} />
                    </div>
                    <div className="item">
                        <img src={thirdItem} />
                    </div>
                </div>
            </div>
        </>
    )
}