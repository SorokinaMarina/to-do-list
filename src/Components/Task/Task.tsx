import React from "react";
import './Task.css';
import ellipse from '../../image/Ellipse.svg';

function Task (): JSX.Element {
    return (
        <section className="task">
            <div className="task__container">
                <div className="task__container-element">
                    <button className="task__button" type="button" ><img className="task__img" src={ellipse} alt="элипс" /></button>
                    <p className="task__text">Задача</p>
                </div>
                <button className="task__button" type='button'>x</button>
            </div>
        </section>
    )
}

export default Task;