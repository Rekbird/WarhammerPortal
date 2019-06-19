import * as utils from "../Scripts/CommonFunctions.js";
import { createStore, applyMiddleware, combineReducers } from 'redux';


import {RosterUnit} from "../Classes/CommonClasses.js";
import {Roster} from "../Classes/CommonClasses.js";
import {RosterDetachment} from "../Classes/CommonClasses.js";

const WarhammerPortalStore = combineReducers(
                            {
                                MainMenuCategoryKey,
                                FactionSelection,
                                PsychicPowerMenuButtons,
                                RosterEditing
                            }
                        );

export default WarhammerPortalStore;


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

function PsychicPowerMenuButtons(state = {
                                    AvailableSpells: [],
                                    SelectedSpells: [],
                                    RemoveButtonLocked: true, 
                                    AddButtonLocked: false
                                }, action) {
    switch(action.type) {
        case "PsychicPowerMenuButtons":
            return Object.assign({}, state,     
            {
                AvailableSpells: action.AvailableSpells,
                SelectedSpells: action.SelectedSpells,
                RemoveButtonLocked: action.RemoveButtonLocked,
                AddButtonLocked: action.AddButtonLocked
            });
        default:
            return state;
    }
}


function RosterEditing(state = RosterEditingInitialState, action) {
    let Result = null;
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
            Result = AddNewDetachment(state.Roster, action);
            return Object.assign({}, state, {Roster: Result.Roster, ActiveDetachment: Result.ActiveDetachment, Action: Result.Action});
        case "CopyDetachment":
            return Object.assign({}, state, {Roster: AddCopyDetachment(state.Roster, action)});
        case "DeleteDetachment":
            return Object.assign({}, state, {Roster: RemoveDetachment(state.Roster, action)});
        case "AddNewUnit":
            Result = AddNewUnit(state.Roster, action);
            return Object.assign({}, state, {Roster:Result.Roster, ActiveUnit: Result.Unit});
        case "ActiveUnit":
            return Object.assign({}, state, {ActiveUnit: SetActiveUnit(action)});
        case "CopyUnit":
            return Object.assign({}, state, {Roster: AddUnitCopy(state.Roster, action)});
        case "DeleteUnit":
            Result = RemoveUnit(state.Roster, action);
            return Object.assign({}, state, {Action: Result.Action, Roster: Result.Roster});
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
        case "UpdateUnitModels":
            const returnedObject = SetUnitModels(state.Roster,state.ActiveUnit, action);
            return Object.assign({}, state, {Roster: returnedObject.roster, ActiveUnit: returnedObject.activeUnit});
        case "EditModelWargear":
            return Object.assign({}, state, {ActiveModel: EditModelWargear(action)});
        case "UpdateModelWargear":
            return Object.assign({}, state, {ActiveModel: UpdateModelWargear(state.ActiveModel, state.ActiveUnit, action)});
        case "NewRoster":
            return Object.assign({}, state, {Roster: NewRoster(action)});
        default:
            
            return (!!state) ? state : {
                Action: "Roster Editing",
                Roster: null,		
                ActiveDetachment: null,
                ActiveUnit: null			
            };
    }
}

const UpdateModelWargear = (ActiveModel, ActiveUnit, action) => {
    let NewModel = Object.assign({}, ActiveModel, {RosterWargearSlots: action.WargearSlots});
    ActiveUnit.Models.filter((model) => model.id === NewModel.id)[0] = NewModel;
    return  NewModel;
}

const EditModelWargear = (action) => {
    let NewModel = Object.assign({}, action.CurrentModel);
    return  NewModel;
}

const SetUnitModels = (roster, ActiveUnit, action) => {
    let NewUnit = Object.assign({}, ActiveUnit, {Models: action.UnitModels});
    let NeededDetachment;
    let ReturningRoster = Object.assign({}, roster);
    ReturningRoster.RosterDetachments.forEach(function(detachment) {
        if (detachment.RosterUnits.indexOf(ActiveUnit) != -1) {
            NeededDetachment = detachment;
        }
    });
    NeededDetachment.RosterUnits.splice((NeededDetachment.RosterUnits.indexOf(NeededDetachment.RosterUnits.filter((unit) => unit.id === NewUnit.id)[0])),1,NewUnit);
    return  {
        roster: ReturningRoster,
        activeUnit: NewUnit
    };
}

const SetUnitPsychicPowers = (roster, action) => {
    let NewUnit = Object.assign({}, action.Unit, {SpellsSelected: action.SelectedSpells});
    let NeededDetachment;
    let NewRoster = Object.assign({}, roster);
    NewRoster.Detachments.forEach(function(element) {
        if (element.RosterUnits.indexOf(action.CurrentUnit) != -1) {
            NeededDetachment = element;
        }
    });
    NeededDetachment.RosterUnits.filter((unit) => unit.id === NewUnit.id)[0] = NewUnit;

    return  NewRoster;
}

const SetDetachmentFaction = (roster, action) => {
    const Detachments = roster.RosterDetachments.slice();
    let NeededDetachment = Detachments.filter((detach) => detach.id == action.DetachmentId)[0];
    NeededDetachment.Faction = action.Faction;
    return Object.assign({}, roster, {RosterDetachments: Detachments});
}

const SetDetachmentType = (roster, action) => {
    const Detachments = roster.RosterDetachments.slice();
    let NeededDetachment = Detachments.filter((detach) => detach.id == action.DetachmentId)[0];
    NeededDetachment.Detachment = action.DetachmentType;
    return Object.assign({}, roster, {RosterDetachments: Detachments});
}

const SetChapterTactic = (roster, action) => {
    const Detachments = roster.RosterDetachments.slice();
    let NeededDetachment = Detachments.filter((detach) => detach.id == action.DetachmentId)[0];
    NeededDetachment.ChapterTactic = action.ChapterTactic;
    return Object.assign({}, roster, {RosterDetachments: Detachments});
}

const AddNewDetachment = (roster, action) => {
    let Detachments = roster.RosterDetachments.slice();
    let NewDetachment = new RosterDetachment(action.NewId,[],null,null,null,roster.id,null,null);
    Detachments.push(NewDetachment);
    return {
        Roster: Object.assign({}, roster, {RosterDetachments: Detachments}),
        ActiveDetachment: NewDetachment,
        Action: "Detachment Editing"
    };
}

const AddCopyDetachment = (roster, action) => {
    let Detachments = roster.RosterDetachments.slice();
    let NewDetachment = Detachments.filter((detach) => detach.id == action.DetachmentId)[0].copyRosterDetachment(action.NewId)
    Detachments.push(NewDetachment);
    return Object.assign({}, roster, {RosterDetachments: Detachments});
}

const RemoveDetachment = (roster, action) => {
    let Detachments = roster.RosterDetachments.slice();
    const Detachment = Detachments.filter((detach) => detach.id == action.DetachmentId)[0];
    Detachments.splice(Detachments.indexOf(Detachment), 1);
    return Object.assign({}, roster, {RosterDetachments: Detachments});
}

const AddNewUnit = (roster, action) => {
    const Detachments = roster.RosterDetachments.slice();
    let Detachment = Detachments.filter((detach) => detach.id == action.DetachmentId)[0];
    let NewUnit = new RosterUnit(
        action.NewId,
        [],
        action.BaseUnit,
        [],
        null,
        action.DetachmentId
    );
    NewUnit.Models = utils.GetRosterUnitModels(NewUnit);
    Detachment.RosterUnits.push(NewUnit);
    return {
        Roster: Object.assign({}, roster, {RosterDetachments: Detachments}),
        Unit: NewUnit
    }
}

const SetActiveUnit = (action) => {
    return action.ActiveUnit;
}

const AddUnitCopy = (roster, action) => {
    const Detachments = roster.RosterDetachments.slice();
    let Detachment = Detachments.filter((detach) => detach.id == action.DetachmentId)[0];
    let OriginalUnit = Detachment.RosterUnits.filter((unit) => unit.id == action.UnitId)[0];
    let NewUnit = OriginalUnit.copyRosterUnit(action.NewId);
    NewUnit.Models = utils.GetRosterUnitModels(NewUnit);
    Detachment.RosterUnits.push(NewUnit);
    return Object.assign({}, roster, {RosterDetachments: Detachments});
}

const RemoveUnit = (roster, action) => {
    const Detachments = roster.RosterDetachments.slice();
    let Detachment = Detachments.filter((detach) => detach.id == action.DetachmentId)[0];
    let Unit = Detachment.RosterUnits.filter((unit) => unit.id == action.UnitId)[0];
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

const NewRoster = (action) => {
    return action.Roster;
}