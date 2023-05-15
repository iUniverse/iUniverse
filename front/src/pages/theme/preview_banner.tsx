import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import useInterval from 'use-interval'
import moment from 'moment';
import 'moment/locale/ko';

import { getMyInitTheme, getTheme, loadMyThemeInfo } from 'api/theme/card-theme';
import BannerIuniCat from '../project/banner_iuni_cat';


interface Props {
    setFavoriteBColors: Dispatch<SetStateAction<string[]>>
    setFavoriteBadgeColors: Dispatch<SetStateAction<string[]>>
    setFavoriteTColor: string
}

type Day = {
    [key: number]: string
}

export interface ThemeInfo {
    id: number;
    name: string;
}

export default function PreviewBanner() {
    const [today, setToday] = useState('');
    const [currentDay, setCurrentDay] = useState('');
    const [time, setTime] = useState('');
    const [timeDeco, setTimeDeco] = useState('');
    const [isShow, setIsShow] = useState('no-show');

    const [bannerBC, setBannerBC] = useState<string>('');
    const [bannerBadgeColor, setBannerBadgeColor] = useState<string[]>([]);
    const [bannerTColor, setBannerTColor] = useState<string>('');
    const [currentThemeId, setCurrentThemeId] = useState<number>(0);
    const [themeInfo, setThemeInfo] = useState<Array<ThemeInfo>>([]);

    const [timePeriod, setTimePeriod] = useState<string>('');

    const [favoriteBColors, setFavoriteBColors] = useState<string[]>([]);
    const [favoriteBadgeColor, setFavoriteBadgeColors] = useState<string[]>([]);
    const [favoriteTColor, setFavoriteTColor] = useState<string>('');

    const day: Day = {
        0: '일요일',
        1: '월요일',
        2: '화요일',
        3: '수요일',
        4: '목요일',
        5: '금요일',
        6: '토요일'
    }

    /* 테마 메뉴 열기 */
    function openThemeMenu() {
        if (isShow === 'no-show') {
            setIsShow(() => 'block-show')
        } else {
            setIsShow(() => 'no-show')
        }
    }

    /* 오늘날짜 구하기 */
    function getToday() {
        const currentDate = new Date();
        const current_year = currentDate.getFullYear();
        const current_month = currentDate.getMonth();
        const current_date = currentDate.getDate();
        const current_day = currentDate.getDay();

        setToday(() => `${current_year}. ${current_month}. ${current_date}`);
        setCurrentDay(() => `. ${day[current_day]}`);
    }

    /* 현재시각 구하기 */
    function getTime() {
        const current_hour = Number(moment().format('HH'));
        setTimeDeco(() => current_hour < 12 ? 'PM' : 'AM');
        setTime(() => moment().format('hh:mm:ss'));

        if (current_hour >= 22 || current_hour < 6) {
            setTimePeriod(() => 'dawn');
        }
        else if (current_hour >= 6 && current_hour < 9) {
            setTimePeriod(() => 'morning');
        }
        else if (current_hour >= 9 && current_hour < 14) {
            setTimePeriod(() => 'afternoon');
        }
        else if (current_hour >= 14 && current_hour < 18) {
            setTimePeriod(() => 'dinner');
        }
        else if (current_hour >= 18 && current_hour < 22) {
            setTimePeriod(() => 'night');
        }
    }

    /* 테마 선택 박스 정보 */
    async function settingThemeSelectBox() {
        const my_theme_list = await loadMyThemeInfo(['name', 'id']);

        for (const my_theme of my_theme_list) {
            setThemeInfo(prev => {
                return [...prev, { 'id': my_theme.id, 'name': my_theme.name }]
            })
        }
    }

    /* 테마 업데이트 */
    async function updateTheme(id: number) {
        //현재는 유저 정보가 없기에 업데이트문은 없음
        const theme = await getTheme(id);
        console.log(theme);
        setFavoriteBColors(() => theme.favoriteBColors);
        setFavoriteBadgeColors(() => theme.favoriteBadgeColor);
        setFavoriteTColor(() => theme.favoriteTColor);
        setBannerBC(() => theme.bannerBC);
        setBannerBadgeColor(() => theme.bannerBadgeColor);
        setBannerTColor(() => theme.bannerTColor);
        setCurrentThemeId(() => id);
    }

    /* 기본 테마 설정 */
    async function settingTheme(id: number) {
        //현재 설정한 나의 테마 정보 가져오기
        const theme = await getMyInitTheme();
        console.log(theme);
        if (theme !== null) {
            setFavoriteBColors(() => theme.favoriteBColors);
            setFavoriteBadgeColors(() => theme.favoriteBadgeColor);
            setFavoriteTColor(() => theme.favoriteTColor);
            setBannerBC(() => theme.bannerBC);
            setBannerBadgeColor(() => theme.bannerBadgeColor);
            setBannerTColor(() => theme.bannerTColor);
            setCurrentThemeId(() => id);
        }
    }
    const router = useRouter();
    /* 테마 관리하기 */
    function managementTheme() {

        router.push('/theme');
    }

    useInterval(() => {
        getTime();
    }, 1000);


    useEffect(() => {
        getToday();
        //getIuniCat();
        settingTheme(0);
        settingThemeSelectBox();

    }, []);

    return (
        <>
            <div className="preview-banner">
                <div className="preview-banner-widget col-4">
                    <div className="preview-widget-card">
                        <div className="preview-widget-header row">
                            <div className="preview-iuni-cat col-2">
                                엄
                            </div>
                            <div className="preview-widget-title col-6 row-column">
                                <div className="preview-widget-title-skeleton">엄</div>
                                <div className="preview-widget-title-skeleton">준</div>
                            </div>
                            <div className="preview-widget-btn-list col-4">

                            </div>
                        </div>

                        <div className="preview-widget-body">
                            <div className="preview-widget-date">

                            </div>
                            <div className="preview-widget-time">

                            </div>
                        </div>

                        <div className="preview-widget-footer">
                            <div className="preview-widget-profile">

                            </div>
                            <div className="preview-widget-alarm">
                                <div className="preview-widget-alarm-title">

                                </div>
                                <div className="preview-widget-alarm-content">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="preview-banner-recent-project col-8">

                </div>
            </div>
        </>
    )
}