import React, {Component} from "react";
import "./WargearElement.css";

/*
in:
SelectedOption
AvailableOptions
ChoosedWargearOption()
CurrentSlot

out:
SelectedOption.id
*/

class WargearElement extends Component {
    constructor(props) {
        super(props);
        this.SelectedWargearOption = this.SelectedWargearOption.bind(this);
    }

    SelectedWargearOption  = (event) => {
        this.props.SelectedWargearOption(event.target.value,this.props.CurrentSlot);
    }
    
    render() {
        let AvailableOptions = this.props.AvailableOptions;
            var Options = AvailableOptions.map(
                (option) =>
                <option className = "WargearElement__Option" key = {option.id} value = {option.id} disabled = {option.id == this.props.SelectedOption.id}>{option.Name}</option>
            )

            return (
                <div className = 'WargearElement__Block'>
                    <h3 className = 'WargearElement__Title'>{this.props.CurrentSlot.Name}</h3>
                    <select className = 'WargearElement__Select' value = {this.props.SelectedOption.id} onChange = {this.SelectedWargearOption}>{Options}</select>
                </div>
            )
    }
}

export default WargearElement;
        