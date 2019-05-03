import React, {Component} from "react";
import "./DetachmentEditing.css";

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
            if(this.props.ListTypeNumber == 1) {
                ObjectsArray = GetDetachments();
            } else if(this.props.ListTypeNumber == 2) {
                ObjectsArray = GetFactions();
            } else {
                if(this.state.DetachmentFaction) {
                    ObjectsArray = GetChapterTactics(this.state.DetachmentFaction.id);
                }
            }
            let options = ObjectsArray.map(
                (object) =>
                <option key = {object.id} value = {object.id}>{object.Name}</option>
            );
            return (
                <select value = {this.props.ObjectId} onChange = {this.handleChange}>
                    {options}
                </select>
            )
        }
}

export default DetachmentParameterChoice;