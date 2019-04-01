import React, {Component} from "react";
import "./UnitsListByRole.css";
import UnitProfile from "../UnitProfile/UnitProfile.js";
import GetFactionUnitsByRole from "../../../Scripts/GetFactionUnitsByRole.js";

class UnitsListByRole extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var Units = GetFactionUnitsByRole(this.props.Faction.id, this.props.UnitRole.id)
        console.log("Units in UnitListByRole "+Units.length);
        if(Units && (Units.length > 0)) {
            Units = Units.map(
                (unit) => 
                <div>
                    <UnitProfile key = {unit.id} Unit = {unit} RosterCreation = {true} />
                </div>
            );
        }
        return (
            <div id = {this.props.UnitRole.Name}>
                <h2 style = {{textAlign: "center", color: "rgb(6, 41, 34)"}}>{this.props.UnitRole.Name}</h2>
                {Units}
            </div>

        );
    }
}

export default UnitsListByRole;
