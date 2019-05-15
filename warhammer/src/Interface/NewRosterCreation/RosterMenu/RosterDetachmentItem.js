import React, {Component} from "react";
import * as utils from "../../../Scripts/CommonFunctions.js";
import RosterUnitRoleItem from "./RosterUnitRoleItem.js";
import EditButtonImage from "../../../Data/RosterMenuIcons/EditIcon.png";
import CopyButtonImage from "../../../Data/RosterMenuIcons/CopyIcon.png";
import DeleteButtonImage from "../../../Data/RosterMenuIcons/DeleteIcon.png";

class RosterDetachmentItem extends Component{
    constructor(props) {
        super(props);
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

    render = () => {
        let UnitRoles = [];
        let UnitList = [];
        let NewButton = <li onClick = {this.props.NewUnitClick}>+ New unit</li>
        if(this.props.RosterDetachment.RosterUnits && this.props.RosterDetachment.RosterUnits.length > 0) {
            UnitRoles = utils.GetDetachmentUnitsRoles(this.props.RosterDetachment.RosterUnits);
        }

        if(UnitRoles.length > 0) {
            UnitRoles = UnitRoles.map((role) => 
                <RosterUnitRoleItem key = {role.id} AllowedCopy = {utils.CheckDetachmentOptionFull(this.props.RosterDetachment.RosterUnits, role, this.props.RosterDetachment)} EditClick = {this.props.EditClick} CopyClick = {this.props.CopyClick} DeleteClick = {this.props.DeleteClick} RoleName = {role.Name}/>
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
                    {this.props.RosterDetachment.Detachment.Name}
                    <img onClick = {this.handleEditClick} src = {EditButtonImage}/>
                    <img onClick = {this.handleCopyClick} src = {CopyButtonImage}/>
                    <img onClick = {this.handleDeleteClick} src = {DeleteButtonImage}/>
                </div>
                <div>{UnitList}</div>
            </li>
        )
    }

}

export default RosterDetachmentItem;