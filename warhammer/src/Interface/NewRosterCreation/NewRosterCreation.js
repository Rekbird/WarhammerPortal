import React, {Component} from "react";
import * as utils from "../../Scripts/CommonFunctions.js";
import RosterMenu from "./RosterMenu/RosterMenu.js";
import DetachmentEditing from "./DetachmentEditing/DetachmentEditing.js";
import UnitSelection from "./UnitSelection/UnitSelection.js";
import UnitEditing from "./UnitEditing/UnitEditing.js";

class RosterCreation extends Component{
    constructor(props) {
        super(props)
        this.state = {
            Action: "Roster Editing",
            Roster: this.props.Roster
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
    }

    AddNewDetachment = () => {

    }

    EditDetachment = () => {
        
    }

    CopyDetachment = () => {
        
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
        return(
            <div>
            </div>
        )
    }
}

export default RosterCreation;