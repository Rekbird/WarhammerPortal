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
        let NewButton = (this.props.RosterDetachment.Faction && this.props.RosterDetachment.Detachment) ? (<li className = "RosterMenu__UnitListNewButton" onClick = {this.NewUnitClick}>+ New unit</li>) : null;
        if(this.props.RosterDetachment.RosterUnits && this.props.RosterDetachment.RosterUnits.length > 0) {
            UnitRoles = utils.GetDetachmentUnitsRoles(this.props.RosterDetachment.RosterUnits);
            if(UnitRoles && UnitRoles.length > 0){
                console.log("Количество ролей "+UnitRoles.length);
            } else {
                console.log("Роли пусты");
            }
        }

        if(UnitRoles.length > 0) {
            UnitRoles = UnitRoles.map((role) => 
                <RosterUnitRoleItem 
                    key = {role.id} 
                    ActiveDetach = {this.props.Active}
                    ActiveUnitId = {this.props.ActiveUnitId}
                    AllowedCopy = {utils.CheckDetachmentOptionFull(this.props.RosterDetachment.RosterUnits, role, this.props.RosterDetachment.Detachment)} 
                    EditClick = {this.props.EditClick} CopyClick = {this.props.CopyClick} DeleteClick = {this.props.DeleteClick} RoleName = {role.Name} 
                    Detachment = {this.props.RosterDetachment} Units = {utils.GetRosterUnitsByRole(this.props.RosterDetachment.RosterUnits, role.id)}
                />
            );
        }
        UnitList = 
        <ul className = "RosterMenu__DetachmentRolesList">
            {UnitRoles}
            {NewButton}
        </ul>;
        const ElementClass = (this.props.Active) ? "RosterMenu__DetachmentListItem ActiveBrightning" : "RosterMenu__DetachmentListItem"; 
        return(
            <li>
                <div className = {ElementClass}>
                    {"["+this.props.RosterDetachment.TotalDetachCost+"] "+((!!this.props.RosterDetachment.Detachment) ? this.props.RosterDetachment.Detachment.Name : "New Detachment")}
                    <div className = "RosterMenu__ButtonBlock">
                        <img className = "RosterMenu__ButtonImage" onClick = {this.handleEditClick} src = {EditButtonImage} alt = "Edit"/>
                        <img className = "RosterMenu__ButtonImage" onClick = {this.handleCopyClick} src = {CopyButtonImage} alt = "Copy"/>
                        <img className = "RosterMenu__ButtonImage" onClick = {this.handleDeleteClick} src = {DeleteButtonImage} alt = "Delete"/>
                    </div>
                </div>
                {UnitList}
            </li>
        )
    }

}

export default RosterDetachmentItem;