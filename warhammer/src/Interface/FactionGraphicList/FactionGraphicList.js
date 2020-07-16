import React, {Component} from 'react';
import { connect } from 'react-redux';
import "./FactionButton.css";
import "./FactionGraphicList.css";
import FactionButton from "./FactionButton.js";
import * as utils from "../../Scripts/CommonFunctions.js";

class FactionGraphicList extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        let Factions = this.props.retrievedFactions.slice();
        Factions = Factions.map(
            (Faction)  => <FactionButton key = {Faction.id} buttonClick = {this.props.buttonClick} Faction = {Faction} />
        )
        return (
            <div className="FactionGraphciList__Div">
                {Factions}
            </div>
        )        
    }
}

const mapStateToProps = (state) => {
    return {
        retrievedFactions: state.retrievedFactions.Factions,
    }
}

const containerFactionGraphicList = connect(
    mapStateToProps
  )(FactionGraphicList);

export default containerFactionGraphicList;