import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import Slider from "../components/slider"
import Subscribe from "../components/subscribeNews";

const Main = () => {
    return (
        <div>
            <Header />
            <main style={{"minHeight":"70vh"}}>
                <h2 className="text-center text-white bg-primary m-3">Найденные животные</h2>
                <Slider/>
                <h2 className="text-center text-white bg-primary m-3">Карточки найденных животных</h2>
                <div className="row justify-content-center">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <Subscribe/>
            </main>
            <Footer />
        </div>
    );
}

export default Main;