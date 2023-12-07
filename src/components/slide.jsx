import React from "react";
import dog_img from "../images/dog.jpg";

const Slide = (props) => {
    return (
        <div className={"carousel-item" + (props.active ? " active" : "")} >
            <img src={dog_img} className="rounded mx-auto d-block" alt="Собака" width="300" />
            <h2 className="text-center">{props.data.title}</h2>
            <h3 className="text-center">{props.data.desc}</h3>
        </div>
    );
}

export default Slide;