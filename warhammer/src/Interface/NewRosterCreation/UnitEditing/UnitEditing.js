import React, {Component} from "react";
import "./UnitEditing.css";
import UnitProfile from "../UnitProfile/UnitProfile.js";
import UnitModelsList from "../UnitModels/UnitModels.js";

class UnitEditing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <UnitProfile Unit = {this.props.Unit} UnitSelection = {false}/>
                <UnitModelsList/>
            </div>
        )
    }

}

export default UnitEditing;