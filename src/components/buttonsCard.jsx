import { React, useState } from "react";
import Modal from "./modal";
const ButtonsCard = (props) => {
    const [showModal, setShowModal] = useState(false);
    const handleDeleteClick = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleConfirmDelete = () => {
        fetch(`https://pets.сделай.site/api/users/orders/${props.data.id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(response => response.json()).then(result => {
            console.log(result);
            handleCloseModal(); // Закрывать модальное окно после удаления
        }).catch(error => console.log('error', error));
    }

    const Edit = () => {
        if (['active', 'onModeration'].includes(props.data.status)) return <button className="m-auto btn btn-primary mb-2" style={{width: "90%"}}>Редактировать</button>
    }

    const Remove = () => {
        if (['active', 'onModeration'].includes(props.data.status)) return (
            <button className="m-auto btn btn-danger mb-2" style={{width: "90%"}} onClick={handleDeleteClick}>Удалить</button>
        );
    }

    return (
        <>
            <div className="minContainer card m-3" style={{ cursor: "pointer", maxWidth: "35vw" }}>
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
            <Modal
                show={showModal}
                closeModal={handleCloseModal}
                confirm={handleConfirmDelete}
                primaryClass="danger"
                primaryText={"Удалить"}
                secondaryText={"Отмена"}
                title="Подтверждение удаления"
                body="Вы уверены, что хотите удалить запись?"
            />
        </>
    );
}

export default ButtonsCard;