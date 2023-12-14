import { React, useState } from "react";
import { Link } from 'react-router-dom';
import CheckToken from "../modules/checkToken";
import { validateEmail, validatePassword } from "../modules/validate";

const Auth = () => {
    const [token, setToken] = useState(CheckToken() ? localStorage.getItem("token") : null);
    const request = () => {
        fetch("https://pets.сделай.site/api/login", { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) })
            .then(response => response.json()).then(result => {
                console.log(result)
                if ('data' in result) {
                    localStorage.setItem("token", result.data.token)
                    setToken(result.data.token);
                    document.getElementById('success').style.display = 'block'
                    document.getElementById('error').style.display = 'none'
                } else {
                    document.getElementById('error').style.display = 'block'
                    document.getElementById('success').style.display = 'none'
                    document.getElementById('validationCustom02').value = ''
                }
            })
    }

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const [validations, setValidations] = useState({
        email: false,
        password: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));

        let error = "";
        switch (name) {
            case "email": error = validateEmail(value); break;
            case "password": error = validatePassword(value); break;
        }
        setValidations((prev) => ({ ...prev, [name]: !error }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    }

    const handleSubmit = () => {
        const emailError = validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);

        if (emailError || passwordError) {
            setErrors({ email: emailError, password: passwordError });
        } else {
            // Все данные валидны, выполняем запрос
            request()
        }
    };

    return (
        <main style={{ "minHeight": "70vh" }}>
            <h2 className="text-center text-white bg-primary m-3">Войти</h2>
            <form className="w-25 m-auto minContainer" id='form'>
                <div className="row mb-3">
                    <label htmlFor="validationCustom01" className="col-form-label">Эл. почта</label>
                    <div className="col-sm-10 w-100">
                        <input name="email" type="email" className={`form-control minWidth ${validations.email ? "is-valid" : errors.email ? "is-invalid" : ""}`} id="validationCustom01" required onChange={handleInputChange} />
                        <span className="text-danger">{errors.email}</span>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="validationCustom02" className="col-form-label">Пароль</label>
                    <div className="col-sm-10 w-100">
                        <input name="password" type="password" className={`form-control minWidth ${validations.password ? "is-valid" : errors.password ? "is-invalid" : ""}`} id="validationCustom02" required onChange={handleInputChange} />
                        <span className="text-danger">{errors.password}</span>
                    </div>
                </div>
                <p className="btn btn-primary" onClick={handleSubmit}>Войти</p>
                <p className="mt-3">Еще не зарегистрированы?</p>
                <Link className="btn btn-primary" to={'/register'}>На страницу регистрации</Link>
            </form>
            <p className='text-danger text-center' id='error' style={{ display: 'none' }}>Неправилный адрес электронной почты и e-mail</p>
            <p className='text-success text-center' id='success' style={{ display: token ? "block" : 'none' }}>Вы успешно вошли в аккаунт</p>
        </main>
    );
}

export default Auth;