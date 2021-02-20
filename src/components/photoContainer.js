import React from "react";
import styled from "styled-components";

const PhotoOfDay = styled.img `
width: 75%;
`;

const PhotoContainer = props => {
    return(
        <div className="photo-container" key={props.id}  >
            
          <div>
              
                  <PhotoOfDay className="photo-of-the-day" alt="nasa photo" src={props.imgUrl} />
        
               </div>   

        </div>
    );
};

export default PhotoContainer;