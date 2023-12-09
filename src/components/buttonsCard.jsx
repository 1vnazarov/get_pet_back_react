import {React} from "react";

const ButtonsCard = (props) => {
    const request = () => {
        fetch(`https://pets.сделай.site/api/users/orders/${props.data.id}`, { method: "DELETE", headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
            .then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(error => console.log('error', error));
    }

    const Edit = () => {
        console.log(props.data.status)
        if (['active', 'onModeration'].includes(props.data.status)) return <button className="btn btn-primary mb-2">Редактировать</button>
    }
    const Remove = () => {
        console.log(props.data.status)
        if (['active', 'onModeration'].includes(props.data.status)) return <button className="btn btn-primary">Удалить</button>
    }
    return (
        <div className="card m-3" style={{ "width": "18rem" }}>
            <img src={'https://pets.сделай.site' + (props.data.photos || props.data.photos1)} className="card-img-top" alt="pig" height="300" />
            <div className="card-body">
                <h5 className="card-title text-center">{props.data.kind}</h5>
                <p className="card-text">{props.data.description}</p>
            </div>
            <Edit />
            <Remove />
            <ul className="list-group list-group-flush" style={{ "minHeight": "200px" }}>
                <li className="list-group-item">ID: {props.data.id}</li>
                <li className="list-group-item">Район: {props.data.district}</li>
                <li className="list-group-item">Номер чипа: {props.data.mark}</li>
                <li className="list-group-item" id="date">Дата: {props.data.date}</li>
            </ul>
        </div>
    );
}

export default ButtonsCard;