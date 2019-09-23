import {store} from "../index.js";

export const SetUnitPsychicPowers = (SelectedSpells) => {
    let CurrentState = store.getState();

    let NewUnit = Object.assign({}, CurrentState.RosterEditing.ActiveUnit, {SpellsSelected: SelectedSpells});
    let NewRoster = Object.assign({}, CurrentState.RosterEditing.Roster);
    let NeededDetachment = NewRoster.RosterDetachments.find((detach) => detach.id == CurrentState.RosterEditing.ActiveUnit.RosterDetachmentId);
    NeededDetachment.RosterUnits.splice((NeededDetachment.RosterUnits.indexOf(NeededDetachment.RosterUnits.find((unit) => unit.id === NewUnit.id))),1,NewUnit);

    return {
        NewRoster,
        NewUnit
    };
}