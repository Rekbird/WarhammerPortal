import React, {Component} from "react";
import "./UnitList.css";
import UnitsListByRole from "../UnitsListByRole/UnitsListByRole.js";
import GetAvailableRoles from "../../../Scripts/GetAvailableRoles.js";

class UnitsList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        var Roles = GetAvailableRoles(this.props.Faction.id);
        console.log("GetAvailableRoles" + Roles.length);
       if(Roles && (Roles.length > 0)) {
            var Roles = Roles.map(
                (role) =>
                <UnitsListByRole key = {role.id} Faction = {this.props.Faction} UnitRole = {role} />
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