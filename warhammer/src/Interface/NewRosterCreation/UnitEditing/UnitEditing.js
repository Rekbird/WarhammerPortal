import React, {Component} from "react";
import "./UnitEditing.css";
import UnitProfile from "../UnitProfile/UnitProfile.js";

class UnitEditing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <UnitProfile Unit = {this.props.Unit} UnitSelection = {false}/>
            </div>
        )
    }

}

export default UnitEditing;