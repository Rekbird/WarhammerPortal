import React, {Component} from "react";
import * as utils from "../../Scripts/CommonFunctions.js";
import RosterMenu from "./RosterMenu/RosterMenu.js";
import DetachmentEditing from "./DetachmentEditing/DetachmentEditing.js";
import UnitSelection from "./UnitSelection/UnitSelection.js";
import UnitEditing from "./UnitEditing/UnitEditing.js";
import {RosterDetachment} from "../../Classes/CommonClasses.js";
import {RosterUnit} from "../../Classes/CommonClasses.js";
import {Roster} from "../../Classes/CommonClasses.js";
import "./NewRosterCreation.css";

class RosterCreation extends Component{
    constructor(props) {
        super(props)
        this.state = {
            Action: "Roster Editing",
            Roster: this.props.Roster,
            ActiveDetachment: null,
            ActiveUnit: null
        };
        this.AddNewDetachment = this.AddNewDetachment.bind(this);
        this.EditDetachment = this.EditDetachment.bind(this);
        this.CopyDetachment = this.CopyDetachment.bind(this);
        this.DeleteDetachment = this.DeleteDetachment.bind(this);
        this.AddNewUnit = this.AddNewUnit.bind(this);
        this.EditUnit = this.EditUnit.bind(this);
        this.CopyUnit = this.CopyUnit.bind(this);
        this.DeleteUnit = this.DeleteUnit.bind(this);
        this.EditRoster = this.EditRoster.bind(this);
        this.showUnitSelectionList = this.showUnitSelectionList.bind(this);
        this.handleRosterChange = this.handleRosterChange.bind(this);
    }

    handleRosterChange = () => {
        this.setState({
            Roster: this.state.Roster
        })
    }

    AddNewDetachment = () => {
        let Roster = this.state.Roster;
        this.state.Action = null;
        let NewId = (!!Roster.RosterDetachments && Roster.RosterDetachments.length > 0) ? (Roster.RosterDetachments.length+1) : 1;
        let NewDetachment = new RosterDetachment(NewId,[],null,null,null,Roster.id,null,null);
        Roster.RosterDetachments.push(NewDetachment);
        this.setState({
            Action: "Detachment Editing",
            Roster: Roster,
            ActiveDetachment: NewDetachment
        })
    }

    EditDetachment = (Detachment) => {
        let Roster = this.state.Roster;
        this.state.Action = null;
        this.setState({
            Action: "Detachment Editing",
            Roster: Roster,
            ActiveDetachment: Detachment
        });
    }

    CopyDetachment = (Detachment) => {
        let Roster = this.state.Roster;
        let NewId = (!!Roster.RosterDetachments && Roster.RosterDetachments.length > 0) ? (Roster.RosterDetachments.length+1) : 1;
        let NewDetachment = Detachment.copyRosterDetachment();
        NewDetachment.id = NewId;
        Roster.RosterDetachments.push(NewDetachment);
        this.setState({
            Action: "Detachment Editing",
            Roster: Roster,
            ActiveDetachment: NewDetachment
        });
    }

    DeleteDetachment = (Detachment) => {
        let Roster = this.state.Roster;
        Roster.RosterDetachments.splice(Roster.RosterDetachments.indexOf(Detachment), 1);
        this.setState({
            Roster: Roster
        });
    }

    AddNewUnit = (Detachment, Unit) => {
        this.setState({
            Roster: this.state.Roster,
            Action: "Unit Editing",
            ActiveDetachment: Detachment,
            ActiveUnit: Unit
        });
    }

    EditUnit = (Unit) => {
        this.setState({
            Roster: this.state.Roster,
            Action: "Unit Editing",
            ActiveUnit: Unit
        });
    }

    CopyUnit = (Detachment, Unit) => {
        let UnitCopy = Unit.copyRosterUnit();
        Detachment.RosterUnits.push(UnitCopy);
        UnitCopy.id = Detachment.RosterUnits.length;
        this.setState({
            Roster: this.state.Roster
        });
    }

    DeleteUnit = (Detachment, Unit) => {
        Detachment.RosterUnits.splice(Detachment.RosterUnits.indexOf(Unit), 1);
        this.setState({
            Roster: this.state.Roster
        });
    }

    EditRoster = () => {
        this.setState({
            Roster: this.state.Roster,
            Action: "Roster Editing"
        });
    }

    showUnitSelectionList = (Detachment) => {
        console.log("объект детачмента "+Detachment);
        console.log("фракция детачмента "+Detachment.Faction);
        console.log("равенство детачей "+Detachment.id);
        this.setState({
            Action: "Unit Selection",
            ActiveDetachment: Detachment
        });
    }

    render = () => {
        let WorkingArea;
        switch(this.state.Action) {
            case "Roster Editing": 
                WorkingArea = <div>Here will be roster editing</div>;
            break;

            case "Detachment Editing": 
                WorkingArea = <DetachmentEditing handleRosterChange = {this.handleRosterChange} RosterDetachment = {this.state.ActiveDetachment}/>;
            break;

            case "Unit Selection": 
                WorkingArea = <UnitSelection Faction = {this.state.ActiveDetachment.Faction} Detachment = {this.state.ActiveDetachment}/>;
            break;

            case "Unit Editing": 
                WorkingArea = <UnitEditing Unit = {null}/>;
            break;
        }
        return(
            <div>
                <RosterMenu 
                    Roster = {this.state.Roster}
                    NewDetachmentClick = {this.AddNewDetachment}
                    EditDetachmentClick = {this.EditDetachment}
                    CopyDetachmentClick = {this.CopyDetachment}
                    DeleteDetachmentClick  = {this.DeleteDetachment}
                    EditClick = {this.EditUnit} 
                    CopyClick = {this.CopyUnit} 
                    DeleteClick = {this.DeleteUnit} 
                    NewUnitClick = {this.showUnitSelectionList}
                    EditRosterClick = {this.EditRoster}
                />
                <div className = "RosterEditing_WorkingArea">{WorkingArea}</div>
            </div>
        )
    }
}

export default RosterCreation;