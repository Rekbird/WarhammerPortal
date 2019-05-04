import React, {Component} from "react";
import "./EditUnitPsychicPowers.css";

class ChoiceUnitPsychicPower extends Component {
    constructor(props) {
        super(props);
        this.ChoosePsychicPowers = this.ChoosePsychicPowers.bind(this);
    }
    ChoosePsychicPowers(event) {
        this.props.ChoosePsychicPowers(event);
    }

    render() {
        let AvailablePowers = this.props.AvailablePowers;
        if(AvailablePowers && AvailablePowers.length > 0) {
            console.log(this.props.SelectLabel+" "+AvailablePowers.length);
            var PsychicPowers = AvailablePowers.map(
                (power) =>
                <option className = "EditUnitPsychicPowers__Option" key = {power.id} value = {power.id}>{power.Name}</option>
            )
        } else {
            console.log(this.props.SelectLabel+" EMPTY LIST");
        }
        return (
            <div className = "EditUnitPsychicPowers__ChoiceDiv">
                <h3 className = "EditUnitPsychicPowers__Label">{this.props.SelectLabel}</h3>
                    <div className = "EditUnitPsychicPowers__SelectDiv">
                        <select className = "EditUnitPsychicPowers__Select" multiple = {true} onChange = {this.ChoosePsychicPowers.bind(this)} size = {6}>
                            {PsychicPowers}
                        </select>
                    </div>
            </div>
        )
    }
}

export default ChoiceUnitPsychicPower;