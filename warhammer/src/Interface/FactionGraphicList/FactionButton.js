import React, {Component} from 'react';
import "./FactionButton.css";

class FactionButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        <td>
            <img src = {this.props.FactionImage} alt = {this.props.FactionName} />
            {this.props.FactionName}
        </td>
    }
}

export default FactionButton;