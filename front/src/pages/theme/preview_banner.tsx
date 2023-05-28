import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import useInterval from 'use-interval'
import moment from 'moment';
import 'moment/locale/ko';

import { getMyInitTheme, getTheme, loadMyThemeInfo } from 'api/theme/card-theme';
import BannerIuniCat from '../project/banner_iuni_cat';


type Day = {
    [key: number]: string
}

export interface ThemeInfo {
    id: number;
    name: string;
}

export default function PreviewBanner(props: Props) {
    const [today, setToday] = useState('');
    const [currentDay, setCurrentDay] = useState('');
    const [time, setTime] = useState('');
    const [timeDeco, setTimeDeco] = useState('');
    const [isShow, setIsShow] = useState('no-show');
    const [timePeriod, setTimePeriod] = useState<string>('');


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
        setCurrentThemeId(() => id);
    }


    useInterval(() => {
        getTime();
    }, 1000);


    useEffect(() => {
        getToday();

    }, []);

    return (
        <>
            <div className="preview-banner-widget">
                <div className="preview-widget-card">
                    <div className="preview-widget-header row theme-flex-center">
                        <div className="preview-iuni-cat col-2">
                            엄
                        </div>
                        <div className="preview-widget-title col-6">
                            <div className="preview-widget-title-first-skeleton"></div>

                            <div className="preview-widget-title-second-skeleton"></div>
                        </div>
                        <div className="preview-widget-btn-list col-4 row" style={{justifyContent:'right'}}>
                            <img src={"/img/theme/theme-color-pick-black.webp"} style={{width:'25px', height : '25px'}}></img>
                        </div>
                    </div>

                    <div className="preview-widget-body row">
                        <div className="preview-widget-date row">
                            <div>2030.3.3.</div>
                            <div>월요일</div>
                        </div>

                        <div className="preview-widget-time row">
                            <div>AM</div>
                            <div>04:24:31</div>
                        </div>
                    </div>

                    <div className="preview-widget-footer row theme-flex-center">
                        <div className="row w-100 theme-flex-center" style={{marginLeft:'19px', marginRight:'19px'}}>
                            <div className="preview-widget-profile col-2 row theme-flex-center">
                                <div style={{ width: '37px', height: '37px', borderRadius: '20px', opacity: '0.1', backgroundColor: '#575757' }}>

                                </div>
                            </div>
                            <div className="preview-widget-alarm col-8">
                                <div className="preview-widget-alarm-title">
                                    알림 3개
                                </div>
                                <div className="preview-widget-alarm-content" style={{ width: '100%', height: '17px', borderRadius: '2px', backgroundColor: '#e5e5e5', marginTop: '3px' }}>

                                </div>
                            </div>
                            <div className="col-2">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}