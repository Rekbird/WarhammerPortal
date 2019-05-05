import React, {Component} from "react";
import "./DetachmentEditing.css";
import * as utils from "../../../Scripts/CommonFunctions.js";

class DetachmentParameterChoice extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
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
                SelectLabel = "Choose Detachment";
            } else if(this.props.ListTypeNumber == 2) {
                ObjectsArray = utils.GetFactions();
                SelectLabel = "Choose Faction";
            } else {
                SelectLabel = "Choose Tactic";
                if(this.props.ObjectId) {
                    
                    ObjectsArray = utils.GetChapterTactics(this.props.ObjectId);
                }
            }
            let options = ObjectsArray.map(
                (object) =>
                <option key = {object.id} value = {object.id}>{object.Name}</option>
            );
            return (
                <div>
                    <h4>{SelectLabel}</h4>
                    <select value = {this.props.ObjectId} onChange = {this.handleChange}>
                        {options}
                    </select>
                </div>
            )
        }
}

export default DetachmentParameterChoice;