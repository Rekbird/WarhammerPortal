import React, {Component} from 'react';
import ReturnFactionImages from "../Data/FactionImages/FactionImages.js";

function GetFactions() {
    var Factions = ReturnFactionImages();
    return Factions;
}

export default GetFactions;