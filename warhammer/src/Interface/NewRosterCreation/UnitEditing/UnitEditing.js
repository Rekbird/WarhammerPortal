import React, {Component} from "react";
import "./UnitEditing.css";
import UnitProfile from "../UnitProfile/UnitProfile.js";
import UnitModelsList from "../UnitModels/UnitModels.js";
import WargearElement from "../WargearSelection/WargearElement/WargearElement.js";

class UnitEditing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <UnitProfile Unit = {this.props.Unit} UnitSelection = {false}/>
                <UnitModelsList/>
                <WargearElement/>
            </div>
        )
    }

}

export default UnitEditing;