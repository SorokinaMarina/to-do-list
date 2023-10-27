import React from "react";
import './BurgerButton.css';
import burger_img from '../../image/Burger.svg';

interface BurgerProps {
    clickBurger: () => void;
}

function BurgerButton (props : BurgerProps): JSX.Element {
    return (
        <section className="burger">
            <button onClick={props.clickBurger} className="burger__button">
                <img className="burger__img" src={burger_img} alt='burger' />
            </button>
        </section>
    )
}

export default BurgerButton;