import * as utils from "../Scripts/CommonFunctions.js";
import { createStore, applyMiddleware, combineReducers } from 'redux';


import {RosterUnit} from "../Classes/CommonClasses.js";
import {Roster} from "../Classes/CommonClasses.js";
import {RosterDetachment} from "../Classes/CommonClasses.js";

const WarhammerPortal = combineReducers(
                            {
                                MainMenuCategoryKey,
                                FactionSelection,
                                PsychicPowerMenuButtons,
                                RosterEditing
                            }
                        );

export default WarhammerPortal;

const RosterEditingInitialState = {
    Action: "Roster Editing",
    Roster: null,		
	ActiveDetachment: null,
    ActiveUnit: null			
}

function MainMenuCategoryKey(state = 1, action) {
    switch(action.type) {
        case "CategoryClick":
            return action.CategiryId;
        default:
            console.log(state);
            return state;
    }
}

function FactionSelection(state = false, action) {
    switch(action.type) {
        case "FactionSelectionWindow":
            return action.FlagValue;
        default:
            return state;
    }
}

function PsychicPowerMenuButtons(state = {RemoveButtonLocked: true, AddButtonLocked: false}, action) {
    switch(action.type) {
        case "PsychicPowerMenuButtons":
            return {
                RemoveButtonLocked: action.RemoveButtonLocked,
                AddButtonLocked: action.AddButtonLocked
            };
        default:
            return state;
    }
}


function RosterEditing(state = RosterEditingInitialState, action) {
    switch(action.type) {
        case "UnitPsychicPowers":
            return Object.assign({}, state, {Roster: SetUnitPsychicPowers(state.Roster, action)});
        case "DetachmentFaction":
            return Object.assign({}, state, {Roster: SetDetachmentFaction(state.Roster, action)});
        case "DetachmentType":
            return Object.assign({}, state, {Roster: SetDetachmentType(state.Roster, action)});
        case "ChapterTactic":
            return Object.assign({}, state, {Roster: SetChapterTactic(state.Roster, action)});
        case "NewDetachment":
            return Object.assign({}, state, {Roster: AddNewDetachment(state.Roster, action)});
        case "CopyDetachment":
            return Object.assign({}, state, {Roster: AddCopyDetachment(state.Roster, action)});
        case "DeleteDetachment":
            return Object.assign({}, state, {Roster: RemoveDetachment(state.Roster, action)});
        case "AddNewUnit":
            return Object.assign({}, state, {Roster: AddNewUnit(state.Roster, action)});
        case "ActiveUnit":
            return Object.assign({}, state, {ActiveUnit: SetActiveUnit(action)});
        case "CopyUnit":
            return Object.assign({}, state, {Roster: AddUnitCopy(state.Roster, action)});
        case "DeleteUnit":
            const Action = RemoveUnit(state.Roster, action).Action;
            const Roster = RemoveUnit(state.Roster, action).Roster;
            return Object.assign({}, state, {Action: Action, Roster: Roster});
        case "RosterAction":
            return Object.assign({}, state, {Action: SetRosterAction(action)});
        case "RosterName":
            return Object.assign({}, state, {Roster: SetRosterName(state.Roster, action)});
        case "RosterMaxPL":
            return Object.assign({}, state, {Roster: SetRosterMaxPL(state.Roster, action)});
        case "RosterMaxPTS":
            return Object.assign({}, state, {Roster: SetRosterMaxPTS(state.Roster, action)});
        case "ActiveDetachment":
            return Object.assign({}, state, {ActiveDetachment: SetActiveDetachment(action)});
        default:
            console.log(state);
            return (!!state) ? state : {
                Action: "Roster Editing",
                Roster: null,		
                ActiveDetachment: null,
                ActiveUnit: null			
            };
    }
}

const SetUnitPsychicPowers = (roster, action) => {
    let NewUnit = Object.assign({}, action.Unit, {SpellsSelected: action.SelectedSpells});
    let NeededDetachment = null;
    for(let i =0; i< roster.Detachments.length;i++) {
        let Detachment = roster.Detachments[i];
        for(let j=0; j< Detachment.RosterUnits.length; j++) {
            if(Detachment.RosterUnits[j].id === NewUnit.id) {
                NeededDetachment = Detachment;
            }
        }
    }
    const Units = NeededDetachment.RosterUnits.slice();
    Units.filter((unit) => unit.id === NewUnit.id)[0] = NewUnit;
    NeededDetachment.RosterUnits = Units;
    return Object.assign({}, roster, {RosterDetachments: roster.RosterDetachments.slice()});
}

const SetDetachmentFaction = (roster, action) => {
    const Detachments = roster.RosterDetachments.slice();
    let NeededDetachment = Detachments.filter((detach) => detach.id === action.DetachmentId)[0];
    NeededDetachment.Faction = action.Faction;
    return Object.assign({}, roster, {RosterDetachments: Detachments});
}

const SetDetachmentType = (roster, action) => {
    const Detachments = roster.RosterDetachments.slice();
    let NeededDetachment = Detachments.filter((detach) => detach.id === action.DetachmentId)[0];
    NeededDetachment.Detachment = action.DetachmentType;
    return Object.assign({}, roster, {RosterDetachments: Detachments});
}

const SetChapterTactic = (roster, action) => {
    const Detachments = roster.RosterDetachments.slice();
    let NeededDetachment = Detachments.filter((detach) => detach.id === action.DetachmentId)[0];
    NeededDetachment.ChapterTactic = action.ChapterTactic;
    return Object.assign({}, roster, {RosterDetachments: Detachments});
}

const AddNewDetachment = (roster, action) => {
    let Detachments = roster.RosterDetachments.slice();
    let NewDetachment = new RosterDetachment(action.NewId,[],null,null,null,roster.id,null,null);
    Detachments.push(NewDetachment);
    return Object.assign({}, roster, {RosterDetachments: Detachments});
}

const AddCopyDetachment = (roster, action) => {
    let Detachments = roster.RosterDetachments.slice();
    let NewDetachment = Detachments.filter((detach) => detach.id === action.DetachmentId)[0].copyRosterDetachment(action.NewId)
    Detachments.push(NewDetachment);
    return Object.assign({}, roster, {RosterDetachments: Detachments});
}

const RemoveDetachment = (roster, action) => {
    let Detachments = roster.RosterDetachments.slice();
    const Detachment = Detachments.filter((detach) => detach.id === action.DetachmentId)[0];
    Detachments.splice(Detachments.indexOf(Detachment), 1);
    return Object.assign({}, roster, {RosterDetachments: Detachments});
}

const AddNewUnit = (roster, action) => {
    const Detachments = roster.RosterDetachments.slice();
    let Detachment = Detachments.filter((detach) => detach.id === action.DetachmentId)[0];
    let NewUnit = new RosterUnit(
        action.NewId,
        [],
        action.BaseUnit,
        [],
        null,
        action.DetachmentId
    );
    NewUnit.Models = utils.GetRosterUnitModels(NewUnit);
    return Object.assign({}, roster, {RosterDetachments: Detachments});
}

const SetActiveUnit = (action) => {
    return action.ActiveUnit;
}

const AddUnitCopy = (roster, action) => {
    const Detachments = roster.RosterDetachments.slice();
    let Detachment = Detachments.filter((detach) => detach.id === action.DetachmentId)[0];
    let OriginalUnit = Detachment.RosterUnits.filter((unit) => unit.id === action.UnitId)[0];
    let NewUnit = OriginalUnit.copyRosterUnit(action.NewId);
    NewUnit.Models = utils.GetRosterUnitModels(NewUnit);
    Detachment.RosterUnits.push(NewUnit);
    return Object.assign({}, roster, {RosterDetachments: Detachments});
}

const RemoveUnit = (roster, action) => {
    const Detachments = roster.RosterDetachments.slice();
    let Detachment = Detachments.filter((detach) => detach.id === action.DetachmentId)[0];
    let Unit = Detachment.RosterUnits.filter((unit) => unit.id === action.UnitId)[0];
    Detachment.RosterUnits.splice(Detachment.RosterUnits.indexOf(Unit), 1);
    return {
        Roster: Object.assign({}, roster, {RosterDetachments: Detachments}),
        Action: "Detachment Editing"
    };
}

const SetRosterAction = (action) => {
    return action.ActionNAme;
}

const SetRosterName = (roster, action) => {
    let Roster = Object.assign({}, roster, {Name: action.RosterName});
    return Roster;
}

const SetRosterMaxPL = (roster, action) => {
    let Roster = Object.assign({}, roster, {MaxPL: action.RosterMaxPL});
    return Roster;
}

const SetRosterMaxPTS = (roster, action) => {
    let Roster = Object.assign({}, roster, {MaxPTS: action.RosterMaxPTS});
    return Roster;
}

const SetActiveDetachment = (action) => {
    return action.ActiveDetachment;
}