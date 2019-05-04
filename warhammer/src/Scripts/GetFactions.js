import React, {Component} from 'react';
import ReturnFactionImages from "../Data/FactionImages/FactionImages.js";

function GetFactionsImages() {
    var Factions = ReturnFactionImages();
    return Factions;
}

export default GetFactionsImages;