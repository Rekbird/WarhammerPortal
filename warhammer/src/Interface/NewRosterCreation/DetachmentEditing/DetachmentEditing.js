import React, {Component} from "react";
import "./DetachmentEditing.css";

class DetachmentEditing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DetachmentName: null,
            DetachmentFaction: null,
            DetachmentChapterTactic: null
        }
        this.componentWillMount = this.componentWillMount.bind(this);
        this._GenerateList = this._GenerateList.bind(this);
    }

    componentWillMount() {
       let DetachmentName = (!!this.props.Detachment.name) ? (this.props.Detachment.name) : ("New Detachment");
       let DetachmentFaction = (!!this.props.Faction) ? (this.props.Faction) : (null);
       let DetachmentChapterTactic = (!!this.props.ChapterTactic) ? (this.props.ChapterTactic) : (null);
       this.setState({
            DetachmentName: DetachmentName,
            DetachmentFaction: DetachmentFaction,
            DetachmentChapterTactic: DetachmentChapterTactic
        });
    }

    _GenerateList(ListName, ListTypeNumber) {
        let ObjectsArray = [];
        if(ListTypeNumber == 1) {
            ObjectsArray = GetDetachments();
        } else if(ListTypeNumber == 2) {
            ObjectsArray = GetFactions();
        } else {
            if(this.state.DetachmentFaction) {
                ObjectsArray = GetChapterTactics(this.state.DetachmentFaction.id);
            }
        }
        return (
            <div>
                <select>
                    {options}
                </select>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h1>Edit {this.state.DetachmentName}</h1>
                <div>
                    {this._GenerateList("Select Detachment type", 1)}
                    {this._GenerateList("Select Detachment faction", 2)}
                    {this._GenerateList("Select Detachment tactic", 3)}
                </div>
            </div>
        )
    }
}

export default DetachmentEditing;