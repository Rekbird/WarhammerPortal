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
            DetachmentChapterTactic: null,
            FactionSelection: false
        }
        this.componentWillMount = this.componentWillMount.bind(this);
        this.handleDetachmentNameChange = this.handleDetachmentNameChange.bind(this);
        this.handleDetachmentFactionChange = this.handleDetachmentFactionChange.bind(this);
        this.handleDetachmentChapterTacticChange = this.handleDetachmentChapterTacticChange.bind(this);
        this.showFactionSelectionWindow = this.showFactionSelectionWindow.bind(this);
    }

    componentWillMount() {
       let DetachmentName = (this.props.RosterDetachment.Detachment && !!this.props.RosterDetachment.Detachment.Name) ? (this.props.RosterDetachment.Detachment.Name) : ("New Detachment");
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
        });
    }

    handleDetachmentFactionChange(FactionId) {
        let Faction = utils.GetFaction(FactionId);
        this.props.RosterDetachment.Faction = Faction;
        this.setState({
            DetachmentFaction: Faction,
            FactionSelection: false,
            DetachmentChapterTactic: null
        });
    }

    handleDetachmentChapterTacticChange(ChapterTacticId) {
        let ChapterTactic = utils.GetChapterTactic(ChapterTacticId);
        this.props.RosterDetachment.ChapterTactic = ChapterTactic;
        this.setState({
            DetachmentChapterTactic: ChapterTactic
        });
    }

    showFactionSelectionWindow() {
        this.setState({
            FactionSelection: true
        });
    }

    render() {
        let FactionSelectionWindow = (
            this.state.FactionSelection ? (
                <div>
                    <h2>Choose the Roster's faction</h2>
                    <FactionGraphicList buttonClick = {this.handleDetachmentFactionChange}/>
                </div>
            ) : null
        );
        return (
            <div>
                <h1>Edit {this.state.DetachmentName}</h1>
                <div>
                    <div>
                        <button onClick = {this.showFactionSelectionWindow}>Select faction</button><br />
                        Choosen Faction : {this.state.DetachmentFaction ? this.state.DetachmentFaction.Name : "none"}
                    </div>
                    <DetachmentParameterChoice ListTypeNumber = {1} ObjectId = {this.state.Detachment ? this.state.Detachment.id : ""} handleChange = {this.handleDetachmentNameChange} />
                    <DetachmentParameterChoice ListTypeNumber = {3} FactionId = {this.state.DetachmentFaction && this.state.DetachmentFaction.id ? this.state.DetachmentFaction.id : ""} ObjectId = {this.state.DetachmentChapterTactic && this.state.DetachmentChapterTactic.id ? this.state.DetachmentChapterTactic.id : ""} handleChange = {this.handleDetachmentChapterTacticChange} />
                </div>
                {FactionSelectionWindow}
            </div>
        )
    }
}

export default DetachmentEditing;