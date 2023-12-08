import React from "react";
import {Link} from 'react-router-dom';

const request = () => {
    fetch("https://pets.сделай.site/api/login", {method: "POST", body: new FormData(document.getElementById("login"))})
            .then(response => response.json())
            .then(result => {
                localStorage.setItem("token", result.data.token);
                console.log(result);
            })
            .catch(error => console.log('error', error));
}

const Auth = () => {
    return (
        <main style={{ "minHeight": "70vh" }}>
            <h2 className="text-center text-white bg-primary m-3">Войти</h2>
            <form className="w-25 m-auto minContainer" id="login">
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-form-label">Эл. почта</label>
                    <div className="col-sm-10 w-100">
                        <input name="email" type="email" className="form-control minWidth" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-form-label">Пароль</label>
                    <div className="col-sm-10 w-100">
                        <input name="password" type="password" className="form-control minWidth" id="inputPassword3" required />
                    </div>
                </div>
                <p className="btn btn-primary" onClick={request}>Войти</p>
                <p className="mb-3">Еще не зарегистрированы?</p>
                <Link className="btn btn-primary" to={'/register'}>На страницу регистрации</Link>
            </form>
        </main>
    );
}

export default Auth;