import React from "react";
import './FormRegister.css';
import { Link } from 'react-router-dom';

interface FormRegisterProps {
    title: string;
    name: string;
    buttonText: string;
    text: string;
    link: string;
    to: string;
    children: JSX.Element;
}

function FormRegister (props: FormRegisterProps): JSX.Element {
    return (
        <section className="form-register">
            <h1 className="form-register__title">{props.title}</h1>
            <form className="form-register__form" action="#" name={props.name} id={props.name}>
                {props.children}
                <button className="form-register__button" type="submit">{props.buttonText}</button>
            </form>
            <div className="form-register__container">
                <p className="form-register__text">{props.text}</p>
                <Link className="form-register__link" to={props.to}>{props.link}</Link>
            </div>
        </section>
    )
}

export default FormRegister;