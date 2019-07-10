import React, {Component} from "react";
import "./UnitList.css";
import UnitsListByRole from "../UnitsListByRole/UnitsListByRole.js";
import GetAvailableRoles from "../../../Scripts/GetAvailableRoles.js";
import * as utils from "../../../Scripts/CommonFunctions.js";

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
        var Roles = utils.GetAvailableRoles(this.props.Faction.id);
       if(Roles && (Roles.length > 0)) {
            var Roles = Roles.map(
                (role) =>
                <UnitsListByRole key = {role.id} Faction = {this.props.Faction} UnitRole = {role} handleUnitSelection = {this.props.handleUnitSelection} Detachment = {this.props.Detachment}/>
            )
        }
        return (
            <div>
                {Roles}
            </div>
        )
    } 
}

export default UnitsList;