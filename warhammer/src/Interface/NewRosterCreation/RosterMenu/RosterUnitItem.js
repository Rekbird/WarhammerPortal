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
        this.props.EditClick(this.props.RosterUnitId);
    }

    handleCopyClick() {
        this.props.CopyClick(this.props.Detachment, this.props.RosterUnitId);
    }

    handleDeleteClick() {
        this.props.DeleteClick(this.props.Detachment, this.props.RosterUnitId);
    }

    render() {
        return(
            <li>
                {this.props.RosterUnitName}
                <img className = "RosterMenu__ButtonImage" onClick = {this.handleEditClick} src = {EditButtonImage} alt = "Edit"/>
                <img className = "RosterMenu__ButtonImage" onClick = {this.handleCopyClick} src = {CopyButtonImage} alt = "Copy"/>
                <img className = "RosterMenu__ButtonImage" onClick = {this.handleDeleteClick} src = {DeleteButtonImage} alt = "Delete"/>
            </li>
        )
    }
}

export default RosterUnitItem;