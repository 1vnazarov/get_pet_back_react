import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";

const CardPage = () => {
    const location = useLocation()
    console.log(location.state)
    const [card, setCard] = useState({ data: { pet: [] } });
    useEffect(() => request(card, setCard), []);
    const request = (card, setCard) => {
        fetch(`https://pets.сделай.site/api/pets/${location.state}`)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setCard(result);
            })
            .catch(error => console.log('error', error));
    }
    return (  
        <div>
            <Header/>
            <Card data={card.data.pet} center={true} />
            <Footer/>
        </div>
    );
}
 
export default CardPage;