import PreviewBanner from "./preview_banner";
import PreviewFavorite from "./preview_favorite";

export default function PreviewTheme() {
    return (
        <>
            <div className="preview-theme-container">
                <div className="choice-theme-title">미리보기</div>
                <div className="preview-theme-content">
                    <PreviewBanner />
                    <PreviewFavorite />
                </div>

            </div>
        </>
    )
}