import React from "react";
import Slide from "./slide";

const Slider = () => {
    const slide1 = {
        title: "Найдена собака",
        desc: "В Приморском районе найдена собака"
    }
    const slide2 = {
        title: "Найдена кошка",
        desc: "Около станции метро Площадь Восстания обнаружена белая кошка"
    }
    const slide3 = {
        title: "Найден хомяк",
        desc: "На улице Малая Конюшенная, 8 бегает хомяк!"
    }
    return (
        <div id="carouselExampleIndicators" className="carousel slide m-auto bg-success bg-opacity-25 w-75 p-2"
            data-bs-ride="carousel" style={{ "minHeight": "400px" }}>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <Slide data={slide1} active={1}/>
                <Slide data={slide2}/>
                <Slide data={slide3}/>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Предыдущий</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Следующий</span>
            </button>
        </div>
    );
}

export default Slider;