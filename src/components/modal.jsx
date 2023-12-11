import React from "react";

const Modal = ({ show, closeModal, confirmDelete, title, body }) => {
    const style = show ? { display: "block" } : {};
    const className = `modal fade ${show ? "show" : ""}`;
    return (
        <>
            {show && <div className="modal-backdrop fade show"></div>}
            <div className={className} tabIndex="-1" role="dialog" style={style}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                        </div>
                        <div className="modal-body">{body}</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                                onClick={closeModal}>Отменить</button>
                            <button type="button" className="btn btn-danger" onClick={confirmDelete}>Удалить</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
