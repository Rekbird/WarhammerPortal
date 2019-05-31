import React, {Component} from "react";
import "./UnitEditing.css";
import UnitProfile from "../UnitProfile/UnitProfile.js";

import UnitModelsList from "../UnitModels/UnitModels.js";
import WargearElement from "../WargearSelection/WargearElement/WargearElement.js";

import EditUnitPsychicPowers from "../UnitPsychicPowers/EditUnitPsychicPowers.js";
import GetPsychicPowers from "../../../Scripts/GetPsychicPowers.js";


class UnitEditing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let EditUnitPsychicPowers = (this.props.Unit.BaseUnit.KnowsSmite || this.props.Unit.BaseUnit.AvailableSpells > 0) ? (
            <EditUnitPsychicPowers AvailableSpells = {this.props.Unit.BaseUnit.AvailableSpells} SelectedSpells = {this.props.Unit.SelectedSpells} MaxSpells = {this.props.Unit.BaseUnit.NumberOfSpells} KnowsSmite = {this.props.Unit.BaseUnit.KnowsSmite}/>
        ) : null;
        return (
            <div>
                <UnitProfile Unit = {this.props.Unit.BaseUnit} UnitSelection = {false}/>
                {EditUnitPsychicPowers}
                <UnitModelsList Models = {this.props.Unit.Models}/>
                <WargearElement/>
            </div>
        )
    }

}

export default UnitEditing;