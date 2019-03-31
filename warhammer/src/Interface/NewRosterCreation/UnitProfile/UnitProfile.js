import React, {Component} from "react";
import "./UnitProfile.css";

class UnitProfile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className = "UnitProfile__Block">
                <div className = "UnitProfile__Image_block">
                    <img className="UnitProfile__Image" src={this.props.Unit.Image} alt = {this.props.Unit.Name} />
                    <div className = "UnitProfile__Button_block">
                        ({this.props.RosterCreation} && (<div className = "UnitProfile__Button">Add</div>))
                        <div className = "UnitProfile__Button"><a href={this.props.Unit.ForeignLink} target="_blank">View</a></div>
                    </div>
                </div>
                <div className = "UnitProfile__Header_block">
                    <img className = "UnitProfile__Header_image" style={{float: "left"}} src= {this.props.Unit.Unit_role.Image} alt={this.props.Unit.Unit_role.Name} />
                    <h3 className = "UnitProfile__Header">{this.props.Unit.Name}</h3>
                    <img className = "UnitProfile__Header_image" style={{float: "right"}} src= {this.props.Unit.Faction.Image} alt={this.props.Unit.Faction.Name} />
                </div>
                <p style={{color: "black"}}>{this.props.Unit.FlavorText}</p>
            </div>
        );
    }
}

export default UnitProfile;