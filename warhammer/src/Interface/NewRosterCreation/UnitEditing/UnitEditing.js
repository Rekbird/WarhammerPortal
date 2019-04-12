import React, {Component} from "react";
import "./UnitEditing.css";
import UnitProfile from "../UnitProfile/UnitProfile.js";
import EditUnitPsychicPowers from "../UnitPsychicPowers/EditUnitPsychicPowers.js";
import GetPsychicPowers from "../../../Scripts/GetPsychicPowers.js";

class UnitEditing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var Spells = GetPsychicPowers();
        return (
            <div>
                <UnitProfile Unit = {this.props.Unit} UnitSelection = {false}/>
                <EditUnitPsychicPowers AvailableSpells = {Spells} SelectedSpells = {[]}/>
            </div>
        )
    }

}

export default UnitEditing;