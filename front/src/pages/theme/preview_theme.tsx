import PreviewBanner from "./preview_banner";
import PreviewFavorite from "./preview_favorite";

interface Props {
    themeColors: string[];
}
export default function PreviewTheme(props: Props) {
    console.log(props);
    return (
        <>
            <div className="preview-theme-container">
                <div className="choice-theme-title">미리보기</div>
                <div className="preview-theme-content">
                    <PreviewBanner />
                    <div className="favorite-btn-list">
                        <div>즐겨찾기</div>
                    </div>
                    <div className="preview-favorite-project-list">
                    {
                        props.themeColors.map((val, index) => (
                            <div className="preview-favorite-project-card" key={`${val}_${index}`} style={{background:`${val}`}}>

                            </div>
                        ))
                    }
                    </div>
                </div>
            </div >
        </>
    )
}