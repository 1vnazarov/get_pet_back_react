import React from "react";

const Register = () => {
    const request = () => {
        fetch("https://pets.сделай.site/api/register", { method: "POST", body: new FormData(document.getElementById("register")) })
            .then(response => response = response.status).then(result => {
                console.log(result);
                if (result == 204) {
                    document.getElementById("success").style.display = "block";
                    document.getElementById("fail").style.display = "none";
                }
                else {
                    document.getElementById("fail").style.display = "block";
                    document.getElementById("success").style.display = "none";
                }
            }).catch(error => console.log('error', error));
    }
    
    return (
        <main style={{ "minHeight": "70vh" }}>
            <h2 className="text-center text-white bg-primary m-3">Регистрация</h2>
            <form id="register" className="w-25 m-auto minContainer">
                <div className="row mb-3">
                    <label htmlFor="name" className="col-form-label">Имя</label>
                    <div className="col-sm-10 w-100">
                        <input name="name" className="form-control m-auto" id="name" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="phone" className="col-form-label">Телефон</label>
                    <div className="col-sm-10 w-100">
                        <input name="phone" type="tel" className="form-control m-auto" id="phone" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-form-label">Эл. почта</label>
                    <div className="col-sm-10 w-100">
                        <input name="email" type="email" className="form-control m-auto" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-form-label">Пароль</label>
                    <div className="col-sm-10 w-100">
                        <input name="password" type="password" className="form-control m-auto" id="inputPassword3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="confirmPassword" className="col-form-label">Подтвердите пароль</label>
                    <div className="col-sm-10 w-100">
                        <input name="password_confirmation" type="password" className="form-control m-auto" id="confirmPassword"
                            required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 w-100">
                        <div className="form-check m-auto">
                            <input name="confirm" className="form-check-input" type="checkbox" id="gridCheck1" required />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Согласие на обработку персональных данных
                            </label>
                        </div>
                    </div>
                </div>
                <p className="btn btn-primary" onClick={request}>Зарегистрироваться</p>
            </form>
            <p className='text-center text-success' id='success' style={{ display: "none" }}>Вы успешно зарегистрированы</p>
            <p className='text-center text-danger' id='fail' style={{ display: "none" }}>Ошибка регистрации</p>
        </main>
    );
}

export default Register;