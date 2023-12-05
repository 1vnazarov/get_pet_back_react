import React from "react";
const Register = () => {
    return (
        <main style={{ "minHeight": "70vh" }}>
            <h2 className="text-center text-white bg-primary m-3">Регистрация</h2>
            <form className="w-50 m-auto minContainer">
                <div className="row mb-3">
                    <label htmlFor="name" className="col-form-label">Имя</label>
                    <div className="col-sm-10">
                        <input className="form-control" id="name" pattern="^[а-яёА-ЯЁ]+(?:[- ][а-яёА-ЯЁ]+)*$" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="phone" className="col-form-label">Телефон</label>
                    <div className="col-sm-10">
                        <input type="tel" className="form-control" id="phone" pattern="^(?:[+\d].*\d|\d)$" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-form-label">Эл. почта</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-form-label">Пароль</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="confirmPassword" className="col-form-label">Подтвердите пароль</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="confirmPassword" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$"
                            required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" required />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Согласие на обработку персональных данных
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
            </form>
        </main>
    );
}

export default Register;