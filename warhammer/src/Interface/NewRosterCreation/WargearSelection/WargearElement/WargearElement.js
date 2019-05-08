import React, {Component} from "react";
import "./WargearElement.css";

class WargearElement extends Component {
    constructor(props) {
        super(props);
        this.SelectedWargearOption = this.SelectedWargearOption.bind(this);
    }

    SelectedWargearOption  = (event) => {
        this.props.SelectedWargearOption(event,this.props.CurrentSlot);
    }
    
    render() {
        let AvailableOptions = this.props.AvailableOptions;
        
            var Options = AvailableOptions.map(
                (option) =>
                <option className = "" key = {option.id} value = {option.id}>{option.Name}</option>
            )

            return <select value = {this.props.SelectedOption.id} onChange = {this.SelectedWargearOption}>{Options}</select>
    }
}

export default WargearElement;
        