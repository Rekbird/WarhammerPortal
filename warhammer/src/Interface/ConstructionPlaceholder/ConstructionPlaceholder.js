import React, {Component} from 'react';
import './ConstructionPlaceholder.css';

import ConstructionPicture from "../../Data/Pictures/under_construction.jpg";


function ConstructionPlaceholder(props) {
    return (
        //<div className = "ConstructionPicture" >
            <img src = {ConstructionPicture} className = "ConstructionPicture__Img" />
        //</div>
    );
          
}

export default ConstructionPlaceholder;