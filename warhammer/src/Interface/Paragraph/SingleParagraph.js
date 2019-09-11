import React, {Component} from 'react';
import "./Paragraph.css";

function SingleParagraph(props) {
    return(
    <div className = "SingleParagraph">
        <h3>{props.Paragraph.header}</h3>
        <p className = "CommonParagraph">{props.Paragraph.body}</p>
    </div>
    )
}

export default SingleParagraph;