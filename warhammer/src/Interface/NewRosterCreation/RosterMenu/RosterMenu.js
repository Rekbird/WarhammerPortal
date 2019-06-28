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
        let MaxPTS = (this.props.Roster.MaxPTS) ? (<text>/{this.props.Roster.MaxPTS}</text>) : null;
        let MaxPL = (this.props.Roster.MaxPL) ? (<text>/{this.props.Roster.MaxPL}</text>) : null;
        let NewButton = <li className = "RosterMenu__DetachmentListNewButton" onClick = {this.handleNewClick}>+ New Detachment</li>
        if(!!this.props.Roster.RosterDetachments && this.props.Roster.RosterDetachments.length > 0) {
            Detachments = this.props.Roster.RosterDetachments.map((detachment) => 
                <RosterDetachmentItem 
                    key = {detachment.id} 
                    RosterDetachment = {detachment}
                    Active = {detachment.id == this.props.ActiveDetachmentId} 
                    ActiveUnitId = {this.props.ActiveUnitId}
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
                        <text>Total PTS&nbsp;: {this.props.Roster.TotalPTS}</text>{MaxPTS}<br/>
                        <text>Total PL&nbsp;&nbsp;&nbsp;: {this.props.Roster.TotalPL}</text>{MaxPL}<br/>
                        <text>Total CP&nbsp;&nbsp;&nbsp;: {this.props.Roster.TotalCP}</text><br/>
                    </p>
                </div>
                {DetachmentsList}
            </div>
        )
    }
}

export default RosterMenu;