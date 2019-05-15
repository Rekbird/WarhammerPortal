import React, {Component} from "react";
import * as utils from "../../../Scripts/CommonFunctions.js";
import RosterUnitItem from "./RosterUnitItem.js";

class RosterUnitRoleItem extends Component{
    constructor(props) {
        super(props);
    }

    render = () => {
        let Units = this.props.Units.map((unit,idx) =>
            <RosterUnitItem key = {idx} RosterUnitId = {unit.id} RosterUnitName = {unit.Name} AllowedCopy = {this.props.AllowedCopy} EditClick = {this.props.EditClick} CopyClick = {this.props.CopyClick} DeleteClick = {this.props.DeleteClick}/>
        );
        let DetachmentUnitsListByRole = <ul>{Units}</ul>
        return(
            <li>{this.props.RoleName}<div>{DetachmentUnitsListByRole}</div></li>
        )
    }
}

export default RosterUnitRoleItem;