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
        var Spells = GetPsychicPowers();
        return (
            <div>
                <UnitProfile Unit = {this.props.Unit} UnitSelection = {false}/>
                <EditUnitPsychicPowers AvailableSpells = {Spells} SelectedSpells = {[]} MaxSpells = {3} KnowsSmite = {true}/>
                <UnitModelsList/>
                <WargearElement/>

                

            </div>
        )
    }

}

export default UnitEditing;