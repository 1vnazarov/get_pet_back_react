import React from "react";
import pig_img from "../images/pig.jpg";

const Card = () => {
    return (
        <div className="card" style={{ "width": "18rem" }}>
            <img src={pig_img} className="card-img-top" alt="pig" height="300" />
            <div className="card-body">
                <h5 className="card-title text-center">Свинья</h5>
                <p className="card-text">В Центральном районе Санкт-Петербурга обнаружена свинья с ошейником. Отзывается
                    на кличку Черчилль</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Имя: Черчилль</li>
                <li className="list-group-item">Номер телефона нашедшего: +0(123)567-89-01</li>
                <li className="list-group-item">Дата: 29.11.2023</li>
            </ul>
        </div>
    );
}

export default Card;