import React from "react";
import rabbit_img from "../images/rabbit.jpeg";

const ButtonsCard = (props) => {
    return (
        <div className="card" style={{ "width": "18rem" }}>
        <img src={rabbit_img} className="card-img-top" alt="rabbit" height="300"/>
        <div className="card-body">
            <h5 className="card-title text-center">{props.data.kind}</h5>
            <p className="card-text">{props.data.desc}</p>
        </div>
        <button className="btn btn-primary mb-2">Редактировать</button>
        <button className="btn btn-primary">Удалить</button>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Статус: {props.data.status}</li>
            <li className="list-group-item">Имя: {props.data.name}</li>
            <li className="list-group-item">Номер телефона нашедшего: {props.data.tel}</li>
            <li className="list-group-item">Дата: {props.data.date}</li>
        </ul>
    </div>
    );
}

export default ButtonsCard;