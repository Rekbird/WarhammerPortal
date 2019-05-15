import React, {Component} from "react";
import * as utils from "../../Scripts/CommonFunctions.js";
import RosterMenu from "./RosterMenu/RosterMenu.js";
import DetachmentEditing from "./DetachmentEditing/DetachmentEditing.js";
import UnitSelection from "./UnitSelection/UnitSelection.js";
import UnitEditing from "./UnitEditing/UnitEditing.js";
import {RosterDetachment} from "../../Classes/CommonClasses.js";
import {RosterUnit} from "../../Classes/CommonClasses.js";

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
    }

    AddNewDetachment = () => {
        let Roster = this.state.Roster;
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
        this.setState({
            Action: "Detachment Editing",
            Roster: Roster,
            ActiveDetachment: Detachment
        })
    }

    CopyDetachment = (Detachment) => {
        let Roster = this.state.Roster;
        let NewId = (!!Roster.RosterDetachments && Roster.RosterDetachments.length > 0) ? (Roster.RosterDetachments.length+1) : 1;
        let NewDetachment = new RosterDetachment(NewId,Detachment.[],Detachment.null,null,null,Roster.id,null,null);
        Roster.RosterDetachments.push(NewDetachment);
        this.setState({
            Action: "Detachment Editing",
            Roster: Roster,
            ActiveDetachment: NewDetachment
        })
    }

    DeleteDetachment = () => {
        
    }

    AddNewUnit = () => {
        
    }

    EditUnit = () => {
        
    }

    CopyUnit = () => {
        
    }

    DeleteUnit = () => {
        
    }

    EditRoster = () => {

    }

    showUnitSelectionList = () => {

    }

    render = () => {
        let WorkingArea;
        switch(this.state.Action) {
            case "Roster Editing": 
                WorkingArea = <div>Here will be roster editing</div>;
            break;

            case "Detachment Editing": 
                WorkingArea = <DetachmentEditing RosterDetachment = {this.state.ActiveDetachment}/>;
            break;

            case "Unit Selection": 
                WorkingArea = <UnitSelection />;
            break;

            case "Unit Editing": 
                WorkingArea = <UnitEditing Unit = {null}/>;
            break;
        }
        return(
            <div>
                <RosterMenu 
                    Roster = {this.state.Roster}
                    EditDetachmentClick = {this.EditDetachment}
                    CopyDetachmentClick = {this.CopyDetachment}
                    DeleteDetachmentClick  = {this.DeleteDetachment}
                />
                {WorkingArea}
            </div>
        )
    }
}

export default RosterCreation;