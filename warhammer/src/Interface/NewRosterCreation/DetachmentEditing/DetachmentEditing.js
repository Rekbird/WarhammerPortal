import React, {Component} from "react";
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';

import "./DetachmentEditing.css";
import DetachmentParameterChoice from "./DetachmentParameterChoice.js";
import * as utils from "../../../Scripts/CommonFunctions.js";
import FactionGraphicList from "../../FactionGraphicList/FactionGraphicList.js";
import * as ActionCreators from "../../../Store/ActionsCreators.js";

class DetachmentEditing extends Component {
    constructor(props) {
        super(props);
        this.handleDetachmentNameChange = this.handleDetachmentNameChange.bind(this);
        this.handleDetachmentFactionChange = this.handleDetachmentFactionChange.bind(this);
        this.handleDetachmentChapterTacticChange = this.handleDetachmentChapterTacticChange.bind(this);
        this.showFactionSelectionWindow = this.showFactionSelectionWindow.bind(this);
        this.hideFactionSelectionWindow = this.hideFactionSelectionWindow.bind(this);
    }
   
    handleDetachmentNameChange(DetachmentId) {
        let Detachment = utils.GetDetachment(DetachmentId);
        this.props.DetachmentType(this.props.RosterDetachment.id, Detachment);
    }

    handleDetachmentFactionChange(FactionId) {
        let Faction = utils.GetFaction(FactionId);
        this.props.DetachmentFaction(this.props.RosterDetachment.id, Faction);
        this.props.FactionSelectionWindow(false);
    }

    handleDetachmentChapterTacticChange(ChapterTacticId) {
        let ChapterTactic = utils.GetChapterTactic(ChapterTacticId, this.props.RosterDetachment.Faction.id);
        this.props.ChapterTactic(this.props.RosterDetachment.id, ChapterTactic);
    }

    showFactionSelectionWindow() {
       this.props.FactionSelectionWindow(true);
    }

    hideFactionSelectionWindow() {
       this.props.FactionSelectionWindow(false);
    }

    render() {
        let FactionSelectionWindow = (
            this.props.FactionSelection ? (
                <div className = "DetachmentEditing__FactionSelectionWindow">
                    <h2 className = "DetachmentEditing__FactionSelectionWindow_Header">Choose the Roster's faction</h2>
                    <button onClick = {this.hideFactionSelectionWindow} className = "DetachmentEditing__FactionSelectionWindow_CloseButton">x</button>
                    <FactionGraphicList buttonClick = {this.handleDetachmentFactionChange}/>
                </div>
            ) : null
        );
        let FactionImage;
        if(this.props.RosterDetachment.Faction) {
            FactionImage = <img className = "DetachmentEditing__FactionImage" src = {this.props.RosterDetachment.Faction.CodexImage} alt = {this.props.RosterDetachment.Faction.Name}/>
        }
        let DetachmentImage;
        if(this.props.RosterDetachment.Detachment) {
            DetachmentImage = 
            <figure key = {this.props.RosterDetachment.Detachment.Name} className = "DetachmentEditing__DetachmentImageFigure">
                <img className = "DetachmentEditing__DetachmentImage" src = {this.props.RosterDetachment.Detachment.Image} alt = {this.props.RosterDetachment.Detachment.Name}/>
            </figure>
        }
        let DetachmentName = (this.props.RosterDetachment.Detachment) ? (this.props.RosterDetachment.Detachment.Name) : "New Detachment";
        return (
            <div className = "DetachmentEditing">
                <h1 className = "DetachmentEditing__Header">Edit {DetachmentName}</h1>
                <CSSTransitionGroup 
                    transitionName="DetachmentEditing__Transition" 
                    transitionAppear={true}
                    transitionAppearTimeout={300}
                    transitionEnterTimeout={300} 
                    transitionLeaveTimeout = {300}
                >
                    {FactionSelectionWindow}
                </CSSTransitionGroup>
                <div className = "DetachmentEditing__FactionDiv">
                    <div className="DetachmentEditing__CurrentFaction">
                        <button className = "DetachmentEditing__Button" onClick = {this.showFactionSelectionWindow}>Faction's list</button>
                        <p>Current chosen Faction : </p>
                    </div>
                    <div className = "DetachmentEditing__ChosenFactionLabel"><figure className = "DetachmentEditing__ChosenFactionTitle">{FactionImage}<figcaption>{this.props.RosterDetachment.Faction ? this.props.RosterDetachment.Faction.Name : "--none--"}</figcaption></figure></div>
                </div>
                <div className = "DetachmentEditing__MiddleDiv">
                    <DetachmentParameterChoice ListTypeNumber = {1} ObjectId = {this.props.RosterDetachment.Detachment ? this.props.RosterDetachment.Detachment.id : ""} handleChange = {this.handleDetachmentNameChange} />
                    <DetachmentParameterChoice ListTypeNumber = {3} FactionId = {this.props.RosterDetachment.Faction && this.props.RosterDetachment.Faction.id ? this.props.RosterDetachment.Faction.id : ""} ObjectId = {this.props.RosterDetachment.ChapterTactic && this.props.RosterDetachment.ChapterTactic.id ? this.props.RosterDetachment.ChapterTactic.id : ""} handleChange = {this.handleDetachmentChapterTacticChange} />
                </div>
                <CSSTransitionGroup 
                    transitionName="DetachmentEditing__Transition" 
                    transitionAppear={true}
                    transitionAppearTimeout={300}
                    transitionEnter = {true}
                    transitionEnterTimeout={300} 
                    transitionLeave = {false}
                    transitionLeaveTimeout = {300}
                >
                    {DetachmentImage}
                </CSSTransitionGroup>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        RosterDetachment: state.RosterEditing.ActiveDetachment,
        FactionSelection: state.FactionSelection
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        DetachmentFaction: (DetachmentId, Faction) => dispatch(ActionCreators.DetachmentFaction(DetachmentId, Faction)),
        DetachmentType: (DetachmentId, DetachmentType) => dispatch(ActionCreators.DetachmentType(DetachmentId, DetachmentType)),
        ChapterTactic: (DetachmentId, ChapterTactic) => dispatch(ActionCreators.ChapterTactic(DetachmentId, ChapterTactic)),
        FactionSelectionWindow: (FlagValue) => dispatch(ActionCreators.FactionSelectionWindow(FlagValue))
    }
}

const containerDetachmentEditing = connect(
    mapStateToProps,
    mapDispatchToProps
  )(DetachmentEditing);

export default containerDetachmentEditing;