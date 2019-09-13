import React, { useState, useEffect} from "react";
import axios from "axios";
import PhotoContainer from "./photoContainer";
import Title from "./title";
import Explanation from "./explanation";
import Copyright from "./copyright";


export default function PhotoNasa () {

    const[info, setInfo] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=y03PFptQCAVy8b4mcS58aVeGZqrljc114DRxvtmo`)
        .then(response => {
             const info = response.data;
            console.log(" nasa photo info ", info);
            setInfo(info);
        })
        .catch(error => {
            console.log ("The data was not returned", error);
        });
    },[]);

    return (
        <div className="container-div">
            <Title title={info.title}
                    date={info.date} />
          <PhotoContainer 
                imgUrl={info.url}/>
            <Copyright copyright={info.copyright}/>
            <Explanation explanation={info.explanation}/>
        </div>
    );
}