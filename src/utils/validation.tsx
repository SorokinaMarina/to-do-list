const regExpEmail : RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regExpPassword : RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/;
const regExpName : RegExp = /^[a-zA-Zа-яА-Я\s-]+$/;

interface ValidationProps {
    setNameError?: (value: string) => void;
    setEmailError: (value: string) => void;
    setPasswordError: (value: string) => void;
    name?: string,
    email: string,
    password: string;
    setNameValidity?: (value: boolean) => void;
    setEmailValidity: (value: boolean) => void;
    setPasswordValidity: (value: boolean) => void;
    isFocused: boolean;
}

// Шаблонная функция-валидатор, которая принимает динамические данные
function registerField (
    setError: (value: string) => void, 
    value: string, 
    valueValidity: (value: boolean) => void, 
    isFocused: boolean, 
    valueValid: boolean,
    inputValue: string,
    errorText: string) :void {
    
    if (!isFocused) {
        setError('');
    } else if (value === '') {
        setError(`Введите ${inputValue}`)
    } else if (value !== '' && !valueValid) {
        setError(errorText)
    } else if (valueValid) {
        setError('');
        valueValidity(true);
    }
}


export function registerValidation (props: ValidationProps): void {
    const {
        setNameError, 
        setEmailError, 
        setPasswordError, 
        name, 
        email, 
        password, 
        setNameValidity, 
        setEmailValidity, 
        setPasswordValidity, 
        isFocused} = props;

    
    const emailValid = regExpEmail.test(email);
    const passwordValid = regExpPassword.test(password) && password.length > 6;

    if (name && setNameError && setNameValidity) {

        const nameValid = name.length >= 2 && name.length <= 30 && regExpName.test(name);

        registerField(
            setNameError, 
            name, 
            setNameValidity, 
            isFocused, 
            nameValid, 
            'имя', 
            'Имя должно содержать не менее 2 и не более 30 символов латинского или русского алфавита, пробел, дефис');
    }

    registerField(
        setEmailError, 
        email,
        setEmailValidity,
        isFocused,
        emailValid,
        'E-mail',
        'Введён некорректный адрес электронной почты') 
        
    registerField (
        setPasswordError,
        password,
        setPasswordValidity,
        isFocused,
        passwordValid,
        'пароль',
        'Пароль должен содержать латинские символы верхнего и нижнего регистра и хотя бы одну цифру'
        )
}