import React from "react";

const Explanation = props => {
    return(
        <div className="explanation" keys={props.id}>
            {props.explanation}
        </div>
    );
};

export default Explanation;