import React, {Component} from "react";
import { connect } from 'react-redux';

import * as ActionCreators from "../../../Store/ActionsCreators.js";
import "./UnitSelection.css";
import UnitsList from "../UnitsList/UnitsList.js";
import UnitRolesList from "../UnitRolesList/UnitRolesList.js";
import {RosterUnit} from "../../../Classes/CommonClasses.js";
import {Unit} from "../../../Classes/CommonClasses.js";
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
       let NewId = 1;
       this.props.Roster.RosterDetachments.forEach((element) => {
           if(!!element.RosterUnits) {
                NewId = NewId+element.RosterUnits.length;
           }
       });
       const ReturnedBaseUnit = new Unit(
           BaseUnit.id,
           BaseUnit.Name,
           BaseUnit.Description,
           BaseUnit.MaxModelQuantity,
           BaseUnit.KnowsSmite,
           BaseUnit.Named,
           BaseUnit.UnitRole.id,
           false,
           BaseUnit.ForeignLink,
           BaseUnit.Faction.id
           );
       this.props.AddNewUnit(this.props.Detachment.id, NewId, BaseUnit);
       this.props.RosterAction("Unit Editing");
        //this.props.AddNewUnit(this.props.Detachment, BaseUnit)
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

const mapStateToProps = (state) => {
    return {
        Detachment: state.RosterEditing.ActiveDetachment,
        Faction: state.RosterEditing.ActiveDetachment.Faction,
        Roster: state.RosterEditing.Roster
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddNewUnit: (DetachmentId, NewId, BaseUnit) => dispatch(ActionCreators.AddNewUnit(DetachmentId, NewId, BaseUnit)),
        RosterAction: (ActionNAme) => dispatch(ActionCreators.RosterAction(ActionNAme))
    }
}

const containerUnitSelection = connect(
    mapStateToProps,
    mapDispatchToProps
)(UnitSelection);

export default containerUnitSelection;
