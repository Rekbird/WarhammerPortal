import React, {Component} from 'react';
import "./FactionButton.css";
import "./FactionGraphicList.css";
import FactionButton from "./FactionButton.js";
import * as utils from "../../Scripts/CommonFunctions.js";

class FactionGraphicList extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        var Factions = utils.GetFactions();
        let TableRows = [];
        let RowsCount = 0;
        while(Factions && Factions.length > 0) {
            let RowButtons = Factions.splice(0,4);
            RowButtons = RowButtons.map(
                (Button)  => <FactionButton key = {Button.id} buttonClick = {this.props.buttonClick} Faction = {Button} />
            )
            RowsCount++;
            TableRows.push(<tr key = {RowsCount}>{RowButtons}</tr>)
        }
        return (
            <div className="FactionGraphciList__Div">
                <table className="FactionGraphciList__Table">
                    <tbody>
                        {TableRows}
                    </tbody>
                </table>
            </div>
        )        
    }
}

export default FactionGraphicList;