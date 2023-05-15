export default function ChoiceTheme() {
    const basic_bg = `./img/theme/background/theme-basic.webp`;
    const tropical_bg = `./img/theme/background/theme-tropical.webp`;
    return (
        <>
            <div className="choice-theme-container">
                <div className="choice-theme-title">테마 선택</div>
                <div className="choice-theme-content-list">
                    <div className="col-3">
                        <div className="row theme-flex-center">
                            <div className="col-2 row theme-flex-center">
                                <input type="radio" name="choice-theme" id="basic" className="choice-theme-radio" />
                            </div>
                            <div className="row-reverse col-10">
                                <label className="choice-theme-content" htmlFor="basic">
                                    <div className="choice-theme-content-name" style={{ color: '#fff', width: '100%', height: '100%', backgroundImage: `url(${basic_bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} >
                                        기본 테마
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="row theme-flex-center">
                            <div className="col-2 row theme-flex-center">
                                <input type="radio" name="choice-theme" id="mono" className="choice-theme-radio" />
                            </div>
                            <div className="row-reverse col-10">
                                <label className="choice-theme-content" style={{ background: '#222', color: '#fff' }} htmlFor="mono">
                                    <div className="choice-theme-content-name" style={{ width: '100%', height: '100%' }}>
                                        모노 테마
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="row theme-flex-center">
                            <div className="col-2 row theme-flex-center">
                                <input type="radio" name="choice-theme" id="cozy" className="choice-theme-radio" />
                            </div>
                            <div className="row-reverse col-10">
                                <label className="choice-theme-content" style={{ background: '#ffebbc' }} htmlFor="cozy">
                                    <div className="choice-theme-content-name" style={{ width: '100%', height: '100%', color:'#222' }}>
                                        코지 테마
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="row theme-flex-center">
                            <div className="col-2 row theme-flex-center">
                                <input type="radio" name="choice-theme" id="tropical" className="choice-theme-radio" />
                            </div>
                            <div className="row-reverse col-10">
                                <label className="choice-theme-content" htmlFor="tropical" style={{background:'#e5e5e5'}}>
                                    <div className="choice-theme-content-name" style={{ color: '#222', width: '100%', height: '100%', backgroundImage: `url(${tropical_bg})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} >
                                        트로피컬 테마
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