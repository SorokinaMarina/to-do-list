import React from "react";
import './ComplitedTask.css';
import circle from '../../image/Circle.svg';

function ComplitedTask (): JSX.Element {
    return (
        <section className="complited-task">
            <div className="complited-task__container">
                <button className="complited-task__button" type="button" ><img className="complited-task__img" src={circle} alt="элипс" /></button>
                <p className="complited-task__text">Выполненная задача</p>
            </div>
        </section>
    )
}

export default ComplitedTask;
