import { React, useState, useEffect } from "react";
import ButtonsCard from "./buttonsCard";
import GetProfileRequest from "../modules/getProfileRequest";

const Profile = (props) => {
    const [profile, setProfile] = useState({ data: { user: [{ email: "", phone: "", name: "", registrationDate: new Date() }] } });
    
    const [card, setCard] =  useState({ data: { orders: [] } });

    const request = (card, setCard) => {
        fetch("https://pets.сделай.site/api/users/orders", {
            headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
        }).then(response => response.json()).then(result => {
            console.log(result);
            if ('data' in result) {
                if (result.data.orders.length > 0) {
                    document.getElementById("userCards").style.display = 'flex'
                    document.getElementById("noOrders").style.display = 'none'
                    setCard(result)
                }
                else {
                    document.getElementById("userCards").style.display = 'none'
                    document.getElementById("noOrders").style.display = 'block'
                }
            }
        }).catch(error => console.log('error', error));
    }
    useEffect(() => {
        GetProfileRequest(profile, setProfile)
        request(card, setCard)
    }, []);

    const requestUpdate = (e, key, profile, setProfile) => {
        e.preventDefault();
        fetch(`https://pets.сделай.site/api/users/${key}`, {
            method: "PATCH",
            body: new FormData(document.getElementById(`update_${key}`)),
            headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
        }).then(response => response.json()).then(result => {
                console.log(result);
        }).catch(error => console.log('error', error));
    }

    const cards = card.data.orders.map((order) => {
        return <ButtonsCard data={order}/>;
    });
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
                <p className="col-form-label">Количество дней с момента регистрации: {Math.floor((new Date() - new Date(profile.registrationDate)) / 86400000) || 0}</p>
                <p onClick={() => {
                    localStorage.setItem("token", null);
                    document.getElementById("success").style.color = "green";
                    document.getElementById("name").value = ""
                    document.getElementById("phone").value = ""
                    document.getElementById("email").value = ""
                }} className="btn btn-primary">Выйти</p>
            </div>
            <p className='text-center' id='success' style={{ color: "white" }}>Вы вышли из аккаунта</p>
            <h2 className="text-center text-white bg-primary m-3">Ваши карточки</h2>
            <p className='text-center' id='noOrders' style={{ display: 'none' }}>Нет объявлений</p>
            <div className="row justify-content-center" id='userCards' style={{display:"none"}}>
                {cards}
            </div>
        </main>
    );
}
// email=test@pet.ru&password=1234567Aa
// "token": "LVWoz48WImc16zOvKlPSfVYeUIjfbSNjNUi4eR7kca1ffhEZWpgiVcSMrh8PATHLHpj4bUtKIH3vGU1t"
export default Profile;