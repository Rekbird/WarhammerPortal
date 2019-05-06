import React, {Component} from "react";
import "./DetachmentEditing.css";
import * as utils from "../../../Scripts/CommonFunctions.js";

class DetachmentParameterChoice extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            NeedEmptyOption: !(this.props.ObjectId && this.props.ObjectId.length > 0)
        };
    }

    componentWillUpdate() {
        let NeedEmptyOption = !(this.props.ObjectId && this.props.ObjectId.length > 0);
        if(NeedEmptyOption != this.state.NeedEmptyOption) {
            this.setState({
                NeedEmptyOption: NeedEmptyOption
            });
        }
    }
    handleChange(e) {
        if(!!e.target.value && e.target.value.length > 0) {
            this.setState({
                NeedEmptyOption: false
            });
        } else {
            this.setState({
                NeedEmptyOption: true
            });
        }
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
                if(this.props.FactionId) {
                    
                    ObjectsArray = utils.GetChapterTactics(this.props.FactionId);
                }
            }
            let options = (this.state.NeedEmptyOption) ? [<option key = {0} value = ''>--none--</option>] : [];
            options = options.concat(ObjectsArray.map(
                (object) =>
                <option key = {object.id} value = {object.id}>{object.Name}</option>
            ));
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