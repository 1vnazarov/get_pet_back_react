import { React, useState } from "react";
import RegisterRequest from "../modules/registerRequest";
import { validateName, validatePhone, validateEmail, validatePassword, validatePasswordConfirmation, validateConfirm } from "../modules/validate";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
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

    const [validations, setValidations] = useState({
        name: false,
        phone: false,
        email: false,
        password: false,
        password_confirmation: false,
        confirm: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === "checkbox" ? checked : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: inputValue,
        }));

        let error = "";
        switch (name) {
            case "name": error = validateName(inputValue); break;
            case "phone": error = validatePhone(inputValue); break;
            case "email": error = validateEmail(inputValue); break;
            case "password": error = validatePassword(inputValue); break;
            case "password_confirmation": error = validatePasswordConfirmation(inputValue, formData.password); break;
            case "confirm": error = validateConfirm(inputValue); break;
        }
        setValidations((prev) => ({ ...prev, [name]: !error }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error,
        }));
    }

    const handleSubmit = () => {
        const nameError = validateName(formData.name);
        const phoneError = validatePhone(formData.phone);
        const emailError = validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);
        const passwordConfirmationError = validatePasswordConfirmation(formData.password_confirmation, formData.password);
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
            RegisterRequest(new FormData(document.getElementById("register")), (status) => {
                if (status == 204) {
                    document.getElementById("success").style.display = "block";
                    document.getElementById("fail").style.display = "none";
                    navigate('/login')
                }
                else {
                    document.getElementById("fail").style.display = "block";
                    document.getElementById("success").style.display = "none";
                }
            });
        }
    };

    return (
        <main style={{ minHeight: "70vh" }}>
            <h2 className="text-center text-white bg-primary m-3">Регистрация</h2>
            <form id="register" className="w-25 m-auto minContainer">
                <div className="row mb-3">
                    <label htmlFor="name" className="col-form-label">Имя</label>
                    <div className="col-sm-10 w-100">
                        <input
                            name="name"
                            className={`form-control m-auto ${validations.name ? "is-valid" : ""}`}
                            id="name"
                            required
                            onChange={handleInputChange}
                        />
                        <span className="text-danger">{errors.name}</span>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="phone" className="col-form-label">Телефон</label>
                    <div className="col-sm-10 w-100">
                        <input name="phone" type="tel" className={`form-control m-auto ${validations.phone ? "is-valid" : ""}`} id="phone" required onChange={handleInputChange} />
                        <span className="text-danger">{errors.phone}</span>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-form-label">Эл. почта</label>
                    <div className="col-sm-10 w-100">
                        <input name="email" type="email" className={`form-control m-auto ${validations.email ? "is-valid" : ""}`} id="inputEmail3" required onChange={handleInputChange} />
                        <span className="text-danger">{errors.email}</span>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-form-label">Пароль</label>
                    <div className="col-sm-10 w-100">
                        <input name="password" type="password" className={`form-control m-auto ${validations.password ? "is-valid" : ""}`} id="inputPassword3" required onChange={handleInputChange} />
                        <span className="text-danger">{errors.password}</span>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="confirmPassword" className="col-form-label">Подтвердите пароль</label>
                    <div className="col-sm-10 w-100">
                        <input name="password_confirmation" type="password" className={`form-control m-auto ${validations.password_confirmation ? "is-valid" : ""}`} id="confirmPassword"
                            required onChange={handleInputChange} />
                        <span className="text-danger">{errors.password_confirmation}</span>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 w-100">
                        <div className="form-check m-auto">
                            <input name="confirm" className={`form-check-input ${validations.confirm ? "is-valid" : ""}`} type="checkbox" id="gridCheck1" required onChange={handleInputChange} />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Согласие на обработку персональных данных
                            </label>
                            <span className="text-danger">{errors.confirm}</span>
                        </div>
                    </div>
                </div>
                <p className="btn btn-primary" onClick={handleSubmit}>Зарегистрироваться</p>
            </form>
            <p className='text-center text-success' id='success' style={{ display: "none" }}>Вы успешно зарегистрированы</p>
            <p className='text-center text-danger' id='fail' style={{ display: "none" }}>Ошибка регистрации</p>
        </main>
    );
};

export default Register;
