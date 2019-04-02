import React, {Component} from "react";
import "./UnitRolesList.css";
import GetAvailableRoles from "../../../Scripts/GetAvailableRoles.js";

class UnitRolesList extends Component {
    constructor(props) {
        super(props);
        this.ScrollToUnitsByRole = this.props.ScrollToUnitsByRole.bind(this);
    }

    ScrollToUnitsByRole() {
        this.props.ScrollToUnitsByRole();
    }

    render() {
        var Roles = GetAvailableRoles(this.props.FactionId);
        if(Roles && (Roles.length > 0)) {
            Roles = Roles.map(
                (role) =>
                <h3 key = {role.id} className = "UnitRolesList__RoleButton" onClick = {this.ScrollToUnitsByRole.bind(this, role.Name)}>{role.Name}</h3>
            )
        }
        return(
            <div className = "UnitRolesList__Block">
                <h2 style={{color: "rgb(6, 41, 34)"}}>Available roles</h2>
                {Roles}
            </div>
        )
    }
}

export default UnitRolesList;