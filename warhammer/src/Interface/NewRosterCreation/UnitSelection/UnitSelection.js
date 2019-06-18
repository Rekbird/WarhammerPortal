import React, {Component} from "react";
import "./UnitSelection.css";
import UnitsList from "../UnitsList/UnitsList.js";
import UnitRolesList from "../UnitRolesList/UnitRolesList.js";
import {RosterUnit} from "../../../Classes/CommonClasses.js";
import * as utils from "../../../Scripts/CommonFunctions.js";

class UnitSelection extends Component {
    constructor(props) {
        super(props);
        this.ScrollToUnitsByRole = this.ScrollToUnitsByRole.bind(this);
        this.handleUnitSelection = this.handleUnitSelection.bind(this);
    }

    ScrollToUnitsByRole = (name) => {
        var theElement = document.getElementById("UnitListByRole"+name);
        theElement.scrollIntoView({behavior: "smooth"});
    }

    handleUnitSelection = (BaseUnit) => {
        /*
        let NewUnit = new RosterUnit(
            null,
            [],
            BaseUnit,
            [],
            null,
            this.props.Detachment.id
        );
        NewUnit.Models = utils.GetRosterUnitModels(NewUnit);
        */
        this.props.AddNewUnit(this.props.Detachment, BaseUnit)
    }

    render() {
        return (
            <div>
                <div className = "UnitSelection__SelectionArea">
                    <div className = "UnitSelection__UnitList">
                        <h1 className = "UnitSelection__Header">Select a unit</h1>
                        <UnitsList Faction = {this.props.Faction} handleUnitSelection = {this.handleUnitSelection} Detachment = {this.props.Detachment}/>
                    </div>
                    <div className = "UnitSelection__RolesList"><UnitRolesList FactionId = {this.props.Faction.id} ScrollToUnitsByRole = {this.ScrollToUnitsByRole}/></div>
                </div>
            </div>
        )
    }
}

export default UnitSelection;
