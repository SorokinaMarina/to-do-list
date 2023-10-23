import React from "react";
import Enter from '../../image/Enter.svg';
import './Input.css';

function Input (): JSX.Element {
    return (
        <section className="input">
            <label className="input__label" htmlFor="input">
                <input className="input__field" type="text" id='input' placeholder="Добавить задачу" />
                <button className="input__button">
                    <img className="input__img" src={Enter} alt='Enter' />
                </button>
            </label>
        </section>
    )
}

export default Input;