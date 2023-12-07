import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import Slider from "../components/slider"
import Subscribe from "../components/subscribeNews";

const Main = () => {
    const card1 = {
        kind: "Свинья",
        tel: "+0(123)567-89-01",
        status: "Активное",
        name: "Черчилль",
        date: "29.11.2023",
        desc: "В Центральном районе Санкт-Петербурга обнаружена свинья с ошейником. Отзывается на кличку Черчилль"
    }
    const card2 = {
        kind: "Курица",
        tel: "+764642552",
        status: "Хозяин найден",
        name: "Сергей",
        date: "01.12.2023",
        desc: "В Красногвардейском районе Санкт-Петербурга обнаружена курица, несущая яйца без остановки"
    }
    const card3 = {
        kind: "Кролик",
        tel: "+0(123)567-89-01",
        status: "На модерации",
        name: "Банни",
        date: "29.11.2023",
        desc: "В Приморском районе Санкт-Петербурга обнаружен вислоухий кролик"
    }
    return (
        <div>
            <Header />
            <main style={{"minHeight":"70vh"}}>
                <h2 className="text-center text-white bg-primary m-3">Найденные животные</h2>
                <Slider/>
                <h2 className="text-center text-white bg-primary m-3">Карточки найденных животных</h2>
                <div className="row justify-content-center">
                    <Card data={card1}/>
                    <Card data={card2}/>
                    <Card data={card3}/>
                </div>
                <Subscribe/>
            </main>
            <Footer />
        </div>
    );
}

export default Main;