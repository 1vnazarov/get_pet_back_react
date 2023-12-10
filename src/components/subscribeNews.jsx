import { React, useState } from "react";
import { validateEmail } from "../modules/validate";

const Subscribe = () => {
    const [formData, setFormData] = useState({email: ""});
    const [errors, setErrors] = useState({email: ""});
    const [validations, setValidations] = useState({email: false});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
        let error = name == "email" ? validateEmail(value) : ""
        setValidations((prev) => ({ ...prev, [name]: !error }));
        setErrors((prevErrors) => ({...prevErrors, [name]: error}));
    }

    const handleSubmit = () => {
        const emailError = validateEmail(formData.email);
        if (emailError) {
            setErrors({email: emailError});
        } else {
            // Все данные валидны, выполняем запрос
            request()
        }
    };

    const request = () => {
        fetch("https://pets.сделай.site/api/subscription", { method: "POST", body: new FormData(document.getElementById("subscribe")) })
            .then(response => response.status).then(result => {
                if (result == 204) {
                    document.getElementById("success").style.color = 'green';
                    document.getElementById("fail").style.color = 'white';
                }
                else {
                    document.getElementById("fail").style.color = 'red';
                    document.getElementById("success").style.color = 'white';
                }
                console.log(result);
            }).catch(error => console.log('error', error));
    }
    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Подписка на новости</h2>
            <form id="subscribe" className="w-50 m-auto p-3" style={{ "minWidth": "300px" }}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Введите адрес электронной почты</label>
                    <input type="email" name="email" className={`form-control m-auto ${validations.email ? "is-valid" : ""}`} onChange={handleInputChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <span className="text-danger">{errors.email}</span>
                    <div id="emailHelp" className="form-text">Мы не делимся Вашим e-mail ни с кем.</div>
                </div>
                <p onClick={handleSubmit} className="btn btn-primary">Подписаться</p>
            </form>
            <p className='text-center' id='success' style={{ color:"white" }}>Спасибо за подписку</p>
            <p className='text-center' id='fail' style={{ color:"white" }}>Не удалось подписаться</p>
        </div>
    );
}

export default Subscribe;