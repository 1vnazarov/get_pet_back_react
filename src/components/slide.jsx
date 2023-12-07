import React from "react";

const Slide = (props) => {
    return (
        <div className={"carousel-item" + (props.active ? " active" : "")} >
            <img src={'https://pets.сделай.site' + props.data.image} className="rounded mx-auto d-block" alt="Собака" width="300" />
            <h2 className="text-center">{props.data.kind}</h2>
            <h3 className="text-center">{props.data.description}</h3>
        </div>
    );
}


export default Slide;