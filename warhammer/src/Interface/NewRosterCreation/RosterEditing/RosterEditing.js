import React, {Component} from "react";
import "./RosterEditing.css";
import { connect } from 'react-redux';

class RosterEditing extends Component {
    constructor(props) {
        super(props);
        /*
        this.state = {
            Name: this.props.Roster.Name,
            MaxPL: this.props.Roster.MaxPL,
            MaxPTS: this.props.Roster.MaxPTS
        }
        */
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMaxPLChange = this.handleMaxPLChange.bind(this);
        this.handleMaxPTSChange = this.handleMaxPTSChange.bind(this);
    }

    handleNameChange = (event) => {
        //input order for handleRosterChange :Name,MaxPL,MaxPTS
        /*
        this.setState({
            Name: event.target.value
        });
        */
        this.props.handleRosterChange(event.target.value,"--none--","--none--");
    }

    handleMaxPLChange = (event) => {
        //input order for handleRosterChange :Name,MaxPL,MaxPTS
        
        let MaxPL = event.target.value.replace(/[^0-9]/gim,'');
        /*
        this.setState({
            MaxPL:MaxPL
        });
        */
        this.props.handleRosterChange("--none--",MaxPL,"--none--");
    }

    handleMaxPTSChange = (event) => {
        //input order for handleRosterChange :Name,MaxPL,MaxPTS
        let MaxPTS = event.target.value.replace(/[^0-9]/gim,'');
        /*
        this.setState({
            MaxPTS:MaxPTS
        });
        */
        this.props.handleRosterChange("--none--","--none--",MaxPTS);
    }

    render = () => {
        return(
            <div className = "RosterEditing__Div">
                <h1 className = "RosterEditing__Header">Edit Roster's parameters</h1>
                <label className = "RosterEditing__Label">
                    Roster Name:
                    <input  className = "RosterEditing__InputField RosterEditing__NameField" type="text" value={this.props.Name} onChange={this.handleNameChange} />
                </label>
                <br />
                <label className = "RosterEditing__Label">
                    Roster Maximum Power Level:
                    <input className = "RosterEditing__InputField" type="text" value={this.props.MaxPL} onChange={this.handleMaxPLChange} />
                </label>
                <br />
                <label className = "RosterEditing__Label">
                    Roster Maximum PTS:
                    <input className = "RosterEditing__InputField RosterEditing__PTSField" type="text" value={this.props.MaxPTS} onChange={this.handleMaxPTSChange} />
                </label>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Name: state.RosterEditing.Roster.Name,
        MaxPL: state.RosterEditing.Roster.MaxPL,
        MaxPTS: state.RosterEditing.Roster.MaxPTS
    }
}

const containerRosterEditing = connect(
    mapStateToProps
  )(RosterEditing);

export default containerRosterEditing;