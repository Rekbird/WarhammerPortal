import React, {Component} from "react";
import "./UnitRolesList.css";
import GetAvailableRoles from "../../../Scripts/GetAvailableRoles.js";

class UnitRolesList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var Roles = GetAvailableRoles(this.props.FactionId);
        if(Roles && (Roles.length > 0)) {
            Roles = Roles.map(
                (role) =>
                <h3 key = {role.id} className = "UnitRolesList__RoleButton">{role.Name}</h3>
            )
        }
        return(
            <div className = "UnitRolesList__Block">
                <h2>Available roles</h2>
                {Roles}
            </div>
        )
    }
}

export default UnitRolesList;