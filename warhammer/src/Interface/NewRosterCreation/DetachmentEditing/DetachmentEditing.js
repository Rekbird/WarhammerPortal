import React, {Component} from "react";
import "./DetachmentEditing.css";
import DetachmentParameterChoice from "./DetachmentParameterChoice.js";
import * as utils from "../../../Scripts/CommonFunctions.js";
import FactionGraphicList from "../../FactionGraphicList/FactionGraphicList.js";

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
       let DetachmentName = (!!this.props.RosterDetachment.Detachment.Name) ? (this.props.RosterDetachment.Detachment.Name) : ("New Detachment");
       let DetachmentFaction = (!!this.props.RosterDetachment.Faction) ? (this.props.RosterDetachment.Faction) : (null);
       let DetachmentChapterTactic = (!!this.props.RosterDetachment.ChapterTactic) ? (this.props.RosterDetachment.ChapterTactic) : (null);
       let Detachment = (!!this.props.RosterDetachment.Detachment) ? (this.props.RosterDetachment.Detachment) : (null);
       this.setState({
            Detachment: Detachment,
            DetachmentName: DetachmentName,
            DetachmentFaction: DetachmentFaction,
            DetachmentChapterTactic: DetachmentChapterTactic
        });
    }

    handleDetachmentNameChange(DetachmentId) {
        let Detachment = utils.GetDetachment(DetachmentId);
        this.props.RosterDetachment.Detachment = Detachment;
        this.setState({
            Detachment: Detachment,
            DetachmentName: Detachment.Name
        })
    }

    handleDetachmentFactionChange(FactionId) {
        let Faction = utils.GetFaction(FactionId);
        this.props.RosterDetachment.Faction = Faction;
        this.setState({
            DetachmentFaction: Faction
        })
    }

    handleDetachmentChapterTacticChange(ChapterTacticId) {
        let ChapterTactic = utils.GetChapterTactic(ChapterTacticId);
        this.props.RosterDetachment.ChapterTactic = ChapterTactic;
        this.setState({
            DetachmentChapterTactic: ChapterTactic
        })
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
                <FactionGraphicList />
            </div>
        )
    }
}

export default DetachmentEditing;