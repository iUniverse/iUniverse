import { Dispatch, SetStateAction } from "react";

interface Props {
    setFontColor: Dispatch<SetStateAction<string>>
    setImgPickImg: Dispatch<SetStateAction<string>>
    setFavoriteImg: Dispatch<SetStateAction<string>>
    currentSize: string
}


export default function ChoiceFontColor(props: Props) {
    const handleFontColor = (color: string) => {
        console.log(color);
        if (color === 'white') {
            props.setImgPickImg(() => "/img/theme/theme-img-pick.webp");
            props.setFavoriteImg(() => "/img/theme/theme-favorite.webp");
        } else {
            props.setImgPickImg(() => "/img/theme/theme-img-pick-black.webp");
            props.setFavoriteImg(() => "/img/theme/theme-favorite-black.webp");
        }
        props.setFontColor(color);
    }

    return (
        <>
            <div className="choice-font-color-container">
                <div className="choice-font-color-title">
                    <p className={props.currentSize === 'small' ? 'small-title' : 'default-title'}>글자색 선택</p>
                </div>
                <>
                    <div className="choice-font-color-list">
                        <div className="row-reverse theme-flex-center choice-font-color-content col-12" style={{ backgroundColor: '#222' }}>
                            <label htmlFor="black-font" className="mt-2">
                                <div className="row theme-flex-center" style={{ color: 'white', marginLeft: '2px' }}>
                                    가 Aa
                                </div>
                            </label>
                            <input type="radio" name="choice-font-theme" id="black-font" className="choice-font-color-radio" onClick={() => handleFontColor('white')} />
                        </div>

                        <div className="row-reverse theme-flex-center choice-font-color-content col-12" style={{ backgroundColor: '#e5e5e5' }}>
                            <label htmlFor="white-font" className="mt-2">
                                <div className="row theme-flex-center" style={{ color: 'black', marginLeft: '2px' }}>
                                    가 Aa
                                </div>
                            </label>
                            <input type="radio" name="choice-font-theme" id="white-font" className="choice-font-color-radio" onClick={() => handleFontColor('black')} />
                        </div>
                    </div>
                </>
            </div>
        </>
    )
}