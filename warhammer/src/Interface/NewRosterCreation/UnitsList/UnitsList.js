import React, {Component} from "react";
import "./UnitList.css";
import UnitsListByRole from "../UnitsListByRole/UnitsListByRole.js";
import GetAvailableRoles from "../../../Scripts/GetAvailableRoles.js";
import * as utils from "../../../Scripts/CommonFunctions.js";

const _ = require('lodash');

class UnitsList extends Component {
    constructor(props) {
        super(props)
    }
    /*
    handleScroll = (e) => {
        this.props.handleScroll(e);
    }
    */
    render() {
        let UnitsByRolesComponent = null;
        if (!_.isEmpty(this.props.Roles)) {
            UnitsByRolesComponent = this.props.Roles.map(
                (role) =>
                <UnitsListByRole key = {role.id} Faction = {this.props.Faction} UnitRole = {role} handleUnitSelection = {this.props.handleUnitSelection} Detachment = {this.props.Detachment}/>
            )
        }
        return (
            <div>
                {UnitsByRolesComponent}
            </div>
        )
    } 
}

export default UnitsList;