import { React, useState } from "react";

const ButtonsCard = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleDeleteClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleConfirmDelete = () => {
        fetch(`https://pets.сделай.site/api/users/orders/${props.data.id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                handleCloseModal(); // Закрывать модальное окно после удаления
            })
            .catch(error => console.log('error', error));
    };

    const Edit = () => {
        if (['active', 'onModeration'].includes(props.data.status)) return <button className="btn btn-primary mb-2">Редактировать</button>
    }

    const Remove = () => {
        if (['active', 'onModeration'].includes(props.data.status)) return (
            <button className="btn btn-danger" onClick={handleDeleteClick}>Удалить</button>
        );
    }
    return (
        <div>
            <div className="card m-3" style={{ cursor: "pointer", maxWidth: "35vw" }}>
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

            <div className={`modal ${showModal ? 'd-block' : 'd-none'}`} tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Подтверждение удаления</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleCloseModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Вы уверены, что хотите удалить эту запись?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleCloseModal}>Отменить</button>
                            <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>Удалить</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ButtonsCard;