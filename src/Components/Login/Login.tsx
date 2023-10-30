import React from "react";
import '../Register/Register.css';
import FormRegister from "../FormRegister/FormRegister";
import {registerValidation} from '../../utils/validation';

function Login ():JSX.Element {

    // Переменные для храния данных из инпутов
    const [email, setEmail] = React.useState <string> ('');
    const [password, setPassword] = React.useState <string> ('');

    // Переменные для валидации
    const [emailError, setEmailError] = React.useState <string> ('');
    const [passwordError, setPasswordError] = React.useState <string> ('');
    const [emailValidity, setEmailValidity] = React.useState <boolean> (false);
    const [passwordValidity, setPasswordValidity] = React.useState <boolean> (false);
    const formValidity = emailValidity && passwordValidity;

    // Переменная, отвечающая за состояние фокуса инпута
    const [isFocused, setIsFocused] = React.useState <boolean> (false);

    // useEffect запускает валидацию при изменении данных инпутов
    React.useEffect(() => {
        registerValidation({
            setEmailError, 
            setPasswordError,  
            email, 
            password,  
            setEmailValidity, 
            setPasswordValidity,
            isFocused})
    }, [ email, password])

    // Функции, записывающие значения из инпутов
    function handleEmailChange (e : React.ChangeEvent<HTMLInputElement>): void {
        setEmail(e.target.value);
    }

    function handlePasswordChange (e : React.ChangeEvent<HTMLInputElement>): void {
        setPassword(e.target.value);
    }

    //Функции, отвечающие за состояние фокуса в инпуте
    function handleFocus (): void {
        setIsFocused(true);
    }

    function handleBlur (): void {
        setIsFocused(false);
    }

    return (
        <main className="register">
            <FormRegister 
                formValidity={formValidity}
                title='Авторизация' 
                name='form-login'
                buttonText='Войти'
                text='Ещё не зарегистрированы?'
                link='Регистрация'
                to='/sign-up'>
                    <fieldset className="register__fieldset">
                        <label className="register__label" htmlFor="email">
                            <input className={`register__input ${!emailValidity && 'register__input_error'}`} 
                                type="email"
                                id='email'
                                minLength={2}
                                maxLength={30}
                                required
                                placeholder="E-mail"
                                value={email}
                                onChange={handleEmailChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur} />
                            <span className="register__span">{emailError}</span>
                        </label>
                        <label className="register__label" htmlFor="password">
                            <input className={`register__input ${!passwordValidity && 'register__input_error'}`}
                                type="password"
                                id='password'
                                minLength={2}
                                maxLength={30}
                                required
                                placeholder="Пароль"
                                value={password}
                                onChange={handlePasswordChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur} />
                            <span className="register__span">{passwordError}</span>
                        </label>
                    </fieldset>
                </FormRegister> 
        </main>
    )
}

export default Login;