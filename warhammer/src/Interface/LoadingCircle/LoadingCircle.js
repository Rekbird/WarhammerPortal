import React, {Component} from "react";
import LoadingGif from "../../Data/Gif/LoadingCircle.gif";
import "./LoadingCircle.css";

function LoadingCircle(props) {
    return <div className = "LoadingCircle__ParentDiv">
            <div className = "LoadingCircle__Div">
                <img src = {LoadingGif} className = "LoadingCircle__Gif"/>
                <span className = "LoadingCircle__Text">Please wait, loading data...</span>
            </div>
    </div>;
}

export default LoadingCircle;