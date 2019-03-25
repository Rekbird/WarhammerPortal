import React, {Component} from 'react';
import "./FactionButton.css";

class FactionButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <td className = "FactionGraphicList__Cell">
                <figure className = "FactionGraphicList__Fig">
                    <img className = "FactionGraphicList__Image" src = {this.props.Faction.Image} alt = {this.props.Faction.Name} />
                    <figcaption>{this.props.Faction.Name}</figcaption>
                </figure>
            </td>
        )
        
    }
}

export default FactionButton;