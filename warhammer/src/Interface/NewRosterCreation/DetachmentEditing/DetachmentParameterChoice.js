import React, {Component} from "react";
import "./DetachmentEditing.css";
import * as utils from "../../../Scripts/CommonFunctions.js";

class DetachmentParameterChoice extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        /*
        this.state = {
            NeedEmptyOption: !(this.props.ObjectId && this.props.ObjectId.length > 0)
        };
        */
    }

    /*
    componentDidUpdate() {
        let NeedEmptyOption = !(!!this.props.ObjectId && this.props.ObjectId.length > 0);
        if(NeedEmptyOption != this.state.NeedEmptyOption) {
            this.setState({
                NeedEmptyOption: NeedEmptyOption
            });
        }
    }
    */
    handleChange(e) {
        /*
        if(!!e.target.value && e.target.value.length > 0) {
            this.setState({
                NeedEmptyOption: !(!!e.target.value && e.target.value.length > 0)
            });
        }
        */
        this.props.handleChange(e.target.value);
    }

    render() {
        /*
                1- Detachments
                2- Factions
                3 - ChapterTactics
            */
            let ObjectsArray = [];
            let SelectLabel = "";
            if(this.props.ListTypeNumber == 1) {
                ObjectsArray = utils.GetDetachments();
                SelectLabel = "Select Detachment";
            } else if(this.props.ListTypeNumber == 2) {
                ObjectsArray = utils.GetFactions();
                SelectLabel = "Select Faction";
            } else {
                SelectLabel = "Select Tactic";
                if(this.props.FactionId) {
                    
                    ObjectsArray = utils.GetChapterTactics(this.props.FactionId);
                }
            }
            let options = (!(this.props.ObjectId > 0)) ? [<option className = "DetachmentEditing__Option" key = {0} value = ''>--none--</option>] : [];
            options = options.concat(ObjectsArray.map(
                (object) =>
                <option className = "DetachmentEditing__Option" key = {object.id} value = {object.id}>{object.Name}</option>
            ));
            return (
                <div className = "DetachmentEditing__SelectDiv">
                    <h3 className = "DetachmentEditing__SelectLabel">{SelectLabel}</h3>
                    <select className = "DetachmentEditing__Select" value = {this.props.ObjectId} onChange = {this.handleChange}>
                        {options}
                    </select>
                </div>
            )
        }
}

export default DetachmentParameterChoice;