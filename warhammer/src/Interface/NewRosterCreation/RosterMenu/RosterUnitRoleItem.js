import React, {Component} from "react";
import * as utils from "../../../Scripts/CommonFunctions.js";
import RosterUnitItem from "./RosterUnitItem.js";

class RosterUnitRoleItem extends Component{
    constructor(props) {
        super(props);
    }

    render = () => {
        let Units = this.props.Units.map((unit,idx) =>
            <RosterUnitItem key = {idx} RosterUnit = {unit} AllowedCopy = {this.props.AllowedCopy} EditClick = {this.props.EditClick} CopyClick = {this.props.CopyClick} DeleteClick = {this.props.DeleteClick} Detachment = {this.props.Detachment}/>
        );
        let DetachmentUnitsListByRole = <ul className = "RosterMenu__DetachmentUnitsList">{Units}</ul>
        return(
            <li>
                <div className = "RosterMenu__RoleCategory">{this.props.RoleName}</div>
                <div>{DetachmentUnitsListByRole}</div>
            </li>
        )
    }
}

export default RosterUnitRoleItem;