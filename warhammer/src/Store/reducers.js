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
            Result = SetDetachmentFaction(state.Roster, action);
            return Object.assign({}, state, {Roster: Result.Roster, ActiveDetachment: Result.Detachment});
        case "DetachmentType":
            Result = SetDetachmentType(state.Roster, action);
            return Object.assign({}, state, {Roster: Result.Roster, ActiveDetachment: Result.Detachment});
        case "ChapterTactic":
            Result = SetChapterTactic(state.Roster, action);
            return Object.assign({}, state, {Roster: Result.Roster, ActiveDetachment: Result.Detachment});
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
            Result = UpdateModelWargear(state.ActiveModel, state.ActiveUnit, state.Roster, action);
            return Object.assign({}, state, {ActiveModel: Result.NewModel, Roster: Result.NewRoster});
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

const UpdateModelWargear = (ActiveModel, ActiveUnit, roster, action) => {
    let NewModel = Object.assign({}, ActiveModel, {RosterWargearSlots: action.WargearSlots});
    NewModel = utils.recalculateRosterModel(NewModel);
    ActiveUnit.Models.filter((model) => model.id === NewModel.id)[0] = NewModel;
    ActiveUnit = utils.recalculateRosterUnit(ActiveUnit);
    let NewRoster = Object.assign({}, roster);
    let Detachment = NewRoster.RosterDetachments.filter((detach) => detach.RosterUnits.indexOf(ActiveUnit) != -1)[0];
    Detachment = utils.recalculateRosterDetachment(Detachment);
    NewRoster = utils.recalculateRosterCost(NewRoster);
    return  {
        NewModel,
        NewRoster
    }
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
    NewUnit = utils.recalculateRosterUnit(NewUnit);
    NeededDetachment = utils.recalculateRosterDetachment(NeededDetachment);
    ReturningRoster = utils.recalculateRosterCost(ReturningRoster);
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
    let DetachIndex = Detachments.indexOf(DetachIndex);
    NeededDetachment = Object.assign({}, NeededDetachment);
    NeededDetachment.Faction = action.Faction;
    Detachments.splice(DetachIndex, 1, NeededDetachment);
    //Detachments.push(NeededDetachment);
    return {
        Roster: Object.assign({}, roster, {RosterDetachments: Detachments}),
        Detachment: NeededDetachment
    }
}

const SetDetachmentType = (roster, action) => {
    const Detachments = roster.RosterDetachments.slice();
    let NeededDetachment = Detachments.filter((detach) => detach.id == action.DetachmentId)[0];
    let DetachIndex = Detachments.indexOf(DetachIndex);
    NeededDetachment = Object.assign({}, NeededDetachment);
    NeededDetachment.Detachment = action.DetachmentType;
    NeededDetachment.TotalDetachCP = NeededDetachment.Detachment.CommandBenefit;
    Detachments.splice(DetachIndex, 1, NeededDetachment);
    let NewRoster = Object.assign({}, roster, {RosterDetachments: Detachments});
    NewRoster = utils.recalculateRosterCost(NewRoster);
    return {
        Roster: NewRoster,
        Detachment: NeededDetachment
    }
}

const SetChapterTactic = (roster, action) => {
    const Detachments = roster.RosterDetachments.slice();
    let NeededDetachment = Detachments.filter((detach) => detach.id == action.DetachmentId)[0];
    let DetachIndex = Detachments.indexOf(DetachIndex);
    NeededDetachment = Object.assign({}, NeededDetachment);
    NeededDetachment.ChapterTactic = action.ChapterTactic;
    Detachments.splice(DetachIndex, 1, NeededDetachment);
    //Detachments.push(NeededDetachment);
    return {
        Roster: Object.assign({}, roster, {RosterDetachments: Detachments}),
        Detachment: NeededDetachment
    }
}

const AddNewDetachment = (roster, action) => {
    let Detachments = roster.RosterDetachments.slice();
    let NewDetachment = new RosterDetachment(action.NewId,[],null,null,null,roster.id,null,null);
    Detachments.push(NewDetachment);
    let NewRoster = Object.assign({}, roster, {RosterDetachments: Detachments});
    //NewRoster = utils.recalculateRosterCost(NewRoster);
    return {
        Roster: NewRoster,
        ActiveDetachment: NewDetachment,
        Action: "Detachment Editing"
    };
}

const AddCopyDetachment = (roster, action) => {
    let Detachments = roster.RosterDetachments.slice();
    let Detach = Detachments.filter((detach) => detach.id == action.DetachmentId)[0];
    //console.log("Количество юнитов в редусере "+Detach.RosterUnits.length);
    //console.log("Чаптер тактика в редусере "+Detach.ChapterTactic);
    //console.log("детачмент в редусере "+Detach.Detachment);
    //console.log("фракция в редусере "+Detach.Faction);
    let NewDetachment = Detach.copyRosterDetachment(action.NewId, Detach);
    //NewDetachment.id = action.NewId;
    Detachments.push(NewDetachment);
    let NewRoster = Object.assign({}, roster, {RosterDetachments: Detachments});
    NewRoster = utils.recalculateRosterCost(NewRoster);
    return NewRoster;
}

const RemoveDetachment = (roster, action) => {
    let Detachments = roster.RosterDetachments.slice();
    const Detachment = Detachments.filter((detach) => detach.id == action.DetachmentId)[0];
    Detachments.splice(Detachments.indexOf(Detachment), 1);
    let NewRoster = Object.assign({}, roster, {RosterDetachments: Detachments});
    NewRoster = utils.recalculateRosterCost(NewRoster);
    return NewRoster;
}

const AddNewUnit = (roster, action) => {
    const Detachments = roster.RosterDetachments.slice();
    console.log("Количество детачментов "+Detachments.length);
    let Detachment = Detachments.filter((detach) => detach.id == action.DetachmentId)[0];
    let NewUnit = new RosterUnit(
        action.NewId,
        [],
        action.BaseUnit,
        [],
        null,
        action.DetachmentId
    );
    //console.log("Количество детачментов "+Detachments.length);
    NewUnit.Models = utils.GetRosterUnitModels(NewUnit);
    //console.log("Количество детачментов "+Detachments.length);
    Detachment.RosterUnits.push(NewUnit);
    Detachment.RosterUnits.sort(function(a,b) {
        if(a.BaseUnit.Name < b.BaseUnit.Name) {
            return -1;
        } else if(a.BaseUnit.Name > b.BaseUnit.Name) {
            return 1;
        } else {
            return 0;
        }
    });
    let NewRoster = Object.assign({}, roster, {RosterDetachments: Detachments});
    //console.log("Количество детачментов после копирования ростера"+roster.RosterDetachments.length);
    NewUnit = utils.recalculateRosterUnit(NewUnit);
    //console.log("Количество детачментов после пересчета юнита"+roster.RosterDetachments.length);
    Detachment = utils.recalculateRosterDetachment(Detachment);
    //console.log("Количество детачментов после пересчета детача"+roster.RosterDetachments.length);
    //roster.recalculateRosterCost(roster);
    //console.log("Количество детачментов после пересчета ростера"+roster.RosterDetachments.length);
    //console.log(Detachment.TotalDetachCost);
    //let NewRoster = Object.assign({}, roster, {RosterDetachments: Detachments});
    NewRoster = utils.recalculateRosterCost(NewRoster);
    //console.log("Количество детачментов после копирования ростера"+NewRoster.RosterDetachments.length);
    return {
        Roster: NewRoster,
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
    NewUnit = utils.recalculateRosterUnit(NewUnit);
    Detachment.RosterUnits.sort(function(a,b) {
        if(a.BaseUnit.Name < b.BaseUnit.Name) {
            return -1;
        } else if(a.BaseUnit.Name > b.BaseUnit.Name) {
            return 1;
        } else {
            return 0;
        }
    });
    Detachment = utils.recalculateRosterDetachment(Detachment);
    let NewRoster = Object.assign({}, roster, {RosterDetachments: Detachments});
    NewRoster = utils.recalculateRosterCost(NewRoster);
    return NewRoster;
}

const RemoveUnit = (roster, action) => {
    const Detachments = roster.RosterDetachments.slice();
    let Detachment = Detachments.filter((detach) => detach.id == action.DetachmentId)[0];
    let Unit = Detachment.RosterUnits.filter((unit) => unit.id == action.UnitId)[0];
    Detachment.RosterUnits.splice(Detachment.RosterUnits.indexOf(Unit), 1);
    Detachment = utils.recalculateRosterDetachment(Detachment);
    let NewRoster = Object.assign({}, roster, {RosterDetachments: Detachments});
    NewRoster = utils.recalculateRosterCost(NewRoster);
    return {
        Roster: NewRoster,
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