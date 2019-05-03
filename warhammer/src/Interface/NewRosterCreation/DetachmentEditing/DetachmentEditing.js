import React, {Component} from "react";
import "./DetachmentEditing.css";
import DetachmentParameterChoice from "./DetachmentParameterChoice.js";
import "../../../Scripts/CommonFunctions.js";

class DetachmentEditing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Detachment: null,
            DetachmentName: null,
            DetachmentFaction: null,
            DetachmentChapterTactic: null
        }
        this.componentWillMount = this.componentWillMount.bind(this);
        this.handleDetachmentNameChange = this.handleDetachmentNameChange.bind(this);
        this.handleDetachmentFactionChange = this.handleDetachmentFactionChange.bind(this);
        this.handleDetachmentChapterTacticChange = this.handleDetachmentChapterTacticChange.bind(this);
    }

    componentWillMount() {
       let DetachmentName = (!!this.props.Detachment.Name) ? (this.props.Detachment.Name) : ("New Detachment");
       let DetachmentFaction = (!!this.props.Faction) ? (this.props.Faction) : (null);
       let DetachmentChapterTactic = (!!this.props.ChapterTactic) ? (this.props.ChapterTactic) : (null);
       let Detachment = (!!this.props.Detachment) ? (this.props.Detachment) : (null);
       this.setState({
            Detachment: Detachment,
            DetachmentName: DetachmentName,
            DetachmentFaction: DetachmentFaction,
            DetachmentChapterTactic: DetachmentChapterTactic
        });
    }

    handleDetachmentNameChange(DetachmentId) {
        let Detachment = GetDetachment(DetachmentId);
        this.setState({
            Detachment: Detachment,
            DetachmentName: Detachment.Name
        })
    }

    handleDetachmentFactionChange(FactionId) {
        
    }

    handleDetachmentChapterTacticChange(ChapterTacticId) {
        
    }

    render() {
        return (
            <div>
                <h1>Edit {this.state.DetachmentName}</h1>
                <div>
                    <DetachmentParameterChoice ListTypeNumber = {1} ObjectId = {this.state.Detachment.id} onChange = {this.handleDetachmentNameChange} />
                    <DetachmentParameterChoice ListTypeNumber = {2} ObjectId = {this.state.DetachmentFaction.id} onChange = {this.handleDetachmentFactionChange} />
                    <DetachmentParameterChoice ListTypeNumber = {3} ObjectId = {this.state.DetachmentChapterTactic.id} onChange = {this.handleDetachmentChapterTacticChange} />
                </div>
            </div>
        )
    }
}

export default DetachmentEditing;