import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import useInterval from 'use-interval'
import moment from 'moment';
import 'moment/locale/ko';
import themeData from "../../../public/temp-theme.json"
import { getMyInitTheme, getTheme, loadMyThemeInfo } from 'api/theme/card-theme';

import BannerIuniCat from './banner_iuni_cat';


interface Props {
    setFavoriteBColors: Dispatch<SetStateAction<string[]>>
    setfontColor: string
}

type Day = {
    [key: number]: string
}

export interface ThemeInfo {
    id: number;
    name: string;
}
export default function Banner(props: any) {
    const [today, setToday] = useState('');
    const [currentDay, setCurrentDay] = useState('');
    const [time, setTime] = useState('');
    const [timeDeco, setTimeDeco] = useState('');
    const [isShow, setIsShow] = useState('no-show');

    const [bannerBC, setBannerBC] = useState<string>('');
    const [currentThemeId, setCurrentThemeId] = useState<number>(0);
    const [themeInfo, setThemeInfo] = useState<Array<ThemeInfo>>([]);

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
        
        if(current_hour >= 22 || current_hour < 6){
            setTimePeriod(() => 'dawn');
        }
        else if(current_hour >= 6 && current_hour < 9){
            setTimePeriod(() => 'morning');
        } 
        else if(current_hour >= 9 && current_hour < 14){
            setTimePeriod(() => 'afternoon');
        } 
        else if(current_hour >= 14 && current_hour < 18){
            setTimePeriod(() => 'dinner');
        } 
        else if(current_hour >= 18 && current_hour < 22) {
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
        setCurrentThemeId(() => id);
    }

    /* 기본 테마 설정 */
    async function settingTheme(id: number) {
        //현재 설정한 나의 테마 정보 가져오기
        const theme = await getMyInitTheme();
        console.log(theme);
        if (theme !== null) {
            props.setFavoriteBColors(() => theme.favoriteBColors);
            props.setfontColor(() => theme.fontColor);
            setBannerBC(() => theme.bannerBC);
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
            <div className="banner">
                <div className="banner-container">
                    <div className="banner-widget">
                        <div className="widget card">
                            <div className="widget-header row">
                                <div className="widget-user col-8">
                                    <div className="widget-profile">
                                        <div className="profile">
                                            <BannerIuniCat
                                                timePeriod = {timePeriod}
                                            />
                                        </div>
                                    </div>

                                    <div className="widget-user-name ml-1">
                                        <span className="user-name">알새우</span>
                                        <span>님</span>
                                        <br />
                                        <span>안녕하세요</span>
                                    </div>
                                </div>

                                <div className="col widget-icon ">
                                    <div className="widget-cog">
                                        <img src={"/img/project/widget_cog.png"} />
                                    </div>
                                    <div className="widget-brush dropdown" onClick={() => openThemeMenu()}>
                                        <img src={"/img/project/widget_brush.png"} />
                                        <div className={`dropdown-content ${isShow}`}>
                                            {
                                                themeInfo.map((val, index) => (
                                                    <div key={val.id} onClick={() => updateTheme(val.id)}>{val.name}</div>
                                                ))
                                            }
                                            <div onClick={() => managementTheme()}>테마 관리</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="widget-content">
                                <div className="widget-date row">
                                    <div className="widget-date-day">
                                        <span>{today}</span>
                                        <span>{currentDay}</span>
                                    </div>
                                    <div className="widget-date-time row">
                                        <div>{timeDeco}</div>
                                        <div>{time}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-footer row">
                                <div className="widget-profile col-12">
                                    <div className="profile">

                                    </div>
                                    <div className="widget-user-name ml-1">
                                        <span className="widget-user-alaram">알림 4개</span>
                                        <br />
                                        <span>'내 집마련 프로젝트'에 </span>
                                        <span className="widget-alaram-type">정인님의 댓글</span>
                                        <span>이 있어요</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="banner-recent-project">
                        <div className="recent-project-card card p-1" style={{ background: `${bannerBC}` }}>
                            <div className="recent-project-d-day card-header row">
                                <div className="badge">D-13</div>
                            </div>
                            <div className="card-content row">
                                <div className="recent-project-type col-12" style={{ color: `` }}>최근 프로젝트</div>
                                <br />
                                <div className="recent-project-name col-12" style={{ color: `` }}>진행되는 프로젝트가 없어요</div>
                            </div>
                            <div className="recent-project-icon-list card-footer row ">
                                <div className="recent-project-icon">
                                    <img src={"/img/project/project_heart.png"} />
                                </div>
                                <div className="recent-project-icon">
                                    <img src={"/img/project/project_mountain.png"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
