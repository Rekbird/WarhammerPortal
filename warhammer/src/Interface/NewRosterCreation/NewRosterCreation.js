import React, {Component} from "react";
import { connect } from 'react-redux';

import * as utils from "../../Scripts/CommonFunctions.js";
import RosterMenu from "./RosterMenu/RosterMenu.js";
import DetachmentEditing from "./DetachmentEditing/DetachmentEditing.js";
import UnitSelection from "./UnitSelection/UnitSelection.js";
import UnitEditing from "./UnitEditing/UnitEditing.js";
import {RosterDetachment} from "../../Classes/CommonClasses.js";
import {RosterUnit} from "../../Classes/CommonClasses.js";
import {Roster} from "../../Classes/CommonClasses.js";
import "./NewRosterCreation.css";
import RosterEditing from "./RosterEditing/RosterEditing.js";

import * as ActionCreators from "../../Store/ActionsCreators.js";

class RosterCreation extends Component{
    constructor(props) {
        super(props)
        this.ActiveDetachment = null;
        this.ActiveUnit = null;
        this.AddNewDetachment = this.AddNewDetachment.bind(this);
        this.EditDetachment = this.EditDetachment.bind(this);
        this.CopyDetachment = this.CopyDetachment.bind(this);
        this.DeleteDetachment = this.DeleteDetachment.bind(this);
        this.EditUnit = this.EditUnit.bind(this);
        this.CopyUnit = this.CopyUnit.bind(this);
        this.DeleteUnit = this.DeleteUnit.bind(this);
        this.EditRoster = this.EditRoster.bind(this);
        this.showUnitSelectionList = this.showUnitSelectionList.bind(this);
    }

    AddNewDetachment = () => {
        let NewId = utils.calculateNewId(this.props.Roster.RosterDetachments);
        this.props.NewDetachment(NewId);
    }

    EditDetachment = (Detachment) => {
       this.props.SetActiveDetachment(Detachment);
       this.props.SetActiveUnit(null);
       this.props.RosterAction("Detachment Editing");
    }

    CopyDetachment = (Detachment) => {
       let NewId = utils.calculateNewId(this.props.Roster.RosterDetachments);
       this.props.CopyDetachment(Detachment.id, NewId);
    }

    DeleteDetachment = (Detachment) => {
        this.props.DeleteDetachment(Detachment.id);
    }
    
    EditUnit = (Unit) => {
       const Detach = this.props.Roster.RosterDetachments.find((detach) => detach.id == Unit.RosterDetachmentId);
       this.props.SetActiveUnit(Unit);
       this.props.SetActiveDetachment(Detach);
       this.props.RosterAction("Unit Editing");
       
    }

    CopyUnit = (Detachment, Unit) => {
       let NewId = utils.calculateNewId(Detachment.RosterUnits);
       this.props.CopyUnit(Detachment.id, Unit.id, NewId);
    }

    DeleteUnit = (Detachment, Unit) => {
       this.props.DeleteUnit(Detachment.id, Unit.id);
    }

    EditRoster = () => {
       
       this.props.RosterAction("Roster Editing");
    }

    showUnitSelectionList = (Detachment) => {
        
       this.props.SetActiveDetachment(Detachment);
       this.props.RosterAction("Unit Selection");
    }

    render = () => {
        let WorkingArea;
        switch(this.props.Action) {
            case "Roster Editing": 
                WorkingArea = <RosterEditing/>;
            break;

            case "Detachment Editing": 
                console.log("Детач из конструктора в рендере "+this.props.ActiveDetachment.id);
                WorkingArea = <DetachmentEditing/>;
            break;

            case "Unit Selection": 
                WorkingArea = <UnitSelection/>;
            break;

            case "Unit Editing": 
                WorkingArea = <UnitEditing/>;
            break;
        }
        return(
            <div>
                <RosterMenu 
                    Roster = {this.props.Roster}
                    ActiveDetachmentId = {(this.props.ActiveDetachment) ? this.props.ActiveDetachment.id : null}
                    ActiveUnitId = {(this.props.ActiveUnit) ? this.props.ActiveUnit.id : null}
                    NewDetachmentClick = {this.AddNewDetachment}
                    EditDetachmentClick = {this.EditDetachment}
                    CopyDetachmentClick = {this.CopyDetachment}
                    DeleteDetachmentClick  = {this.DeleteDetachment}
                    EditClick = {this.EditUnit} 
                    CopyClick = {this.CopyUnit} 
                    DeleteClick = {this.DeleteUnit} 
                    NewUnitClick = {this.showUnitSelectionList}
                    EditRosterClick = {this.EditRoster}
                />
                <div className = "RosterEditing_WorkingArea">{WorkingArea}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Action: state.RosterEditing.Action,
        Roster: state.RosterEditing.Roster,
        ActiveDetachment: state.RosterEditing.ActiveDetachment,
        ActiveUnit: state.RosterEditing.ActiveUnit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        DetachmentFaction: (DetachmentId, Faction) => dispatch(ActionCreators.DetachmentFaction(DetachmentId, Faction)),
        DetachmentType: (DetachmentId, DetachmentType) => dispatch(ActionCreators.DetachmentType(DetachmentId, DetachmentType)),
        ChapterTactic: (DetachmentId, ChapterTactic) => dispatch(ActionCreators.ChapterTactic(DetachmentId, ChapterTactic)),
        NewDetachment: (NewId) => dispatch(ActionCreators.NewDetachment(NewId)),
        SetActiveDetachment: (ActiveDetachment) => dispatch(ActionCreators.ActiveDetachment(ActiveDetachment)),
        CopyDetachment: (DetachmentId, NewId) => dispatch(ActionCreators.CopyDetachment(DetachmentId, NewId)),
        DeleteDetachment: (DetachmentId) => dispatch(ActionCreators.DeleteDetachment(DetachmentId)),
        AddNewUnit: (DetachmentId, NewId, BaseUnit) => dispatch(ActionCreators.AddNewUnit(DetachmentId, NewId, BaseUnit)),
        SetActiveUnit: (ActiveUnit) => dispatch(ActionCreators.ActiveUnit(ActiveUnit)),
        CopyUnit: (DetachmentId, UnitId, NewId) => dispatch(ActionCreators.CopyUnit(DetachmentId, UnitId, NewId)),
        DeleteUnit: (DetachmentId, UnitId) => dispatch(ActionCreators.DeleteUnit(DetachmentId, UnitId)),
        RosterAction: (ActionNAme) => dispatch(ActionCreators.RosterAction(ActionNAme)),
        RosterName: (RosterName) => dispatch(ActionCreators.RosterName(RosterName)),
        RosterMaxPL: (RosterMaxPL) => dispatch(ActionCreators.RosterMaxPL(RosterMaxPL)),
        RosterMaxPTS: (RosterMaxPTS) => dispatch(ActionCreators.RosterMaxPTS(RosterMaxPTS)),
        
    }
}

const containerRosterCreation = connect(
    mapStateToProps,
    mapDispatchToProps
  )(RosterCreation);


export default containerRosterCreation;