import React from "react";
import './Burger.css';
import burger_img from '../../image/Burger.svg';

function Burger (): JSX.Element {
    return (
        <section className="burger">
            <button className="burger__button">
                <img className="burger__img" src={burger_img} alt='burger' />
            </button>
        </section>
    )
}

export default Burger;