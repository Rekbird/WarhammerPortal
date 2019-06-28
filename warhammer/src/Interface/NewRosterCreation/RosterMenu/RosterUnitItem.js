import React, {Component} from "react";
import * as utils from "../../../Scripts/CommonFunctions.js";
import EditButtonImage from "../../../Data/RosterMenuIcons/EditIcon.png";
import CopyButtonImage from "../../../Data/RosterMenuIcons/CopyIcon.png";
import DeleteButtonImage from "../../../Data/RosterMenuIcons/DeleteIcon.png";
import "./RosterMenu.css";

class RosterUnitItem extends Component {
    constructor(props) {
        super(props)
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleCopyClick = this.handleCopyClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleEditClick() {
        this.props.EditClick(this.props.RosterUnit);
    }

    handleCopyClick() {
        this.props.CopyClick(this.props.Detachment, this.props.RosterUnit);
    }

    handleDeleteClick() {
        this.props.DeleteClick(this.props.Detachment, this.props.RosterUnit);
    }

    render() {
        let CopyButton = (!this.props.AllowedCopy) ? (
            <img className = "RosterMenu__ButtonImage" onClick = {this.handleCopyClick} src = {CopyButtonImage} alt = "Copy"/>
         ): null; 
        let ElementClass = (this.props.Active) ? "RosterMenu__UnitItem ActiveBrightning" : "RosterMenu__UnitItem"; 
        return(
            <li className = {ElementClass}>
                {this.props.RosterUnit.BaseUnit.Name}
                <div className = "RosterMenu__ButtonBlock">
                    <img className = "RosterMenu__ButtonImage" onClick = {this.handleEditClick} src = {EditButtonImage} alt = "Edit"/>
                    {CopyButton}
                    <img className = "RosterMenu__ButtonImage" onClick = {this.handleDeleteClick} src = {DeleteButtonImage} alt = "Delete"/>
                </div>
            </li>
        )
    }
}

export default RosterUnitItem;