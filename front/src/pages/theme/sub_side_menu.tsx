import React, { useEffect, useRef, useState } from 'react';

export default function SubSideMenu() {
    const profile = useRef<HTMLDivElement>(null);
    const theme = useRef<HTMLDivElement>(null);
    const character = useRef<HTMLDivElement>(null);
    const active_class_name = 'side-menu-list-active';
    const unactive_class_name = 'side-menu-list-unactive';


    const handleLoadSetting = (type: string) => {
        toggleClassName(type);
        switch (type) {
            case 'profile':
                loadProfileSetting();
                break;
            case 'theme':
                loadThemeSetting();
                break;
            case 'character':
                loadCharacterSetting();
                break;
            default:
                loadThemeSetting();
                break;
        }
    }

    const toggleClassName = (type : string) => {
        if(profile.current) profile.current.className = type === 'profile' ? active_class_name : unactive_class_name;
        if(theme.current) theme.current.className = type === 'theme' ? active_class_name : unactive_class_name;
        if(character.current) character.current.className = type === 'character' ? active_class_name : unactive_class_name;
    }

    /* 내 정보 변경 */
    const loadProfileSetting = () => {
       
    }

    /* 테마 설정 */
    const loadThemeSetting = () => {
        
    }

    /* 캐릭터 설정 */
    const loadCharacterSetting = () => {
        
    }

    useEffect(() => {
        handleLoadSetting('theme');
    }, []);
    return (
        <>
            <div>
                <div className="sub-side-menu-title">설정</div>
                <div className="sub-side-menu-list">
                    <div className={unactive_class_name} onClick={() => handleLoadSetting('profile')} ref={profile}>내 정보 변경</div>
                    <div className={unactive_class_name} onClick={() => handleLoadSetting('theme')} ref={theme}>테마 설정</div>
                    <div className={unactive_class_name} onClick={() => handleLoadSetting('character')} ref={character}>캐릭터 설정</div>
                </div>
            </div>
        </>
    )
}