import React from "react";
import styled from "styled-components";

const ExplanationStyle = styled.div `
    width: 100%;
    display: flex;
    justify-content:center;
    font-family: Verdana;
    margin-top: 5px;
    `;

const ParagraphStlye = styled.div `
    width: 75%`;

const Explanation = props => {
    return(
     <ExplanationStyle  className="explanation-container">  
        
        <ParagraphStlye className="explanation" keys={props.id}>
                 {props.explanation}
        
        </ParagraphStlye>
        </ExplanationStyle>
    );
};

export default Explanation;