import { React, useState, useEffect } from "react";
import RegisterRequest from "../modules/registerRequest";
import GetProfileRequest from "../modules/getProfileRequest";

const Add = () => {
    const [profile, setProfile] = useState({ data: { user: [{ email: "", phone: "", name: "" }] } });
    useEffect(() => GetProfileRequest(profile, setProfile), []);

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
    return (
        <main style={{ "minHeight": "70vh" }}>
            <h2 className="text-center text-white bg-primary m-3">Добавить объявление</h2>
            <form className="w-25 m-auto minContainer" id="main" enctype="multipart/form-data">
                <div className="row mb-3">
                    <label htmlFor="name" className="col-form-label">Имя</label>
                    <div className="col-sm-10 w-100">
                        <input className="form-control" id="name" name="name" defaultValue={profile.name} required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="phone" className="col-form-label">Телефон</label>
                    <div className="col-sm-10 w-100">
                        <input type="tel" className="form-control" id="phone" name='phone' defaultValue={profile.phone} required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-form-label">Эл. почта</label>
                    <div className="col-sm-10 w-100 m-auto">
                        <input name="email" type="email" className="form-control" id="email" defaultValue={profile.email} required />
                    </div>
                </div>
                <details id='register'>
                    <h2 className="text-center text-white bg-primary mt-3">Регистрация</h2>
                    <div className="row mb-3">
                        <label htmlFor="password" className="col-form-label">Пароль</label>
                        <div className="col-sm-10 w-100">
                            <input type="password" className="form-control" id="password" name="password" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="password_confirmation" className="col-form-label">Подтвердите пароль</label>
                        <div className="col-sm-10 w-100">
                            <input type="password" className="form-control" id="password_confirmation" name="password_confirmation" />
                        </div>
                    </div>
                    {
                        //<p className="btn btn-primary" onClick={() => { RegisterRequest(new FormData(document.getElementById("main"))) }}>Зарегистрироваться</p>
                    }
                    <h2 className="text-center text-white bg-primary mt-3">ㅤ</h2>
                    <summary className="btn btn-primary" style={{ "listStyleType": "none" }}>Регистрация</summary>
                </details>
                <div className="row mb-3">
                    <label htmlFor="photo1" className="col-form-label">Изображение 1</label>
                    <div className="col-sm-10 w-100">
                        <input className="form-control" id="photo1" type="file" accept="image/*" name="photos1" required />
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
                        <input className="form-control" id="kind" name="kind" />
                    </div>
                    <label htmlFor="district" className="col-form-label">Район</label>
                    <div className="col-sm-10 w-100">
                        <input className="form-control" id="district" name="district" />
                    </div>
                    <label htmlFor="cleymo" className="col-form-label">Клеймо</label>
                    <div className="col-sm-10 w-100">
                        <input className="form-control" id="cleymo" name="mark" />
                    </div>
                    <label htmlFor="desc" className="col-form-label">Описание</label>
                    <div className="col-sm-10 w-100">
                        <input className="form-control" id="desc" name="description" />
                    </div>
                </div>
                <div className="form-check mt-3 mb-3">
                    <input className="form-check-input" type="checkbox" id="gridCheck1" name="confirm" required />
                    <label className="form-check-label" htmlFor="gridCheck1">
                        Согласие на обработку персональных данных
                    </label>
                </div>
                <p className="btn btn-primary" onClick={() => {
                    const data = new FormData(document.getElementById("main"))
                    RegisterRequest(data) // Попробовать зарегаться
                    if (!document.getElementById('register').hasAttribute('open')) {
                        data.delete('password')
                        data.delete('password_confirmation')
                    }
                    request(data)
                }}>Добавить</p>
            </form>
            <p className='text-center text-success' id='success' style={{ display: "none" }}>Вы успешно зарегистрированы</p>
            <p className='text-center text-danger' id='fail' style={{ display: "none" }}>Ошибка регистрации</p>
            <p className='text-center text-success' id='successAdd' style={{ display: "none" }}>Объявление успешно добавлено</p>
            <p className='text-center text-danger' id='failAdd' style={{ display: "none" }}>Ошибка добавления объявления</p>
        </main>
    );
}

export default Add;