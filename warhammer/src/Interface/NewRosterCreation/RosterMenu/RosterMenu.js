import React, {Component} from "react";
import * as utils from "../../../Scripts/CommonFunctions.js";
import RosterDetachmentItem from "./RosterDetachmentItem.js";
import EditButtonImage from "../../../Data/RosterMenuIcons/EditIcon.png";
import "./RosterMenu.css";

class RosterMenu extends Component{
    constructor(props) {
        super(props);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleNewClick = this.handleNewClick.bind(this);
    }

    handleEditClick = () => {
        this.props.EditRosterClick();
    }

    handleNewClick = () => {
        this.props.NewDetachmentClick();
    }

    render = () => {
        let DetachmentsList;
        let Detachments = [];
        let NewButton = <li className = "RosterMenu__DetachmentListNewButton" onClick = {this.handleNewClick}>+ New Detachment</li>
        if(!!this.props.Roster.RosterDetachments && this.props.Roster.RosterDetachments.length > 0) {
            Detachments = this.props.Roster.RosterDetachments.map((detachment) => 
                <RosterDetachmentItem 
                    key = {detachment.id} 
                    RosterDetachment = {detachment} 
                    EditClick = {this.props.EditClick} 
                    CopyClick = {this.props.CopyClick} 
                    DeleteClick = {this.props.DeleteClick} 
                    NewUnitClick = {this.props.NewUnitClick}
                    EditDetachmentClick = {this.props.EditDetachmentClick}
                    CopyDetachmentClick = {this.props.CopyDetachmentClick}
                    DeleteDetachmentClick = {this.props.DeleteDetachmentClick}
                />
            );
        }
        DetachmentsList = 
            <ul className = "RosterMenu__DetachmentList">
                {Detachments}
                {NewButton}
            </ul>
        return (
            <div className = "RosterMenu">
                <div className = "RosterMenu__HeaderDiv">
                    <div className = "RosterMenu__HeaderNameDiv">
                        <text className = "RosterMenu__HeaderName">{this.props.Roster.Name}</text>
                        <img className = "RosterMenu__ButtonImage" onClick = {this.handleEditClick} src = {EditButtonImage} alt = "Edit"/>
                    </div>
                    <p>
                        Total PTS&nbsp;: {this.props.Roster.TotalPTS}<br/>
                        Total PL&nbsp;&nbsp;&nbsp;: {this.props.Roster.TotalPL}<br/>
                        Total CP&nbsp;&nbsp;&nbsp;: {this.props.Roster.TotalCP}<br/>
                    </p>
                </div>
                {DetachmentsList}
            </div>
        )
    }
}

export default RosterMenu;