import React from "react";
import {Link} from 'react-router-dom';
const Auth = () => {
    return (
        <main style={{ "minHeight": "70vh" }}>
            <h2 className="text-center text-white bg-primary m-3">Войти</h2>
            <form className="w-25 m-auto minContainer">
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-form-label">Эл. почта</label>
                    <div className="col-sm-10 w-100">
                        <input type="email" className="form-control minWidth" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-form-label">Пароль</label>
                    <div className="col-sm-10 w-100">
                        <input type="password" className="form-control minWidth" id="inputPassword3" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$" required />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Войти</button>
                <p className="mb-3">Еще не зарегистрированы?</p>
                <Link className="btn btn-primary" to={'/register'}>На страницу регистрации</Link>
            </form>
        </main>
    );
}

export default Auth;