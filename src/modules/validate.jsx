const validateName = (value) => {
    const error = !value.trim()
        ? "Поле 'Имя' обязательно для заполнения"
        : !/^[а-яА-ЯёЁ\s-]+$/.test(value)
            ? "Допустимые символы - кириллица, пробел, дефис"
            : "";
    return error;
}

const validatePhone = (value) => {
    const error = !value.trim()
        ? "Поле 'Телефон' обязательно для заполнения"
        : !/^\+?\d+$/.test(value)
            ? "Только цифры и знак +"
            : "";
    return error;
}

const validateEmail = (value) => {
    const error = !value.trim()
        ? "Поле 'Эл. почта' обязательно для заполнения"
        : !/^\S+@\S+\.\S+$/.test(value)
            ? "Неверный формат email"
            : "";
    return error;
}

const validatePassword = (value) => {
    const error = !value.trim()
        ? "Поле 'Пароль' обязательно для заполнения"
        : value.length < 7 || !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(value)
            ? "Пароль должен содержать только латиницу, не менее 7 символов, 1 цифру, 1 строчную и 1 заглавную букву"
            : "";
    return error;
}

const validatePasswordConfirmation = (value, value2) => {
    const error = !value.trim()
        ? "Поле 'Подтвердите пароль' обязательно для заполнения"
        : value !== value2
            ? "Пароли не совпадают"
            : "";
    return error;
}

const validateConfirm = (value) => {
    const error = !value ? "Необходимо согласие на обработку персональных данных" : "";
    return error;
}

export {
    validateName,
    validatePhone,
    validateEmail,
    validatePassword,
    validatePasswordConfirmation,
    validateConfirm
}