import React, {Component} from "react";
import * as utils from "../../../Scripts/CommonFunctions.js";
import RosterUnitItem from "./RosterUnitItem.js";

class RosterUnitRoleItem extends Component{
    constructor(props) {
        super(props);
        this.addNewUnit = this.addNewUnit.bind(this);
    }

    addNewUnit = () => {
        this.props.addNewUnit(this.props.RoleId);
    }

    render = () => {
        let Units = this.props.Units.map((unit) =>
            <RosterUnitItem key = {unit.id} RosterUnitId = {unit.id} RosterUnitName = {unit.Name} EditClick = {this.props.EditClick} CopyClick = {this.props.CopyClick} DeleteClick = {this.props.DeleteClick}/>
        );
        let NewButton = (this.props.NeedNewButton ? <li onClick = {this.addNewUnit}></li> : null);
        let DetachmentUnitsListByRole = <ol>{Units}{NewButton}</ol>
        return(
            <div>
                <li>{this.props.RoleName}</li>
                {DetachmentUnitsListByRole}
            </div>
        )
    }
}

export default RosterUnitRoleItem;