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
        if(Units && (Units.length > 0)) {
            Units = Units.map(
                (unit) => 
                <UnitProfile key = {unit.id} Unit = {unit} /> 
            );
        }
        return (
            <div>
                <h2>{this.props.UnitRole.Name}</h2>
                {Units}
            </div>

        );
    }
}

export default UnitsListByRole;
