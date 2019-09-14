import React, {Component} from 'react';
import './UsefulLinks.css';


function UsefulLink(props) {
    return (
            <a className = "link" target="_blank" href = {props.LinkForRender.link}>
                <img className = "image" src={props.LinkForRender.logo} />
            </a>
       
    );
          
}

export default UsefulLink;