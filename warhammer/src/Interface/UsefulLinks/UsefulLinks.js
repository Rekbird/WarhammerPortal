import React, {Component} from 'react';
import './UsefulLinks.css';
import UsefulLink from "./UsefulLink.js";
import GetUsefulLinks from "../../Scripts/GetUsefulLinks.js";

function UsefulLinks(props) {
    var LinksArray = GetUsefulLinks();
    var RenderedLinks = [];
    for(var i=0;i<LinksArray.length;i++) {
        var Link = LinksArray[i];
        var RenderedLink = <UsefulLink key={Link.id} LinkForRender = {Link} />;
        RenderedLinks.push(RenderedLink);
    }
    return (
        <div className = "UsefulLinksBody">
            {RenderedLinks}
        </div>
    );
    
}

export default UsefulLinks;