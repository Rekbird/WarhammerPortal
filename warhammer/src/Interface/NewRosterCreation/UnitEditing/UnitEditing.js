import React, {Component} from "react";
import { connect } from 'react-redux';

import "./UnitEditing.css";
import UnitProfile from "../UnitProfile/UnitProfile.js";
import UnitModelsList from "../UnitModels/UnitModels.js";
import WargearSelection from "../WargearSelection/WargearSelection.js";
import EditUnitPsychicPowers from "../UnitPsychicPowers/EditUnitPsychicPowers.js";
import AddNewModel from "../AddNewModel/AddNewModel.js";
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
        let AddNewModelComponent = (this.props.Unit.BaseUnit.MaxModelQuant > this.props.Unit.Models.length || !this.props.Unit.BaseUnit.MaxModelQuant) ? <AddNewModel/> : null;
        return (
            <div className = 'UnitEditing__Common'>
                <UnitProfile Unit = {this.props.Unit.BaseUnit} UnitSelection = {false}/>
                {EditUnitPsychicPowersComponent}
                <div className = 'UnitEditing__ModelsList'>
                    <UnitModelsList/>
                </div>
                <div className = 'UnitEditing__WargearSelection'>
                    {WargearSelectionComponent}
                </div >
                <div className = 'UnitEditing__AddNewModel'>
                    {AddNewModelComponent}
                </div >
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        ActiveModel: state.RosterEditing.ActiveModel,
        Unit: state.RosterEditing.ActiveUnit
    }
}

const containerUnitEditing = connect(
    mapStateToProps
  )(UnitEditing);

export default containerUnitEditing;