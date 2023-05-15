export default function ChoiceFontColor() {
    return (
        <>
            <div className="choice-font-color-container">
                <div className="choice-font-color-title">글자색 선택</div>
                <div className="choice-font-color-list">
                    <div className="col-2">
                        <div className="row theme-flex-center">
                            <div className="col-2 row theme-flex-center">
                                <input type="radio" name="choice-font-theme" id="black-font" className="choice-font-color-radio" />
                            </div>
                            <div className="row-reverse col-10">
                                <label className="choice-font-color-content" name="choice-font-theme" htmlFor="black-font" style={{backgroundColor:'#222'}}>
                                    <div className="row theme-flex-center" style={{width:'100%', height:'100%', color:'white'}}>
                                        가 Aa
                                    </div>
                                    
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="col-2 ml-2">
                        <div className="row theme-flex-center">
                            <div className="col-2 row theme-flex-center">
                                <input type="radio" name="choice-font-theme" id="white-font" className="choice-font-color-radio" />
                            </div>
                            <div className="row-reverse col-10">
                                <label className="choice-font-color-content" name="choice-font-theme" htmlFor="white-font" style={{backgroundColor:'#e5e5e5'}}>
                                <div className="row theme-flex-center" style={{width:'100%', height:'100%'}}>
                                        가 Aa
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}