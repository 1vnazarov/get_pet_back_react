import React from "react";
import pig_img from "../images/pig.jpg";

const Card = (props) => {
    return (
        <div className="card" style={{ "width": "18rem" }}>
            <img src={pig_img} className="card-img-top" alt="pig" height="300" />
            <div className="card-body">
                <h5 className="card-title text-center">{props.data.kind}</h5>
                <p className="card-text">{props.data.desc}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Имя: {props.data.name}</li>
                <li className="list-group-item">Номер телефона нашедшего: {props.data.tel}</li>
                <li className="list-group-item">Дата: {props.data.date}</li>
            </ul>
        </div>
    );
}

export default Card;