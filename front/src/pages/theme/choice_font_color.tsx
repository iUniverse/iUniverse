export default function ChoiceFontColor() {
    return (
        <>
            <div className="choice-font-color-container">
                <div className="choice-font-color-title">글자색 선택</div>
                <div className="choice-font-color-list">
                    <div className="row-reverse theme-flex-center choice-font-color-content col-12" style={{ backgroundColor: '#222' }}>                        
                        <label name="choice-font-theme" htmlFor="black-font">
                            <div className="row theme-flex-center" style={{ color: 'white', marginLeft:'2px' }}>
                                가 Aa
                            </div>
                        </label>
                        <input type="radio" name="choice-font-theme" id="black-font" className="choice-font-color-radio" />
                    </div>

                    <div className="row-reverse theme-flex-center choice-font-color-content col-12" style={{ backgroundColor: '#e5e5e5' }}>
                        <label name="choice-font-theme" htmlFor="white-font">
                            <div className="row theme-flex-center" style={{ color: 'black', marginLeft:'2px'}}>
                                가 Aa
                            </div>
                        </label>
                        <input type="radio" name="choice-font-theme" id="white-font" className="choice-font-color-radio" />
                    </div>
                </div>
            </div>
        </>
    )
}