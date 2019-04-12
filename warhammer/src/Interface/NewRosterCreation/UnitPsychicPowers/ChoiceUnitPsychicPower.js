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
                <option key = {power.id} value = {power.id}>{power.Name}</option>
            )
        } else {
            console.log(this.props.SelectLabel+" EMPTY LIST");
        }
        return (
            <label>{this.props.SelectLabel}
                <select multiple = {true} onChange = {this.ChoosePsychicPowers.bind(this)}>
                    {PsychicPowers}
                </select>
            </label>
        )
    }
}

export default ChoiceUnitPsychicPower;