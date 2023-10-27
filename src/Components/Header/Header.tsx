import React from "react";
import './Header.css';
import BurgerButton from "../BurgerButton/BurgerButton";
import Input from "../Input/Input";
import Title from "../Title/Title";
import Profile from "../Profile/Profile";

function Header (): JSX.Element {

    const [burgerClicked, setBurgerClicked] = React.useState <boolean> (false);

    //Функция, которая отвечает за открытие/закрытие попапа с профилем
    function clickBurger ():void {
        setBurgerClicked(true);
    }

    return (
        <section className="header">
            <div className="header__container">
                <Input /> 
                <Title />
                <BurgerButton clickBurger={clickBurger} />
                {burgerClicked && <Profile setBurgerClicked={() => {setBurgerClicked(false)}} burgerClicked={burgerClicked} />}         
            </div>
        </section>
    )
}

export default Header;