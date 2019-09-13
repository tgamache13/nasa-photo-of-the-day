import React from "react";
import styled from "styled-components";

const Photographer = styled.h3 `
    margin-top: 10px;
    margin-bottom: 10px;
    `;

const Copyright = props => {
    return(
        <div className="copyright" keys={props.id}>
           <Photographer className="photographer">{props.copyright}
           </Photographer>
           
        </div>
    );
};

export default Copyright;