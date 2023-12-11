import {React, useState, useEffect} from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import Slider from "../components/slider"
import Subscribe from "../components/subscribeNews";

const Main = () => {
    const [card, setCard] = useState({ data: { orders: [] } });
    useEffect(() => request(card, setCard), []);
    const request = (card, setCard) => {
        fetch("https://pets.сделай.site/api/pets")
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setCard(result);
            })
            .catch(error => console.log('error', error));
    }
    const cards = card.data.orders.map((order) => {
        return <Card data={order}/>;
    });
    return (
        <div>
            <Header />
            <main style={{"minHeight":"70vh"}}>
                <h2 className="text-center text-white bg-primary m-3">Найденные животные</h2>
                <Slider/>
                <h2 className="text-center text-white bg-primary m-3">Карточки найденных животных</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                    {cards}
                </div>
                <Subscribe/>
            </main>
            <Footer />
        </div>
    );
}

export default Main;