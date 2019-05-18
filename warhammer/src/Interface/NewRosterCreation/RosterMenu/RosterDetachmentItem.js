import React, {Component} from "react";
import * as utils from "../../../Scripts/CommonFunctions.js";
import RosterUnitRoleItem from "./RosterUnitRoleItem.js";
import EditButtonImage from "../../../Data/RosterMenuIcons/EditIcon.png";
import CopyButtonImage from "../../../Data/RosterMenuIcons/CopyIcon.png";
import DeleteButtonImage from "../../../Data/RosterMenuIcons/DeleteIcon.png";

class RosterDetachmentItem extends Component{
    constructor(props) {
        super(props);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleCopyClick = this.handleCopyClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.NewUnitClick = this.NewUnitClick.bind(this);
    }

    handleEditClick = () => {
        this.props.EditDetachmentClick(this.props.RosterDetachment);
    }

    handleCopyClick = () => {
        this.props.CopyDetachmentClick(this.props.RosterDetachment);
    }

    handleDeleteClick = () => {
        this.props.DeleteDetachmentClick(this.props.RosterDetachment);
    }

    NewUnitClick = () => {
        console.log("Детач компонента "+this.props.RosterDetachment.id);
        this.props.NewUnitClick(this.props.RosterDetachment);
    }

    render = () => {
        let UnitRoles = [];
        let UnitList = [];
        let NewButton = <li onClick = {this.NewUnitClick}>+ New unit</li>
        if(this.props.RosterDetachment.RosterUnits && this.props.RosterDetachment.RosterUnits.length > 0) {
            UnitRoles = utils.GetDetachmentUnitsRoles(this.props.RosterDetachment.RosterUnits);
        }

        if(UnitRoles.length > 0) {
            UnitRoles = UnitRoles.map((role) => 
                <RosterUnitRoleItem key = {role.id} AllowedCopy = {utils.CheckDetachmentOptionFull(this.props.RosterDetachment.RosterUnits, role, this.props.RosterDetachment)} EditClick = {this.props.EditClick} CopyClick = {this.props.CopyClick} DeleteClick = {this.props.DeleteClick} RoleName = {role.Name} Detachment = {this.props.RosterDetachment}/>
            );
        }
        UnitList = 
        <ul>
            {UnitRoles}
            {NewButton}
        </ul>
        return(
            <li>
                <div>
                    {(!!this.props.RosterDetachment.Detachment) ? this.props.RosterDetachment.Detachment.Name : "New Detachment"}
                    <img className = "RosterMenu__ButtonImage" onClick = {this.handleEditClick} src = {EditButtonImage} alt = "Edit"/>
                    <img className = "RosterMenu__ButtonImage" onClick = {this.handleCopyClick} src = {CopyButtonImage} alt = "Copy"/>
                    <img className = "RosterMenu__ButtonImage" onClick = {this.handleDeleteClick} src = {DeleteButtonImage} alt = "Delete"/>
                </div>
                <div>{UnitList}</div>
            </li>
        )
    }

}

export default RosterDetachmentItem;