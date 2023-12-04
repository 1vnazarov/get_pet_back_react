import React from "react";
import cat_img from "../images/cat.jpg";
import dog_img from "../images/dog.jpg";
import hamster_img from "../images/hamster.jpg";

const Slider = () => {
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
                <div className="carousel-item active">
                    <img src={dog_img} className="rounded mx-auto d-block" alt="Собака" width="300" />
                    <h2 className="text-center">Найдена собака</h2>
                    <h3 className="text-center">В Приморском районе найдена собака</h3>
                </div>
                <div className="carousel-item">
                    <img src={cat_img} className="rounded mx-auto d-block" alt="Кошка" width="300" />
                    <h2 className="text-center">Найдена кошка</h2>
                    <h3 className="text-center">Около станции метро Площадь Восстания обнаружена белая кошка</h3>
                </div>
                <div className="carousel-item">
                    <img src={hamster_img} className="rounded mx-auto d-block" alt="Хомяк" width="300" />
                    <h2 className="text-center">Найден хомяк</h2>
                    <h3 className="text-center">На улице Малая Конюшенная, 8 бегает хомяк!</h3>
                </div>
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