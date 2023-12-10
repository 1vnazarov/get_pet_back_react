import { React, useState } from "react";
import RegisterRequest from "../modules/registerRequest";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        password_confirmation: "",
        confirm: false,
    });

    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        password_confirmation: "",
        confirm: "",
    });

    const validateName = (value) => {
        if (!value.trim()) {
            return "Поле 'Имя' обязательно для заполнения";
        }
        if (!/^[а-яА-ЯёЁ\s-]+$/.test(value)) {
            return "Допустимые символы - кириллица, пробел, дефис";
        }
        return "";
    };

    const validatePhone = (value) => {
        if (!value.trim()) {
            return "Поле 'Телефон' обязательно для заполнения";
        }
        if (!/^\+?\d+$/.test(value)) {
            return "Только цифры и знак +";
        }
        return "";
    };

    const validateEmail = (value) => {
        if (!value.trim()) {
            return "Поле 'Эл. почта' обязательно для заполнения";
        }
        if (!/^\S+@\S+\.\S+$/.test(value)) {
            return "Неверный формат email";
        }
        return "";
    };

    const validatePassword = (value) => {
        if (!value.trim()) {
            return "Поле 'Пароль' обязательно для заполнения";
        }
        if (value.length < 7 || !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(value)) {
            return "Пароль должен содержать не менее 7 символов, 1 цифру, 1 строчную и 1 заглавную букву";
        }
        return "";
    };

    const validatePasswordConfirmation = (value) => {
        if (!value.trim()) {
            return "Поле 'Подтвердите пароль' обязательно для заполнения";
        }
        if (value !== formData.password) {
            return "Пароли не совпадают";
        }
        return "";
    };

    const validateConfirm = (value) => {
        if (!value) {
            return "Необходимо согласие на обработку персональных данных";
        }
        return "";
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === "checkbox" ? checked : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: inputValue,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const handleSubmit = () => {
        const nameError = validateName(formData.name);
        const phoneError = validatePhone(formData.phone);
        const emailError = validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);
        const passwordConfirmationError = validatePasswordConfirmation(
            formData.password_confirmation
        );
        const confirmError = validateConfirm(formData.confirm);

        if (
            nameError ||
            phoneError ||
            emailError ||
            passwordError ||
            passwordConfirmationError ||
            confirmError
        ) {
            setErrors({
                name: nameError,
                phone: phoneError,
                email: emailError,
                password: passwordError,
                password_confirmation: passwordConfirmationError,
                confirm: confirmError,
            });
        } else {
            // Все данные валидны, выполняем запрос на регистрацию
            RegisterRequest(new FormData(document.getElementById("register")));
        }
    };

    return (
        <main style={{ minHeight: "70vh" }}>
            <h2 className="text-center text-white bg-primary m-3">Регистрация</h2>
            <form id="register" className="w-25 m-auto minContainer">
                <div className="row mb-3">
                    <label htmlFor="name" className="col-form-label">Имя</label>
                    <div className="col-sm-10 w-100">
                        <input name="name" className="form-control m-auto" id="name" required onChange={handleInputChange} />
                        <span className="text-danger">{errors.name}</span>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="phone" className="col-form-label">Телефон</label>
                    <div className="col-sm-10 w-100">
                        <input name="phone" type="tel" className="form-control m-auto" id="phone" required onChange={handleInputChange} />
                        <span className="text-danger">{errors.phone}</span>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-form-label">Эл. почта</label>
                    <div className="col-sm-10 w-100">
                        <input name="email" type="email" className="form-control m-auto" id="inputEmail3" required onChange={handleInputChange} />
                        <span className="text-danger">{errors.email}</span>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-form-label">Пароль</label>
                    <div className="col-sm-10 w-100">
                        <input name="password" type="password" className="form-control m-auto" id="inputPassword3" required onChange={handleInputChange} />
                        <span className="text-danger">{errors.password}</span>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="confirmPassword" className="col-form-label">Подтвердите пароль</label>
                    <div className="col-sm-10 w-100">
                        <input name="password_confirmation" type="password" className="form-control m-auto" id="confirmPassword"
                            required onChange={handleInputChange} />
                        <span className="text-danger">{errors.password_confirmation}</span>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 w-100">
                        <div className="form-check m-auto">
                            <input name="confirm" className="form-check-input" type="checkbox" id="gridCheck1" required onChange={handleInputChange} />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Согласие на обработку персональных данных
                            </label>
                            <span className="text-danger">{errors.confirm}</span>
                        </div>
                    </div>
                </div>
                <p
                    className="btn btn-primary"
                    onClick={() => {
                        handleSubmit();
                    }}
                >
                    Зарегистрироваться
                </p>
            </form>
        </main>
    );
};

export default Register;
