import React from "react";

const PhotoContainer = props => {
    return(
        <div className="photo-container" key={props.id}  >

          <div>
              <img className="photo-of-the-day" alt="nasa photo" src={props.imgUrl} /> </div>   

        </div>
    );
};

export default PhotoContainer;