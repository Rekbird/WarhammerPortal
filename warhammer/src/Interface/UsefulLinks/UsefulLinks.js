import React, {Component} from 'react';
import './UsefulLinks.css';
import UsefulLink from "./UsefulLink.js";
import GetUsefulLinks from "../../Scripts/GetUsefulLinks.js";

function UsefulLinks(props) {
    var LinksArray = GetUsefulLinks();
    /*
    var RenderedLinks = [];
    for(var i=0;i<LinksArray.length;i++) {
        var Link = LinksArray[i];
        var RenderedLink = <UsefulLink key={Link.id} LinkForRender = {Link} />;
        RenderedLinks.push(RenderedLink);
    }
    */
    LinksArray = LinksArray.map(Link => 
        <UsefulLink key={Link.id} LinkForRender = {Link} />
    );
    return (
        <div className = "UsefulLinksBody">
            {LinksArray}
        </div>
    );
    
}

export default UsefulLinks;