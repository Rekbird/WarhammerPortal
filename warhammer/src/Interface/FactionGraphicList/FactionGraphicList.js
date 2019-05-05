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
        let TableRows = [];
        while(Factions && Factions.length > 0) {
            let RowButtons = Factions.splice(0,5);
            RowButtons = RowButtons.map(
                (Button)  => <FactionButton Faction = {Button} />
            )
            TableRows.push(<tr>{RowButtons}</tr>)
        }
        return (
            <table className="FactionGraphciList__Table">
                <tbody>
                    {TableRows}
                </tbody>
            </table>
        )        
    }
}

export default FactionGraphicList;