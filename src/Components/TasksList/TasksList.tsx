import React from "react";
import './TasksList.css';
import Task from "../Task/Task";
import ComplitedTask from "../ComplitedTask/ComplitedTask";

function TasksList (): JSX.Element {
    return (
        <section className="tasks-list">
            <div className="tasks-list__container">
                <Task/>
                <Task/>
                <Task/>
            </div>

            <h2 className="tasks-list__title">Выполненные задачи</h2>

            <div className="tasks-list__container">
                <ComplitedTask />
                <ComplitedTask />
                <ComplitedTask />
                <ComplitedTask />
            </div>

            <button className="tasks-list__button" type='button'></button>
        </section>
    )
}

export default TasksList;