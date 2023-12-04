import React from "react";
import rabbit_img from "../images/rabbit.jpeg";

const ButtonsCard = () => {
    return (
        <div className="card" style={{ "width": "18rem" }}>
        <img src={rabbit_img} className="card-img-top" alt="rabbit" height="300"/>
        <div className="card-body">
            <h5 className="card-title text-center">Кролик</h5>
            <p className="card-text">В Приморском районе Санкт-Петербурга обнаружен вислоухий кролик</p>
        </div>
        <button className="btn btn-primary mb-2">Редактировать</button>
        <button className="btn btn-primary">Удалить</button>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Статус: на модерации</li>
            <li className="list-group-item">Имя: Банни</li>
            <li className="list-group-item">Номер телефона нашедшего: +0(123)567-89-01</li>
            <li className="list-group-item">Дата: 29.11.2023</li>
        </ul>
    </div>
    );
}

export default ButtonsCard;