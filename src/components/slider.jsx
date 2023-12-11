import { React, useState, useEffect } from "react";
import Slide from "./slide";

const Loader = () => {
    return (
        <div className='justify-content-center align-items-center' id='loader' style={{ "display": "flex" }}>
            <div className='fs-1 text-success'>...Идет загрузка</div>
        </div>
    );
}

const Slider = () => {
    const [slide, setSlide] = useState({ data: { pets: [] } });
    useEffect(() => request(slide, setSlide), []);
    const request = (slide, setSlide) => {
        fetch("https://pets.сделай.site/api/pets/slider")
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setSlide(result);
                if (document.getElementById("carouselExampleIndicators")) document.getElementById("carouselExampleIndicators").style.display = "flex";
                if (document.getElementById("loader")) document.getElementById("loader").style.display = "none";
            })
            .catch(error => console.log('error', error));
    }

    const slides = slide.data.pets.map((pet, index) => {
        return <Slide data={pet} key={index} active={index == 0} />;
    });

    const indicators = slide.data.pets.map((pet, index) => {
        if (index == 0)
            return <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" key={index + 'btn'}></button>;
        else
            return <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label={"Slide " + (Number(index) + 1)} key={index + 'btn'}></button>;
    });

    return (
        <div>
            <Loader />
            <div id="carouselExampleIndicators" className="carousel slide m-auto bg-success bg-opacity-25 w-75 p-2"
                data-bs-ride="carousel" style={{ "minHeight": "400px", "display": "none" }}>
                <div className="carousel-indicators">
                    {indicators}
                </div>
                <div className="carousel-inner">
                    {slides}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Slider;