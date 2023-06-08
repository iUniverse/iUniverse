import { useRef, useState } from "react";
import CalendarView from "./CalendarView";

export default function Task({ }: any) { //태스크 정보를 가지고 올 예정
    const TASK_TYPE = [
        { 'title': 'board', 'name': '보드' },
        { 'title': 'chart', 'name': '표' },
        { 'title': 'calendar', 'name': '캘린더' },
    ] as const;

    /* 현재 활성화된 테스크 */
    const [currentTaskContent, setCurrentTaskContent] = useState<string>();
    /* 현재 활성화된  프로젝트 */
    const [currentProject, setCurrentProject] = useState<any>();

    /* 테스크 목록 불러오기 */
    const loadTask = () => {

    }

    /* 테스크 컨텐츠 불러오기 */
    const loadTaskContent = (type: string, index : number) => {        
        setCurrentTaskContent(() => type);
    }

    /* 테스크 생성 */
    function createTask() {

    }

    function updateTask() {

    }

    function removeTask() {

    }
    return (
        <>
            <div className="task-container">
                <div className="task-side-menu">
                    <div className="task-search-box">
                        <input type="text" className="task-search" placeholder="프로젝트를 찾아보세요." />
                    </div>
                    <div className="recent-project-list">
                        <p className="side-menu-title">최근</p>
                        <div className="side-menu-project-name" onClick={() => loadTask()}>
                            그림그리기 프로젝트
                        </div>
                    </div>
                    <div className="favorite-project-list">
                        <p className="side-menu-title">즐겨찾기</p>
                    </div>
                    <div className="my-project-list">
                        <p className="side-menu-title">내 프로젝트</p>
                    </div>
                </div>

                <div className="task-view-list">
                    <div className="task-view-header">
                        <div className="active-project-banner">
                            <div className="active-project-bread">
                                프로젝트 > 내 프로젝트 > 그림그리기 프로젝트
                            </div>
                            <div className="active-project-description">
                                불쾌한 골짜기 극복하기
                                <br/>
                                극복극복
                                <br/>
                                대유쾌 골짜기
                            </div>
                            <div className="active-project-other">
                                <p className="project-during-date">D-13</p>
                                <p className="ml-1r project-remain-title">프로젝트 기간</p>
                                <p className="ml-3 project-during-date">2022.10.1</p>
                                <p className="ml-3 project-during-date">~</p>
                                <p className="ml-3 project-during-date">2022.11.3</p>
                            </div>
                        </div>
                    </div>

                    <div className="task-view-content">
                        <div className="task-view-tab">
                            {
                                TASK_TYPE.map((val, index) => (
                                    <>
                                        <div className={currentTaskContent === val.title ? "task-view-tab-title active" : "task-view-tab-title"} 
                                            key={val.title} 
                                            onClick={() => loadTaskContent(`${val.title}`, index)}>
                                            {val.name}
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* <CalendarView></CalendarView> */}
        </>
    )
}