import { React, useState } from "react";
import { Link } from 'react-router-dom';

const Auth = () => {
    const [user, setUser] = useState();
    const [token, setToken] = useState();
    const request = (e) => {
        e.preventDefault();
        const form = document.getElementById('form')
        if (!form.checkValidity()) {
            e.stopPropagation()
            form.classList.add('was-validated')
            return
        }
        console.log(user)
        fetch("https://pets.сделай.site/api/login", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
            redirect: 'follow'
        }).then(response => response.json()).then(result => {
            console.log(result)
            if ('data' in result) {
                localStorage.setItem("token", result.data.token)
                setToken(result.data.token);
                document.getElementById('success').style.display = 'block'
                document.getElementById('error').style.display = 'none'
            } else {
                document.getElementById('error').style.display = 'block'
                document.getElementById('success').style.display = 'none'
                document.getElementById('validationCustom02').value = ''
            }
        })
    }
    return (
        <main style={{ "minHeight": "70vh" }}>
            <h2 className="text-center text-white bg-primary m-3">Войти</h2>
            <form className="w-25 m-auto needs-validation minContainer" onSubmit={request} noValidate id='form'>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-form-label">Эл. почта</label>
                    <div className="col-sm-10 w-100">
                        <input name="email" type="email" className="form-control minWidth" id="validationCustom01" required onChange={(e) => setUser({ ...user, email: e.target.value })} />
                        <div className="invalid-feedback">
                            Пожалуйста, введите адрес электронной почты
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-form-label">Пароль</label>
                    <div className="col-sm-10 w-100">
                        <input name="password" type="password" className="form-control minWidth" id="validationCustom02" required onChange={(e) => setUser({ ...user, password: e.target.value })} />
                        <div className="invalid-feedback">
                            Пожалуйста, введите пароль
                        </div>
                    </div>
                </div>
                <input type="submit" value={"Войти"} className="btn btn-primary" />
                <p className="mb-3">Еще не зарегистрированы?</p>
                <Link className="btn btn-primary" to={'/register'}>На страницу регистрации</Link>
            </form>
            <p className='text-danger text-center' id='error' style={{ display: 'none' }}>Неправилный адрес электронной почты и e-mail</p>
            <p className='text-success text-center' id='success' style={{ display: 'none' }}>Вы успешно вошли в аккаунт, ваш токен: {token}</p>
        </main>
    );
}

export default Auth;