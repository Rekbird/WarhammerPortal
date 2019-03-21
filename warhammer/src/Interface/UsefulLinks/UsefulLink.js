import React, {Component} from 'react';
import './UsefulLinks.css';


function UsefulLink(props) {
    return (
            <a className = "link" target="_blank" href = {props.LinkForRender.link}>
                <p className = "image_center"><img className = "image" src={props.LinkForRender.logo} /></p>
            </a>
       
    );
          
}

export default UsefulLink;