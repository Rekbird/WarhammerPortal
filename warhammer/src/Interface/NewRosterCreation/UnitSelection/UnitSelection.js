import React, {Component} from "react";
import "./UnitSelection.css";
import UnitsList from "../UnitsList/UnitsList.js";
import UnitRolesList from "../UnitRolesList/UnitRolesList.js";

class UnitSelection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className = "UnitSelection__Header">Select a unit</h1>
                <div className = "UnitSelection__SelectionArea">
                    <div className = "UnitSelection__UnitList"><UnitsList Faction = {this.props.Faction} /></div>
                    <div className = "UnitSelection__RolesList"><UnitRolesList FactionId = {this.props.Faction.id} /></div>
                </div>
            </div>
        )
    }
}

export default UnitSelection;
