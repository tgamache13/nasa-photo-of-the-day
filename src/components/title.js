import React from "react";
import styled from "styled-components";


const TitleStyle = styled.div`
    background: #FFE4E1;
    box-shadow: 0px 1px 6px -2px grey;
    `;


const Title = props => {
    return(
        <TitleStyle>
            <div className="title" keys={props.id}>
        <h1 className="title-date">
            Nasa's Photo of the Day {props.date}</h1>
        
        <h2 className="photo-title">
            {props.title}
        </h2>
    </div>
    </TitleStyle>
         
    );
};

export default Title;