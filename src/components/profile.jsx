import React from "react";
import ButtonsCard from "./buttonsCard";

const Profile = (props) => {
    return (
        <main style={{ "minHeight": "70vh" }}>
            <h2 className="text-center text-white bg-primary m-3">Личный кабинет</h2>
            <form className="w-25 m-auto minContainer">
                <div className="row mb-3">
                    <label htmlFor="name" className="col-form-label">Имя</label>
                    <div className="col-sm-10 w-100">
                        <input className="form-control m-auto" id="name" value={props.data.name} readOnly />
                    </div>
                </div>
                <button className="btn btn-primary">Изменить</button>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-form-label">Эл. почта</label>
                    <div className="col-sm-10 w-100">
                        <input type="email" value={props.data.email} className="form-control m-auto" id="inputEmail3" readOnly />
                    </div>
                </div>
                <button className="btn btn-primary">Изменить</button>
                <div className="row mb-3">
                    <label htmlFor="tel" className="col-form-label">Телефон</label>
                    <div className="col-sm-10 w-100">
                        <input type="tel" className="form-control m-auto" id="tel" value={props.data.tel} readOnly />
                    </div>
                </div>
                <button className="btn btn-primary">Изменить</button>
                <p className="col-form-label">Количество дней с момента регистрации: {props.data.days}</p>
                <button className="btn btn-primary">Выйти</button>
            </form>
            <h2 className="text-center text-white bg-primary m-3">Ваши карточки</h2>
            <div className="row justify-content-center">
            </div>
        </main>
    );
}

export default Profile;