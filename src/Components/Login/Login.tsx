import React from "react";
import '../Register/Register.css';
import FormRegister from "../FormRegister/FormRegister";

function Login ():JSX.Element {
    return (
        <main className="register">
            <FormRegister 
                title='Авторизация' 
                name='form-login'
                buttonText='Войти'
                text='Ещё не зарегистрированы?'
                link='Регистрация'
                to='/sign-up'>
                    <fieldset className="register__fieldset">
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

export default Login;