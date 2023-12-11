import { React } from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
    const navigate = useNavigate();
    return (
        <div className={"card m-" + (props.center ? "auto" : "3")} style={{ cursor: "pointer", maxWidth: "35vw" }} onClick={() => {
            navigate("/card", { state: props.data.id })
        }}>
            <img src={'https://pets.сделай.site' + (props.data.photos || props.data.photos1)} className="card-img-top" alt="pig" height="300" />
            <div className="card-body">
                <h5 className="card-title text-center">{props.data.kind}</h5>
                <p className="card-text">{props.data.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">ID: {props.data.id}</li>
                {(props.data.name && <li className="list-group-item">Имя нашедшего: {props.data.name}</li>)}
                {props.data.phone && <li className="list-group-item">Номер телефона нашедшего: {props.data.phone}</li>}
                <li className="list-group-item">Район: {props.data.district}</li>
                <li className="list-group-item">Номер чипа: {props.data.mark}</li>
                {(props.data.date && <li className="list-group-item" id="date">Дата: {props.data.date}</li>)}
            </ul>
        </div>
    );
}

export default Card;