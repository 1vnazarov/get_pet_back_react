import React from "react";
import ButtonsCard from "../components/buttonsCard";
const Profile = () => {
    return (
        <main style={{ "minHeight": "70vh" }}>
            <h2 className="text-center text-white bg-primary m-3">Личный кабинет</h2>
            <form style={{"marginLeft":"10%"}}>
                <div className="row mb-3">
                    <label htmlFor="name" className="col-form-label">Имя</label>
                    <div className="col-sm-10">
                        <input className="form-control" id="name" value="Иван Иванович Иванов" readonly />
                    </div>
                </div>
                <button className="btn btn-primary">Изменить</button>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-form-label">Эл. почта</label>
                    <div className="col-sm-10">
                        <input type="email" value="user@user.com" className="form-control" id="inputEmail3" readonly />
                    </div>
                </div>
                <button className="btn btn-primary">Изменить</button>
                <div className="row mb-3">
                    <label htmlFor="tel" className="col-form-label">Телефон</label>
                    <div className="col-sm-10">
                        <input type="tel" className="form-control" id="tel" value="89112345678" readonly />
                    </div>
                </div>
                <button className="btn btn-primary">Изменить</button>
                <p className="col-form-label">Количество дней с момента регистрации: 5</p>
                <button className="btn btn-primary">Выйти</button>
            </form>
            <h2 className="text-center text-white bg-primary m-3">Ваши карточки</h2>
            <div className="row justify-content-center">
                <ButtonsCard/>
                <ButtonsCard/>
                <ButtonsCard/>
            </div>
        </main>
    );
}

export default Profile;