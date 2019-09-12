import React from "react";

const Title = props => {
    return(
        <div className="title" keys={props.id}>
            <h1 className="title-date">
                Nasa's Photo of the Day {props.date}</h1>
            
            <h2 className="photo-title">
                {props.title}
            </h2>
        </div>
    );
};

export default Title;