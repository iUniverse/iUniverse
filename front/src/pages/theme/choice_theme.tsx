export default function ChoiceTheme() {
    const basic_bg = `./img/theme/background/theme-basic.webp`;
    const tropical_bg = `./img/theme/background/theme-tropical.webp`;
    return (
        <>
            <div className="choice-theme-container">
                <div className="choice-theme-title">테마 선택</div>
                <div className="choice-theme-content-list">
                    <div className="row-reverse col-12 theme-flex-center" style={{ color: '#fff', width: '100%', height: '128px', backgroundImage: `url(${basic_bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '14px' }}>
                        <label htmlFor="basic">
                            <div className="choice-theme-content-name">
                                기본 테마
                            </div>
                        </label>
                        <input type="radio" name="choice-theme" id="basic" className="choice-theme-radio" />
                    </div>

                    <div className="row-reverse col-12 theme-flex-center" style={{ width: '100%', height: '128px', background: '#222', color: '#fff', borderRadius: '14px' }}>
                        <label htmlFor="mono">
                            <div className="choice-theme-content-name">
                                모노 테마
                            </div>
                        </label>
                        <input type="radio" name="choice-theme" id="mono" className="choice-theme-radio" />
                    </div>

                    <div className="row-reverse col-12 theme-flex-center" style={{ width: '100%', height: '128px', color: '#222', background: '#ffebbc', borderRadius: '14px' }}>
                        <label htmlFor="cozy">
                            <div className="choice-theme-content-name">
                                코지 테마
                            </div>
                        </label>
                        <input type="radio" name="choice-theme" id="cozy" className="choice-theme-radio" />
                    </div>

                    <div className="row-reverse col-12 theme-flex-center" style={{ color: '#222', width: '100%', height: '128px', backgroundImage: `url(${tropical_bg})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', background: '#e5e5e5', borderRadius: '14px' }}>
                        <label htmlFor="tropical">
                            <div className="choice-theme-content-name"  >
                                트로피컬 테마
                            </div>
                        </label>
                        <input type="radio" name="choice-theme" id="tropical" className="choice-theme-radio" />
                    </div>
                </div>
            </div>
        </>
    )
}