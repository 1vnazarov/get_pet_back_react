import React from "react";
const Add = () => {
    return (
        <main style={{ "minHeight": "70vh" }}>
                <h2 class="text-center text-white bg-primary m-3">Добавить объявление</h2>
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
                <details>
                    <h2 className="text-center text-white bg-primary mt-3" style={{"marginRight":"10%"}}>Регистрация</h2>
                    <form>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-form-label">Пароль</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3"
                                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="confirmPassword" className="col-form-label">Подтвердите пароль</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="confirmPassword"
                                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$" required />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
                    </form>
                    <h2 className="text-center bg-primary mt-3" style={{"marginRight":"10%"}}>ㅤ</h2>
                    <summary className="btn btn-primary" style={{"listStyleType":"none"}}>Регистрация</summary>
                </details>
                <div className="row mb-3">
                    <label htmlFor="photo1" className="col-form-label">Изображение 1</label>
                    <div className="col-sm-10">
                        <input className="form-control" id="photo1" type="file" accept="image/*" required />
                    </div>
                    <label htmlFor="photo2" className="col-form-label">Изображение 2</label>
                    <div className="col-sm-10">
                        <input className="form-control" id="photo2" type="file" accept="image/*" />
                    </div>
                    <label htmlFor="photo3" className="col-form-label">Изображение 3</label>
                    <div className="col-sm-10">
                        <input className="form-control" id="photo3" type="file" accept="image/*" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="cleymo" className="col-form-label">Клеймо</label>
                    <div className="col-sm-10">
                        <input className="form-control" id="cleymo" />
                    </div>
                    <label htmlFor="desc" className="col-form-label">Описание</label>
                    <div className="col-sm-10">
                        <input className="form-control" id="desc" />
                    </div>
                </div>
                <div className="form-check mt-3 mb-3">
                    <input className="form-check-input" type="checkbox" id="gridCheck1" required />
                    <label className="form-check-label" htmlFor="gridCheck1">
                        Согласие на обработку персональных данных
                    </label>
                </div>
                <button className="btn btn-primary">Добавить</button>
            </form>
        </main>
    );
}

export default Add;