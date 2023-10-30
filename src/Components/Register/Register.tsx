import React from "react";
import './Register.css';
import FormRegister from "../FormRegister/FormRegister";
import { registerValidation } from '../../utils/validation';

function Register (): JSX.Element {

    // Переменные для храния данных из инпутов
    const [name, setName] = React.useState <string> ('');
    const [email, setEmail] = React.useState <string> ('');
    const [password, setPassword] = React.useState <string> ('');

    // Переменные для валидации
    const [nameError, setNameError] = React.useState <string> ('');
    const [emailError, setEmailError] = React.useState <string> ('');
    const [passwordError, setPasswordError] = React.useState <string> ('');
    const [nameValidity, setNameValidity] = React.useState <boolean> (false);
    const [emailValidity, setEmailValidity] = React.useState <boolean> (false);
    const [passwordValidity, setPasswordValidity] = React.useState <boolean> (false);
    const formValidity = nameValidity && emailValidity && passwordValidity;

    // Переменная, отвечающая за состояние фокуса инпута
    const [isFocused, setIsFocused] = React.useState <boolean> (false);

    // useEffect запускает валидацию при изменении данных инпутов
    React.useEffect(() => {
        registerValidation({
            setNameError, 
            setEmailError, 
            setPasswordError, 
            name, 
            email, 
            password, 
            setNameValidity, 
            setEmailValidity, 
            setPasswordValidity,
            isFocused})
    }, [name, email, password])

    // Функции, записывающие значения из инпутов
    function handleNameChange (e : React.ChangeEvent<HTMLInputElement>): void {
        setName(e.target.value);
    }

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
                title='Регистрация' 
                name='form-register'
                buttonText='Зарегистрироваться'
                text='Уже зарегистрированы?'
                link='Войти'
                to='/sign-in'>
                    <fieldset className="register__fieldset">
                        <label className="register__label" htmlFor="name">
                            <input className={`register__input ${!nameValidity && 'register__input_error'}`}
                                type="text"
                                id='name'
                                minLength={2}
                                maxLength={30}
                                required
                                placeholder="Имя"
                                value={name}
                                onChange={handleNameChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur} />
                            <span className="register__span">{nameError}</span>
                        </label>
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

export default Register;