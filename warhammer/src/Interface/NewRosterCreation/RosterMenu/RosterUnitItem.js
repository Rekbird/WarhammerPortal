import React, {Component} from "react";
import * as utils from "../../../Scripts/CommonFunctions.js";
import EditButtonImage from "../../../Data/RosterMenuIcons/EditIcon.png";
import CopyButtonImage from "../../../Data/RosterMenuIcons/CopyIcon.png";
import DeleteButtonImage from "../../../Data/RosterMenuIcons/DeleteIcon.png";

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
        this.props.CopyClick(this.props.RosterUnitId);
    }

    handleDeleteClick() {
        this.props.DeleteClick(this.props.RosterUnitId);
    }

    render() {
        return(
            <li>
                {this.props.RosterUnitName}
                <img onClick = {this.handleEditClick} src = {EditButtonImage}/>
                <img onClick = {this.handleCopyClick} src = {CopyButtonImage}/>
                <img onClick = {this.handleDeleteClick} src = {DeleteButtonImage}/>
            </li>
        )
    }
}

export default RosterUnitItem;