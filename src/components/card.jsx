import React from "react";
import pig_img from "../images/pig.jpg";

const Card = (props) => {
    return (
        <div className="card" style={{ "width": "18rem" }}>
            <img src={pig_img} className="card-img-top" alt="pig" height="300" />
            <div className="card-body">
                <h5 className="card-title text-center">{props.data.name}</h5>
                <p className="card-text">{props.data.description}</p>
            </div>
            <ul className="list-group list-group-flush" style={{"minHeight":"320px"}}>
            <li className="list-group-item">ID: {props.data.id}</li>
                <li className="list-group-item">Вид: {props.data.kind}</li>
                <li className="list-group-item">Номер телефона нашедшего: {props.data.phone}</li>
                <li className="list-group-item">Район: {props.data.district}</li>
                <li className="list-group-item">Номер чипа: {props.data.mark}</li>
                <li className="list-group-item">Дата: {props.data.date}</li>
            </ul>
        </div>
    );
}

export default Card;