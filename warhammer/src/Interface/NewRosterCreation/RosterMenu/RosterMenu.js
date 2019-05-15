import React, {Component} from "react";
import * as utils from "../../../Scripts/CommonFunctions.js";
import RosterDetachmentItem from "./RosterDetachmentItem.js";
import EditButtonImage from "../../../Data/RosterMenuIcons/EditIcon.png";

class RosterMenu extends Component{
    constructor(props) {
        super(props);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleNewClick = this.handleNewClick.bind(this);
    }

    handleEditClick() {
        this.props.EditRosterClick();
    }

    handleNewClick() {
        this.props.NewDetachmentClick();
    }

    render = () => {
        let DetachmentsList;
        let Detachments = [];
        let NewButton = <li onClick = {this.handleNewClick}>+ New Detachment</li>
        if(!!this.props.Roster.RosterDetachments && this.props.Roster.RosterDetachments.length > 0) {
            Detachments = this.props.Roster.RosterDetachments.map((detachment) => 
                <RosterDetachmentItem 
                    key = {detachment.id} 
                    RosterDetachment = {this.props.Roster} 
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
            <ul>
                {Detachments}
                {NewButton}
            </ul>
        return (
            <div>
                <div>
                    <div>
                        <h4>{this.props.Roster.Name}</h4>
                        <img onClick = {this.handleEditClick} src = {EditButtonImage}/>
                    </div>
                    <p>
                        Total PTS: {this.props.Roster.TotalPTS}
                        Total PL : {this.props.Roster.TotalPL}
                        Total CP : {this.props.Roster.TotalCP}
                    </p>
                </div>
                {DetachmentsList}
            </div>
        )
    }
}

export default RosterMenu;