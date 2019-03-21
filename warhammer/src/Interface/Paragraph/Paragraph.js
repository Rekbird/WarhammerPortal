import React, {Component} from 'react';
import SingleParagraph from "./SingleParagraph.js";
import GetParagraphs from '../../Scripts/GetParagraphs.js';

function Paragraph(props) {
    var Paragraphs = GetParagraphs(props.section);
    if(!!Paragraphs && Paragraphs.length > 0) {
        var RenderedParagraphs = Paragraphs.map(
            (paragraph) => 
            <SingleParagraph key = {paragraph.id} Paragraph = {paragraph} />
        );
        
        return (
            <div>{RenderedParagraphs}</div>
            
        )
    } else {
        return (
            <h2>{props.section}</h2>
        )
    }
}

export default Paragraph;