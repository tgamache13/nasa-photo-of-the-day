import React from "react";

const Copyright = props => {
    return(
        <div className="copyright" keys={props.id}>
            {props.copyright}
        </div>
    );
};

export default Copyright;