import * as utils from "../Scripts/CommonFunctions.js";
import { combineReducers } from 'redux';

import {RosterUnit} from "../Classes/CommonClasses.js";
import {RosterDetachment} from "../Classes/CommonClasses.js";

const _ = require('lodash');

const Reducers = combineReducers(
                            {
                                MainMenuCategoryKey,
                                FactionSelection,
                                CurrentScrollCount,
                                PsychicPowerMenuButtons,
                                RosterEditing,
                                isLoading,
                                retrievedUnits
                            }
                        );

export default Reducers;

const RosterEditingInitialState = { 
    Action: "Roster Editing", 
    Roster: null, 
    ActiveDetachment: null, 
    ActiveUnit: null, 
    ActiveModel: null 
    }

function retrievedUnits(state = [], action){
    switch(action.type) {
        case "SetRetrievedUnits":
            return action.retrievedUnits;
        default:
            return state;
    }
}

function isLoading(state = false, action){
    switch(action.type) {
        case "SetLoading":
            return action.isLoading;
        default:
            return state;
    }
} 

function MainMenuCategoryKey(state = 1, action) {
    switch(action.type) {
        case "CategoryClick":
            return action.CategiryId;
        default:
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
            return {
                AvailableSpells: action.AvailableSpells,
                SelectedSpells: action.SelectedSpells,
                RemoveButtonLocked: action.RemoveButtonLocked,
                AddButtonLocked: action.AddButtonLocked
            };
        default:
            return state;
    }
}

function CurrentScrollCount(state = 0, action) {
    switch(action.type) {
        case "CurrentScrollCount":
            return action.CurrentScrollCount;
        default:
            return state;
    }
}


function RosterEditing(state = RosterEditingInitialState, action) {
    let Result = null;
    switch(action.type) {
        case "UnitPsychicPowers":
            Result = SetUnitPsychicPowers(state.Roster, action);
            return Object.assign({}, state, {Roster: Result.NewRoster, ActiveUnit: Result.NewUnit});
        case "SetDetachmentParameters":
            return Object.assign({}, state, {Roster: action.NewRoster, ActiveDetachment: action.NeededDetachment});
        case "NewDetachment":
            //Result = AddNewDetachment(state.Roster, action);
            return Object.assign({}, state, {Roster: action.Roster, ActiveDetachment: action.ActiveDetachment, Action: "Detachment Editing"});
        case "CopyDetachment":
            return Object.assign({}, state, {Roster: AddCopyDetachment(state.Roster, action)});
        case "DeleteDetachment":
            Result = RemoveDetachment(state.Roster,state.ActiveDetachment, state.ActiveUnit, state.ActiveModel, state.Action, action)
            return Object.assign({}, state, {
                Roster: Result.Roster, 
                ActiveDetachment: Result.ActiveDetachment, 
                ActiveUnit: Result.ActiveUnit,
                ActiveModel: Result.ActiveModel,
                Action: Result.RosterAction
            });
        case "AddNewUnit":
            Result = AddNewUnit(state.Roster, action);
            return Object.assign({}, state, {Roster:Result.Roster, ActiveUnit: Result.Unit});
        case "ActiveUnit":
            Result = SetActiveUnit(action);
            return Object.assign({}, state, {ActiveUnit: Result.Unit, ActiveModel: Result.Model});
        case "CopyUnit":
            return Object.assign({}, state, {Roster: AddUnitCopy(state.Roster, action)});
        case "DeleteUnit":
            Result = RemoveUnit(state.Roster, state.ActiveUnit, state.Action, action);
            return Object.assign({}, state, {Action: Result.Action, Roster: Result.Roster});
        case "RosterAction":
            return Object.assign({}, state, {Action: SetRosterAction(action)});
            /*
        case "RosterName":
            return Object.assign({}, state, {Roster: SetRosterName(state.Roster, action)});
        case "RosterMaxPL":
            return Object.assign({}, state, {Roster: SetRosterMaxPL(state.Roster, action)});
        case "RosterMaxPTS":
            return Object.assign({}, state, {Roster: SetRosterMaxPTS(state.Roster, action)});
            */
        case "UpdateRoster":
            return Object.assign({}, state, {Roster: action.Roster});
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
            return Object.assign({}, state, {Roster: NewRoster(action), ActiveUnit: null, ActiveModel: null, ActiveDetachment: null, Action: "Roster Editing"});
        case "SetUnitAsWarlord":
            Result = SetUnitAsWarlord(state.ActiveModel, state.ActiveUnit, state.Roster, action);
            return Object.assign({}, state, {ActiveModel: Result.NewModel, ActiveUnit: Result.NewUnit, Roster: Result.NewRoster});
        case "SetUnitWarlordTrait":
            Result = SetUnitWarlordTrait(state.ActiveModel, state.ActiveUnit, state.Roster, action);
            return Object.assign({}, state, {ActiveModel: Result.NewModel, ActiveUnit: Result.NewUnit, Roster: Result.NewRoster});
        case "SetUnitRelic":
            Result = SetUnitRelic(state.ActiveModel, state.ActiveUnit, state.Roster, action);
            return Object.assign({}, state, {ActiveModel: Result.NewModel, ActiveUnit: Result.NewUnit, Roster: Result.NewRoster});
        default:
            
            return (!!state) ? state : {
                Action: "Roster Editing",
                Roster: null,		
                ActiveDetachment: null,
                ActiveUnit: null			
            };
    }
}

const SetUnitRelic = (ActiveModel, ActiveUnit, roster, action) => {
    let NewModel = Object.assign({}, ActiveModel);
    let NewUnit = Object.assign({}, ActiveUnit, {ChosenRelic: action.ChosenRelic});
    let NewRoster = Object.assign({}, roster, {Warlord : NewUnit});
    let NeededDetachment;
    NewRoster.RosterDetachments.forEach(function(detachment) {
        if (detachment.RosterUnits.indexOf(ActiveUnit) != -1) {
            NeededDetachment = detachment;
        }
    });
    NeededDetachment.RosterUnits.splice(NeededDetachment.RosterUnits.indexOf(NeededDetachment.RosterUnits.filter((unit) => unit.id === NewUnit.id)[0]),1,NewUnit);
    return  {
        NewModel,
        NewUnit,
        NewRoster
    }
} 

const SetUnitWarlordTrait = (ActiveModel, ActiveUnit, roster, action) => {
    let NewModel = Object.assign({}, ActiveModel);
    let NewUnit = Object.assign({}, ActiveUnit, {ChosenWarlordTrait: action.ChosenTrait});
    let NewRoster = Object.assign({}, roster, {Warlord : NewUnit});
    let NeededDetachment;
    NewRoster.RosterDetachments.forEach(function(detachment) {
        if (detachment.RosterUnits.indexOf(ActiveUnit) != -1) {
            NeededDetachment = detachment;
        }
    });
    NeededDetachment.RosterUnits.splice(NeededDetachment.RosterUnits.indexOf(NeededDetachment.RosterUnits.filter((unit) => unit.id === NewUnit.id)[0]),1,NewUnit);
    return  {
        NewModel,
        NewUnit,
        NewRoster
    }
} 

const SetUnitAsWarlord = (ActiveModel, ActiveUnit, roster, action) => {
    let NeededDetachment;
    let NewModel = Object.assign({}, ActiveModel);
    let NewUnit = Object.assign({}, ActiveUnit, {Warlord: action.WarlordCheckbox});
    let NewRoster = Object.assign({}, roster, {Warlord : (action.WarlordCheckbox ? NewUnit : null)});

    if (!!roster.Warlord && roster.Warlord != ActiveUnit) {
        let PrevWarlord = Object.assign({}, roster.Warlord, {Warlord: false, ChosenWarlordTrait: null});
        NewRoster.RosterDetachments.forEach(function(detachment) {
            if (detachment.RosterUnits.indexOf(roster.Warlord) != -1) {
                NeededDetachment = detachment;
            }
        });
        NeededDetachment.RosterUnits.splice(NeededDetachment.RosterUnits.indexOf(NeededDetachment.RosterUnits.filter((unit) => unit.id === PrevWarlord.id)[0]),1,PrevWarlord);
    }

    NewRoster.RosterDetachments.forEach(function(detachment) {
        if (detachment.RosterUnits.indexOf(ActiveUnit) != -1) {
            NeededDetachment = detachment;
        }
    });
    NeededDetachment.RosterUnits.splice(NeededDetachment.RosterUnits.indexOf(NeededDetachment.RosterUnits.filter((unit) => unit.id === NewUnit.id)[0]),1,NewUnit);
    return  {
        NewModel,
        NewUnit,
        NewRoster
    }
} 

const UpdateModelWargear = (ActiveModel, ActiveUnit, roster, action) => {
    let NewModel = Object.assign({}, ActiveModel, {RosterWargearSlots: action.WargearSlots});
    NewModel = utils.recalculateRosterModel(NewModel);
    ActiveUnit.Models.splice(ActiveUnit.Models.indexOf(ActiveUnit.Models.filter((model) => model.id == NewModel.id)[0]), 1, NewModel);
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
    NeededDetachment.RosterUnits.splice(NeededDetachment.RosterUnits.indexOf(NeededDetachment.RosterUnits.filter((unit) => unit.id === NewUnit.id)[0]),1,NewUnit);
    NewUnit = utils.recalculateRosterUnit(NewUnit);
    NeededDetachment = utils.recalculateRosterDetachment(NeededDetachment);
    ReturningRoster = utils.recalculateRosterCost(ReturningRoster);
    return  {
        roster: ReturningRoster,
        activeUnit: NewUnit
    };
}

const SetUnitPsychicPowers = (roster, action) => {
    let NewUnit = Object.assign({}, action.CurrentUnit, {SpellsSelected: action.SelectedSpells});
    let NewRoster = Object.assign({}, roster);
    let NeededDetachment = NewRoster.RosterDetachments.find((detach) => detach.id == action.CurrentUnit.RosterDetachmentId);
    NeededDetachment.RosterUnits.splice((NeededDetachment.RosterUnits.indexOf(NeededDetachment.RosterUnits.find((unit) => unit.id === NewUnit.id))),1,NewUnit);

    return {
        NewRoster,
        NewUnit
    };
}

const AddNewDetachment = (roster, action) => {
    let Detachments = roster.RosterDetachments.slice();
    let NewDetachment = new RosterDetachment(action.NewId,[],null,null,null,roster.id,null,null);
    Detachments.push(NewDetachment);
    let NewRoster = Object.assign({}, roster, {RosterDetachments: Detachments});
    return {
        Roster: NewRoster,
        ActiveDetachment: NewDetachment,
        Action: "Detachment Editing"
    };
}

const AddCopyDetachment = (roster, action) => {
    let Detachments = roster.RosterDetachments.slice();
    let Detach = Detachments.find((detach) => detach.id == action.DetachmentId);
    let NewDetachment = Detach.copyRosterDetachment(action.NewId, Detach);
    Detachments.push(NewDetachment);
    let NewRoster = Object.assign({}, roster, {RosterDetachments: Detachments});
    NewRoster = utils.recalculateRosterCost(NewRoster);
    return NewRoster;
}

const RemoveDetachment = (roster, ActiveDetachment, ActiveUnit, ActiveModel, RosterAction, action) => {
    let Detachments = roster.RosterDetachments.slice();
    if(!_.isEmpty(Detachments)) {
        //Проверяем что детачменты не пусты
        const Detachment = Detachments.find((detach) => detach.id == action.DetachmentId);
        if(!_.isEmpty(Detachment)) {
            //Проверяем что детачмент найден
            if(ActiveDetachment.id == Detachment.id) {
                //Если удаляем активный детачмент - затираем активных юнит, модель и тд.
                ActiveDetachment = null;
                ActiveUnit =null;
                ActiveModel = null;
            }
            Detachments.splice(Detachments.indexOf(Detachment), 1);
            if(_.isEmpty(Detachments)) {
                //Если детачменты пусты - ставим состояние "Редактирование ростера"
                RosterAction = "Roster Editing";
            } else {
                if(_.isEmpty(ActiveDetachment)) {
                    //Выбираем новый активный детачмент и ставим состояние в "Редактирование детачмента" если детачменты не пусты
                    ActiveDetachment = Detachments[0];
                    RosterAction = "Detachment Editing";
                }
            }
            let NewRoster = Object.assign({}, roster, {RosterDetachments: Detachments});
            NewRoster = utils.recalculateRosterCost(NewRoster);
            return {
                Roster: NewRoster,
                ActiveDetachment,
                ActiveUnit,
                ActiveModel,
                RosterAction
            };
        }
    } else {
        return {
            Roster: roster,
            ActiveDetachment,
            ActiveUnit,
            ActiveModel,
            RosterAction
        };
    }
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
    NewUnit = utils.recalculateRosterUnit(NewUnit);
    Detachment = utils.recalculateRosterDetachment(Detachment);
    NewRoster = utils.recalculateRosterCost(NewRoster);
    return {
        Roster: NewRoster,
        Unit: NewUnit
    }
}

const SetActiveUnit = (action) => {


    return {
       Unit: action.ActiveUnit,
       Model: (!action.ActiveUnit) ? null : ((action.ActiveUnit.BaseUnit.MaxModelQuant > 1) ? null : action.ActiveUnit.Models[0])
    }
}

const AddUnitCopy = (roster, action) => {
    const Detachments = roster.RosterDetachments.slice();
    let Detachment = Detachments.find((detach) => detach.id == action.DetachmentId);
    let OriginalUnit = Detachment.RosterUnits.find((unit) => unit.id == action.UnitId);
    let NewUnit = OriginalUnit.copyRosterUnit(action.NewId,OriginalUnit);
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

const RemoveUnit = (roster, ActiveUnit, RosterAction, action) => {
    const Detachments = roster.RosterDetachments.slice();
    let Detachment = Detachments.find((detach) => detach.id == action.DetachmentId);
    let Unit = Detachment.RosterUnits.find((unit) => unit.id == action.UnitId);
    Detachment.RosterUnits.splice(Detachment.RosterUnits.indexOf(Unit), 1);
    Detachment = utils.recalculateRosterDetachment(Detachment);
    let NewRoster = Object.assign({}, roster, {RosterDetachments: Detachments});
    NewRoster = utils.recalculateRosterCost(NewRoster);
    if(!!ActiveUnit && ActiveUnit.id == action.UnitId && ActiveUnit.RosterDetachmentId == action.DetachmentId) {
        ActiveUnit = null;
        RosterAction = "Detachment Editing";
    }
    return {
        Roster: NewRoster,
        Action: RosterAction,
        ActiveUnit: ActiveUnit
    };
}

const SetRosterAction = (action) => {
    return action.ActionNAme;
}
/*
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
*/
const SetActiveDetachment = (action) => {
    return action.ActiveDetachment;
}

const NewRoster = (action) => {
    return action.Roster;
}