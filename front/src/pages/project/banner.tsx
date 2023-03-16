import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useInterval from 'use-interval'
import moment from 'moment';
import 'moment/locale/ko';

type Day = {
    [key: number]: string
}

export default function Banner(props: any) {
    const [today, setToday] = useState('');
    const [currentDay, setCurrentDay] = useState('');
    const [time, setTime] = useState('');
    const [timeDeco, setTimeDeco] = useState('');

    const day: Day = {
        0: '일요일',
        1: '월요일',
        2: '화요일',
        3: '수요일',
        4: '목요일',
        5: '금요일',
        6: '토요일'
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
        moment().format('hh')
        setTimeDeco(() => moment().format('hh') < '12' ? 'PM' : 'AM');
        setTime(() => moment().format('hh:mm:ss'))
    }

    useInterval(() => {
        getTime();
    }, 1000);

    useEffect(() => {
        getToday();
    }, [])
    return (
        <>
            <div className="banner">
                <div className="banner-container">
                    <div className="banner-widget">
                        <div className="widget card">
                            <div className="widget-header row">
                                <div className="widget-profile col">
                                    <div className="profile">

                                    </div>
                                </div>
                                <div className="widget-user col-8">
                                    <div className="widget-user-name">
                                        <span className="user-name">알새우</span>
                                        <span>님</span>
                                        <br />
                                        <span>안녕하세요</span>
                                    </div>
                                </div>
                                <div className="col widget-icon">
                                    <div className="widget-cog">
                                        <img src={"/img/project/widget_cog.png"} />
                                    </div>
                                </div>

                                <div className="col widget-icon">
                                    <div className="widget-brush">
                                        <img src={"/img/project/widget_brush.png"} />
                                    </div>
                                </div>
                            </div>

                            <div className="widget-content">
                                <div className="widget-date row">
                                    <div className="widget-date-day">
                                        <span>{today}</span>
                                        <span>{currentDay}</span>
                                    </div>
                                    <div className="widget-date-time">
                                        <span>{time}</span>
                                        <span>{timeDeco}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-footer row">
                                <div className="widget-profile col-1">
                                    <div className="profile">

                                    </div>
                                </div>
                                <div className="widget-user col-11">
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
                        <div className="recent-project-card card p-1">
                            <div className="recent-project-d-day card-header row">
                                <div className="badge">D-13</div>
                            </div>
                            <div className="card-content row">
                                <div className="recent-project-type col-12">최근 프로젝트</div>
                                <br />
                                <div className="recent-project-name col-12">그림그리기 프로젝트</div>
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
