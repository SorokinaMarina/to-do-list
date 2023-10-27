import React from "react";
import './Profile.css';
import edit from '../../image/edit.svg';
import close from '../../image/exit.svg';
import {Link} from 'react-router-dom';

interface ProfileProps {
    setBurgerClicked: () => void;
    burgerClicked: boolean;
}

function Profile (props : ProfileProps): JSX.Element {

    function clickBurger ():void {
        if(props.burgerClicked) {
            document.querySelector('.profile__container')?.classList.add('profile__container_inactive');
            setTimeout(() => {
                props.setBurgerClicked();
            }, 200)
        }
    }
    
    return (
        <section className='profile'>
            <div className={`profile__container ${props.burgerClicked ? 'profile__container_active' : ''}`}>
                <h2 className="profile__title">Привет, Марина</h2>
                <button className="profile__button-close" onClick={clickBurger}>
                    <img className="profile__close-img" src={close} alt='кнопка-закрыть' />
                </button>
                <form className="profile__form"
                    name="profile-form"
                    action="#"
                    id="profile-form">
                    <fieldset className="profile__fieldset">
                        <div className="profile__container-input">
                            <label className="profile__label" htmlFor="name">
                                <input className="profile__input" type="text"
                                    id="name"
                                    placeholder="Марина"
                                    minLength={2}
                                    maxLength={30}
                                    required />
                            </label>
                            <label className="profile__label" htmlFor="email">
                                <input className="profile__input" type="email"
                                    id="email"
                                    placeholder="E-mail"
                                    minLength={2}
                                    maxLength={30}
                                    required />   
                            </label>
                        </div>
                        <button className="profile__button-edit" type="submit">
                            <img className="profile__edit-img" src={edit} alt='редактировать' />
                        </button>
                    </fieldset>
                    <button className="profile__button-exit" type="button">
                        <Link className="profile__link" to='#'>Выйти</Link>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Profile;