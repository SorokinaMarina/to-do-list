import React from "react";
import './Register.css';
import FormRegister from "../FormRegister/FormRegister";

function Register (): JSX.Element {
    return (
        <main className="register">
            <FormRegister 
                title='Регистрация' 
                name='form-register'
                buttonText='Зарегистрироваться'
                text='Уже зарегистрированы?'
                link='Войти'
                to='/sign-in'>
                    <fieldset className="register__fieldset">
                        <label className="register__label" htmlFor="name">
                            <input className="register__input" 
                                type="text"
                                id='name'
                                minLength={2}
                                maxLength={30}
                                required
                                placeholder="Имя" />
                            <span className="register__span">Ошибка</span>
                        </label>
                        <label className="register__label" htmlFor="email">
                            <input className="register__input" 
                                type="email"
                                id='email'
                                minLength={2}
                                maxLength={30}
                                required
                                placeholder="E-mail" />
                            <span className="register__span">Ошибка</span>
                        </label>
                        <label className="register__label" htmlFor="password">
                            <input className="register__input" 
                                type="password"
                                id='password'
                                minLength={2}
                                maxLength={30}
                                required
                                placeholder="Пароль" />
                            <span className="register__span">Ошибка</span>
                        </label>
                    </fieldset>
                </FormRegister>
        </main>
    )
}

export default Register;