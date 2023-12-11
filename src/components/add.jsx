import { React, useState, useEffect } from "react";
import RegisterRequest from "../modules/registerRequest";
import GetProfileRequest from "../modules/getProfileRequest";
import { validateEmail, validateName, validatePhone, validatePassword, validateConfirm, validatePasswordConfirmation, validateFile } from "../modules/validate";

const validateText = (name, value) => {
    return !value.trim() ? `Поле '${name}' обязательно для заполнения` : ""
}

const Add = () => {
    const [profile, setProfile] = useState({ data: { user: [{ email: "", phone: "", name: "" }] } });

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        password_confirmation: "",
        confirm: false,
        photos1: "",
        kind: "",
        district: "",
        mark: "",
        description: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        password_confirmation: "",
        confirm: "",
        photos1: "",
        kind: "",
        district: "",
        mark: "",
        description: ""
    });

    const [validations, setValidations] = useState({
        name: false,
        phone: false,
        email: false,
        password: false,
        password_confirmation: false,
        confirm: false,
        photos1: false,
        kind: false,
        district: false,
        mark: false,
        description: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        const inputValue = type === "checkbox" ? checked : type === 'file' ? files : value;

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
            case "photos1": error = validateFile(inputValue); break;
            case "kind": error = validateText('Вид', inputValue); break;
            case "district": error = validateText('Район', inputValue); break;
            case "mark": error = validateText('Клеймо', inputValue); break;
            case "description": error = validateText('Описание', inputValue); break;
        }
        setValidations((prev) => ({ ...prev, [name]: !error }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error,
        }));
    }

    useEffect(() => {
        GetProfileRequest(profile, setProfile)
    }, []);

    const request = (data) => {
        fetch("https://pets.сделай.site/api/pets", { method: "POST", body: data })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if (result.data.status == 'OK') {
                    document.getElementById('successAdd').style.display = 'block';
                    document.getElementById('failAdd').style.display = 'none';
                }
                else {
                    document.getElementById('successAdd').style.display = 'none';
                    document.getElementById('failAdd').style.display = 'block';
                }
            })
            .catch(error => console.log('error', error));
    }

    const handleSubmit = () => {
        document.getElementById("fail").style.display = "none";
        document.getElementById("success").style.display = "none";
        document.getElementById("failAdd").style.display = "none";
        document.getElementById("successAdd").style.display = "none";

        const nameError = validateName(formData.name);
        const phoneError = validatePhone(formData.phone);
        const emailError = validateEmail(formData.email);
        const passwordError = document.getElementById('register').hasAttribute('open') ? validatePassword(formData.password) : "";
        const passwordConfirmationError = document.getElementById('register').hasAttribute('open') ? validatePasswordConfirmation(formData.password_confirmation, formData.password) : "";
        const confirmError = validateConfirm(formData.confirm);
        const photos1Error = validateFile(formData.photos1)
        const kindError = validateText('Вид', formData.kind)
        const districtError = validateText('Район', formData.district)
        const markError = validateText('Клеймо', formData.mark)
        const descriptionError = validateText('Описание', formData.description)

        if (
            nameError ||
            phoneError ||
            emailError ||
            passwordError ||
            passwordConfirmationError ||
            confirmError || photos1Error || kindError || districtError || markError || descriptionError

        ) {
            setErrors({
                name: nameError,
                phone: phoneError,
                email: emailError,
                password: passwordError,
                password_confirmation: passwordConfirmationError,
                confirm: confirmError,
                photos1: photos1Error,
                kind: kindError,
                district: districtError,
                mark: markError,
                description: descriptionError
            });
        } else {
            // Все данные валидны, выполняем запрос
            const data = new FormData(document.getElementById("main"))
            if (!document.getElementById('register').hasAttribute('open')) {
                data.delete('password')
                data.delete('password_confirmation')
            }
            else { // Попробовать зарегаться
                RegisterRequest(data, (status) => {
                    if (status == 204) {
                        document.getElementById("success").style.display = "block";
                        document.getElementById("fail").style.display = "none";
                    }
                    else {
                        document.getElementById("fail").style.display = "block";
                        document.getElementById("success").style.display = "none";
                        return
                    }
                });
            }
            request(data)
        }
    };

    return (
        <main style={{ "minHeight": "70vh" }}>
            <h2 className="text-center text-white bg-primary m-3">Добавить объявление</h2>
            <form className="w-25 m-auto minContainer" id="main" encType="multipart/form-data">
                <div className="row mb-3">
                    <label htmlFor="name" className="col-form-label">Имя</label>
                    <div className="col-sm-10 w-100">
                        <input className={`form-control m-auto ${validations.name ? "is-valid" : errors.name ? "is-invalid" : ""}`} onChange={handleInputChange} id="name" name="name" defaultValue={profile.name} required />
                        <span className="text-danger">{errors.name}</span>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="phone" className="col-form-label">Телефон</label>
                    <div className="col-sm-10 w-100">
                        <input type="tel" className={`form-control m-auto ${validations.phone ? "is-valid" : errors.phone ? "is-invalid" : ""}`} onChange={handleInputChange} id="phone" name='phone' defaultValue={profile.phone} required />
                        <span className="text-danger">{errors.phone}</span>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-form-label">Эл. почта</label>
                    <div className="col-sm-10 w-100 m-auto">
                        <input name="email" type="email" className={`form-control m-auto ${validations.email ? "is-valid" : errors.email ? "is-invalid" : ""}`} onChange={handleInputChange} id="email" defaultValue={profile.email} required />
                        <span className="text-danger">{errors.email}</span>
                    </div>
                </div>
                <details id='register'>
                    <h2 className="text-center text-white bg-primary mt-3">Регистрация</h2>
                    <div className="row mb-3">
                        <label htmlFor="password" className="col-form-label">Пароль</label>
                        <div className="col-sm-10 w-100">
                            <input type="password" className={`form-control m-auto ${validations.password ? "is-valid" : errors.password ? "is-invalid" : ""}`} onChange={handleInputChange} id="password" name="password" />
                            <span className="text-danger">{errors.password}</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="password_confirmation" className="col-form-label">Подтвердите пароль</label>
                        <div className="col-sm-10 w-100">
                            <input type="password" className={`form-control m-auto ${validations.password_confirmation ? "is-valid" : errors.password_confirmation ? "is-invalid" : ""}`} onChange={handleInputChange} id="password_confirmation" name="password_confirmation" />
                            <span className="text-danger">{errors.password_confirmation}</span>
                        </div>
                    </div>
                    <h2 className="text-center text-white bg-primary mt-3">ㅤ</h2>
                    <summary className="btn btn-primary" style={{ "listStyleType": "none" }}>Регистрация</summary>
                </details>
                <div className="row mb-3">
                    <label htmlFor="photo1s" className="col-form-label">Изображение 1</label>
                    <div className="col-sm-10 w-100">
                        <input className={`form-control m-auto ${validations.photos1 ? "is-valid" : errors.photos1 ? "is-invalid" : ""}`} onChange={handleInputChange} id="photos1" type="file" accept="image/*" name="photos1" required />
                        <span className="text-danger">{errors.photos1}</span>
                    </div>
                    <label htmlFor="photo2" className="col-form-label">Изображение 2</label>
                    <div className="col-sm-10 w-100">
                        <input className="form-control" id="photo2" type="file" accept="image/*" name="photos2" />
                    </div>
                    <label htmlFor="photo3" className="col-form-label">Изображение 3</label>
                    <div className="col-sm-10 w-100">
                        <input className="form-control" id="photo3" type="file" accept="image/*" name="photos3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="kind" className="col-form-label">Вид</label>
                    <div className="col-sm-10 w-100">
                        <input className={`form-control m-auto ${validations.kind ? "is-valid" : errors.kind ? "is-invalid" : ""}`} onChange={handleInputChange} id="kind" name="kind"  />
                        <span className="text-danger">{errors.kind}</span>
                    </div>
                    <label htmlFor="district" className="col-form-label">Район</label>
                    <div className="col-sm-10 w-100">
                        <input className={`form-control m-auto ${validations.district ? "is-valid" : errors.district ? "is-invalid" : ""}`} onChange={handleInputChange} id="district" name="district" />
                        <span className="text-danger">{errors.district}</span>
                    </div>
                    <label htmlFor="cleymo" className="col-form-label">Клеймо</label>
                    <div className="col-sm-10 w-100">
                        <input className={`form-control m-auto ${validations.mark ? "is-valid" : ""}`} onChange={handleInputChange} id="cleymo" name="mark" />
                        <span className="text-danger">{errors.mark}</span>
                    </div>
                    <label htmlFor="desc" className="col-form-label">Описание</label>
                    <div className="col-sm-10 w-100">
                        <input className={`form-control m-auto ${validations.description ? "is-valid" : errors.description ? "is-invalid" : ""}`} onChange={handleInputChange} id="desc" name="description" />
                        <span className="text-danger">{errors.description}</span>
                    </div>
                </div>
                <div className="form-check mt-3 mb-3">
                    <input className={`form-check-input ${validations.confirm ? "is-valid" : ""}`} onChange={handleInputChange} type="checkbox" id="gridCheck1" name="confirm" required />
                    <label className="form-check-label" htmlFor="gridCheck1">
                        Согласие на обработку персональных данных
                    </label>
                    <span className="text-danger">{errors.confirm}</span>
                </div>
                <p className="btn btn-primary" onClick={handleSubmit}>Добавить</p>
            </form>
            <p className='text-center text-success' id='success' style={{ display: "none" }}>Вы успешно зарегистрированы</p>
            <p className='text-center text-danger' id='fail' style={{ display: "none" }}>Ошибка регистрации</p>
            <p className='text-center text-success' id='successAdd' style={{ display: "none" }}>Объявление успешно добавлено</p>
            <p className='text-center text-danger' id='failAdd' style={{ display: "none" }}>Ошибка добавления объявления</p>
        </main>
    );
}

export default Add;