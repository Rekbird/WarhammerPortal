import React, {Component} from "react";
import "./UnitProfile.css";

class UnitProfile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("UnitProfile "+this.props.Unit);
        var AddButton = (this.props.UnitSelection && (<button className = "UnitProfile__Button" style = {{float: "left"}}>Add</button>));
        return(
            <div className = "UnitProfile__Block">
                <div className = "UnitProfile__Image_block">
                    <img className="UnitProfile__Image" src={this.props.Unit.Image} alt = {this.props.Unit.Name} />
                    <div className = "UnitProfile__Button_block">
                        {AddButton}
                        <div><a href={this.props.Unit.ForeignLink} target="_blank"><button  className = "UnitProfile__Button">View</button></a></div>
                    </div>
                </div>
                <div className = "UnitProfile__Header_block">
                    <img className = "UnitProfile__Header_image" src= {this.props.Unit.UnitRole.Image} alt={this.props.Unit.UnitRole.Name} />
                    <img className = "UnitProfile__Header_image" src= {this.props.Unit.Faction.Image} alt={this.props.Unit.Faction.Name} />
                    <div className = "UnitProfile__Header_div"><h3 className = "UnitProfile__Header">{this.props.Unit.Name}</h3></div>
                </div>
                <p style={{color: "black", margin: "10px"}}>{this.props.Unit.Description}</p>
            </div>
        );
    }
}

export default UnitProfile;