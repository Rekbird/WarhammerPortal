import React, {Component} from 'react';
import "./FactionButton.css";
import "./FactionGraphicList.css";
import GetFactions from "../../Scripts/GetFactions.js";
import FactionButton from "./FactionButton.js";

class FactionGraphicList extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        var Factions = GetFactions();
        return (
            <table className="FactionGraphciList__Table">
                <tbody>
                <tr>
                    <FactionButton Faction = {Factions[0]} />
                    <FactionButton Faction = {Factions[1]} />
                    <FactionButton Faction = {Factions[2]} />
                    <FactionButton Faction = {Factions[3]} />
                    <FactionButton Faction = {Factions[4]} />
                </tr>
                <tr>
                    <FactionButton Faction = {Factions[5]} />
                    <FactionButton Faction = {Factions[6]} />
                    <FactionButton Faction = {Factions[7]} />
                    <FactionButton Faction = {Factions[8]} />
                    <FactionButton Faction = {Factions[9]} />
                </tr>
                <tr>
                    <FactionButton Faction = {Factions[10]} />
                    <FactionButton Faction = {Factions[11]} />
                    <FactionButton Faction = {Factions[12]} />
                    <FactionButton Faction = {Factions[13]} />
                    <FactionButton Faction = {Factions[14]} />
                </tr>
                <tr>
                    <FactionButton Faction = {Factions[15]} />
                    <FactionButton Faction = {Factions[16]} />
                    <FactionButton Faction = {Factions[17]} />
                    <FactionButton Faction = {Factions[18]} />
                    <FactionButton Faction = {Factions[19]} />
                </tr>
                <tr>
                    <FactionButton Faction = {Factions[20]} />
                    <FactionButton Faction = {Factions[21]} />
                    <FactionButton Faction = {Factions[22]} />
                    <FactionButton Faction = {Factions[23]} />
                    <FactionButton Faction = {Factions[24]} />
                </tr>
                <tr>
                    <FactionButton Faction = {Factions[25]} />
                    <FactionButton Faction = {Factions[26]} />
                    <FactionButton Faction = {Factions[27]} />
                    <FactionButton Faction = {Factions[28]} />
                    <FactionButton Faction = {Factions[29]} />
                </tr>
                <tr>
                    <FactionButton Faction = {Factions[30]} />
                    <FactionButton Faction = {Factions[31]} />
                    <FactionButton Faction = {Factions[32]} />
                    <FactionButton Faction = {Factions[33]} />
                    <FactionButton Faction = {Factions[34]} />
                </tr>
                <tr>
                    <FactionButton Faction = {Factions[35]} />
                    <FactionButton Faction = {Factions[36]} />
                </tr>
                </tbody>
            </table>
        )        
    }
}

export default FactionGraphicList;