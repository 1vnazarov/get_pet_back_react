import { React, useState, useEffect } from "react";
import ButtonsCard from "./buttonsCard";

const Profile = (props) => {
    const [profile, setProfile] = useState({ data: { user: [] } });
    useEffect(() => requestGetProfile(profile, setProfile), []);
    const requestGetProfile = (profile, setProfile) => {
        fetch("https://pets.сделай.site/api/users", { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setProfile(result);
            })
            .catch(error => console.log('error', error));
    }

    const requestUpdate = (e, key, profile, setProfile) => {
        e.preventDefault();
        fetch(`https://pets.сделай.site/api/users/${key}`, {
            method: "PATCH",
            body: profile[key],
            headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
        }).then(response => response.json()).then(result => {
                console.log(result);
        }).catch(error => console.log('error', error));
    }


    return (
        <main style={{ "minHeight": "70vh" }}>
            <h2 className="text-center text-white bg-primary m-3">Личный кабинет</h2>
            <div className="w-25 m-auto minContainer">
                <form>
                    <div className="row mb-3">
                        <label htmlFor="name" className="col-form-label">Имя</label>
                        <div className="col-sm-10 w-100">
                            <input className="form-control m-auto" id="name" value={profile.name} readOnly />
                        </div>
                    </div>
                </form>
                <form id="update_email" onSubmit={(e) => {
                    requestUpdate(e, "email", profile, setProfile)
                }}>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-form-label">Эл. почта</label>
                        <div className="col-sm-10 w-100">
                            <input name="email" type="email" value={profile.email} className="form-control m-auto" id="email" onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
                        </div>
                    </div>
                    <input type="submit" value={"Именить"} className="btn btn-primary" />
                </form>
                <form id="update_phone" onSubmit={(e) => {
                    requestUpdate(e, "phone", profile, setProfile)
                }}>
                    <div className="row mb-3">
                        <label htmlFor="tel" className="col-form-label">Телефон</label>
                        <div className="col-sm-10 w-100">
                            <input name="phone" type="tel" className="form-control m-auto" id="phone" value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} />
                        </div>
                    </div>
                    <input type="submit" value={"Именить"} className="btn btn-primary" />
                </form>
                <p className="col-form-label">Количество дней с момента регистрации: {Math.floor((new Date() - new Date(profile.registrationDate)) / 86400000)}</p>
                <p onClick={() => {
                    localStorage.setItem("token", null);
                    document.getElementById("success").style.color = "green";
                }} className="btn btn-primary">Выйти</p>
            </div>
            <p className='text-center' id='success' style={{ color: "white" }}>Вы вышли из аккаунта</p>
            <h2 className="text-center text-white bg-primary m-3">Ваши карточки</h2>
            <div className="row justify-content-center">
            </div>
        </main>
    );
}
// email=test@pet.ru&password=1234567Aa
// "token": "LVWoz48WImc16zOvKlPSfVYeUIjfbSNjNUi4eR7kca1ffhEZWpgiVcSMrh8PATHLHpj4bUtKIH3vGU1t"
export default Profile;