import React, {Component} from "react";
import "./WargearElement.css";

class WargearElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [1,2,3]
          }
    }
    
    render() {
            return <select>{this.state.options.map((option, idx) => <option key={idx}>{option}</option>)}</select>
    }
}

export default WargearElement;
        