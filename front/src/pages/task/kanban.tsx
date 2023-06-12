export default function Kanban() {
    const addTask = () => {
        console.log('task 추가용');
    }

    return (
        <div className="kanban-board-view">
            <div className="kanban-board my-duty">
                <div className="kanban-board-header">
                    <div className="kanban-task-category">
                        할 일
                    </div>
                    <div className="kanban-task-count ml-3">
                        <p>3</p>
                    </div>

                    <div className="kanban-task-add-btn" onClick={() => addTask()}>
                        <img src="img/task/add-btn-default.webp" style={{ width: '1.25vw', height: '1.25vw' }} />
                    </div>
                </div>
                <div className="kanban-board-body">
                    <div className="kanban-card">
                        <div className="kanban-card-header">
                            포트폴리오
                        </div>
                        <div className="kanban-card-body">
                            <div className="kanban-card-body-content col-12">
                                2013년 부터 시작된  SDC
                            </div>
                            <div className="kanban-card-body-status">
                                할 일
                            </div>
                        </div>
                        <div className="kanban-card-footer">
                            프로필 들어감요
                        </div>
                    </div>
                </div>
            </div>

            <div className="kanban-board inprogress">

            </div>

            <div className="kanban-board complete">

            </div>



        </div>
    )
}