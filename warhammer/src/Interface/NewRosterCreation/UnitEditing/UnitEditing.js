import React, {Component} from "react";
import { connect } from 'react-redux';

import "./UnitEditing.css";
import UnitProfile from "../UnitProfile/UnitProfile.js";
import UnitModelsList from "../UnitModels/UnitModels.js";
import WargearSelection from "../WargearSelection/WargearSelection.js";
import EditUnitPsychicPowers from "../UnitPsychicPowers/EditUnitPsychicPowers.js";
//import GetPsychicPowers from "../../../Scripts/GetPsychicPowers.js";

class UnitEditing extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let EditUnitPsychicPowersComponent = (this.props.Unit.BaseUnit.KnowsSmite || this.props.Unit.BaseUnit.AvailableSpells > 0) ? (
            <EditUnitPsychicPowers AvailableSpells = {this.props.Unit.BaseUnit.AvailableSpells} SelectedSpells = {this.props.Unit.SelectedSpells} MaxSpells = {this.props.Unit.BaseUnit.NumberOfSpells} KnowsSmite = {this.props.Unit.BaseUnit.KnowsSmite}/>
        ) : null;
        let WargearSelectionComponent = (this.props.ActiveModel) ? <WargearSelection/> : null;
        return (
            <div>
                <UnitProfile Unit = {this.props.Unit.BaseUnit} UnitSelection = {false}/>
                {EditUnitPsychicPowersComponent}
                <UnitModelsList/>
                {WargearSelectionComponent}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        ActiveModel: state.RosterEditing.ActiveModel
    }
}

const containerUnitEditing = connect(
    mapStateToProps
  )(UnitEditing);

export default containerUnitEditing;