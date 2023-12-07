import React from "react";

const Card = (props) => {
    return (
        <div className="card m-3" style={{ "width": "18rem" }}>
            <img src={'https://pets.сделай.site' + props.data.photos} className="card-img-top" alt="pig" height="300" />
            <div className="card-body">
                <h5 className="card-title text-center">{props.data.kind}</h5>
                <p className="card-text">{props.data.description}</p>
            </div>
            <ul className="list-group list-group-flush" style={{"minHeight":"320px"}}>
            <li className="list-group-item">ID: {props.data.id}</li>
                <li className="list-group-item">Имя нашедшего: {props.data.name}</li>
                <li className="list-group-item">Номер телефона нашедшего: {props.data.phone}</li>
                <li className="list-group-item">Район: {props.data.district}</li>
                <li className="list-group-item">Номер чипа: {props.data.mark}</li>
                <li className="list-group-item">Дата: {props.data.date}</li>
            </ul>
        </div>
    );
}

export default Card;