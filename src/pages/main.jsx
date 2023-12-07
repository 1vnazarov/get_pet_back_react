import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import Slider from "../components/slider"
import Subscribe from "../components/subscribeNews";

const Main = () => {
    const card1 = {
        id:1,
        mark:1,
        district:"Центральный",
        kind: "Свинья",
        phone: "+0(123)567-89-01",
        name: "Черчилль",
        date: "29.11.2023",
        description: "В Центральном районе Санкт-Петербурга обнаружена свинья с ошейником. Отзывается на кличку Черчилль"
    }
    const card2 = {
        id:2,
        mark:2,
        district:"Центральный",
        kind: "Курица",
        phone: "+764642552",
        name: "Сергей",
        date: "01.12.2023",
        description: "В Красногвардейском районе Санкт-Петербурга обнаружена курица, несущая яйца без остановки"
    }
    const card3 = {
        id:3,
        mark:3,
        kind: "Кролик",
        district:"Приморский",
        tel: "+0(123)567-89-01",
        status: "На модерации",
        name: "Банни",
        date: "29.11.2023",
        description: "В Приморском районе Санкт-Петербурга обнаружен вислоухий кролик"
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