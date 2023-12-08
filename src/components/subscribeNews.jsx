import React from "react";

const request = () => {
    fetch("https://pets.сделай.site/api/subscription", { method: "POST", body: new FormData(document.getElementById("subscribe")) })
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(error => console.log('error', error));
}

const Subscribe = () => {
    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Подписка на новости</h2>
            <form id="subscribe" className="w-50 m-auto p-3" style={{ "minWidth": "300px" }}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Введите адрес электронной почты</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Мы не делимся Вашим e-mail ни с кем.</div>
                </div>
                <p onClick={request} className="btn btn-primary">Подписаться</p>
            </form>
        </div>
    );
}

export default Subscribe;