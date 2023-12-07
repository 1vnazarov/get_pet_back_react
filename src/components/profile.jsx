import React from "react";
import ButtonsCard from "./buttonsCard";
const Profile = (props) => {
    const card1 = {
        kind: "Свинья",
        tel: "+0(123)567-89-01",
        status: "Активное",
        name: "Черчилль",
        date: "29.11.2023",
        desc: "В Центральном районе Санкт-Петербурга обнаружена свинья с ошейником. Отзывается на кличку Черчилль"
    }
    const card2 = {
        kind: "Курица",
        tel: "+764642552",
        status: "Хозяин найден",
        name: "Сергей",
        date: "01.12.2023",
        desc: "В Красногвардейском районе Санкт-Петербурга обнаружена курица, несущая яйца без остановки"
    }
    const card3 = {
        kind: "Кролик",
        tel: "+0(123)567-89-01",
        status: "На модерации",
        name: "Банни",
        date: "29.11.2023",
        desc: "В Приморском районе Санкт-Петербурга обнаружен вислоухий кролик"
    }
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
                <ButtonsCard data={card1}/>
                <ButtonsCard data={card2}/>
                <ButtonsCard data={card3}/>
            </div>
        </main>
    );
}

export default Profile;