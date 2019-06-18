export function CategoryClick(CategiryId) {
    return {
        type: "CategoryClick",
        CategiryId: CategiryId
    }
}

export function FactionSelectionWindow(FlagValue) {
    return {
        type: "FactionSelectionWindow",
        FlagValue: FlagValue
    }
}

export function PsychicPowerMenuButtons(RemoveButtonLocked, AddButtonLocked) {
    return {
        type: "PsychicPowerMenuButtons",
        RemoveButtonLocked: RemoveButtonLocked,
        AddButtonLocked: AddButtonLocked
    }
}

export function UnitPsychicPowers(Unit, AvailableSpells, SelectedSpells, RemoveButtonLocked, AddButtonLocked) {
    return {
        type: "UnitPsychicPowers",
        Unit: Unit,
        AvailableSpells: AvailableSpells,
        SelectedSpells: SelectedSpells,
        RemoveButtonLocked: RemoveButtonLocked,
        AddButtonLocked: AddButtonLocked
    }
}

//??? Нужно проверить необходимость этого экшена
export function UnitSelection(BaseUnit) {
    return {
        type: "UnitSelection",
        BaseUnit: BaseUnit
    }
}
//???

export function DetachmentFaction(DetachmentId, Faction) {
    return {
        type: "DetachmentFaction",
        Faction: Faction,
        DetachmentId: DetachmentId
    }
}

export function DetachmentType(DetachmentId, DetachmentType) {
    return {
        type: "DetachmentType",
        DetachmentType: DetachmentType,
        DetachmentId: DetachmentId
    }
}

export function ChapterTactic(DetachmentId, ChapterTactic) {
    return {
        type: "ChapterTactic",
        ChapterTactic: ChapterTactic,
        DetachmentId: DetachmentId
    }
}

export function NewDetachment(NewId) {
    return {
        type: "NewDetachment",
        NewId: NewId
    }
}
/*WTF???
export function NewDetachment(DetachmentId, NewId) {
    return {
        type: "NewDetachment",
        DetachmentId: DetachmentId,
        NewId: NewId
    }
}
*/

export function CopyDetachment(DetachmentId, NewId) {
    return {
        type: "CopyDetachment",
        DetachmentId: DetachmentId,
        NewId: NewId
    }
}

export function DeleteDetachment(DetachmentId) {
    return {
        type: "DeleteDetachment",
        DetachmentId: DetachmentId
    }
}

export function AddNewUnit(DetachmentId, NewId, BaseUnit) {
    return {
        type: "AddNewUnit",
        DetachmentId: DetachmentId,
        NewId: NewId,
        BaseUnit: BaseUnit
    }
}
//Скорее всего не нужен
export function EditUnit(Unit) {
    return {
        type: "EditUnit",
        Unit: Unit
    }
}

export function CopyUnit(DetachmentId, UnitId, NewId) {
    return {
        type: "CopyUnit",
        DetachmentId: DetachmentId,
        UnitId: UnitId,
        NewId: NewId
    }
}

export function DeleteUnit(DetachmentId, UnitId) {
    return {
        type: "DeleteUnit",
        DetachmentId: DetachmentId,
        UnitId: UnitId
    }
}

export function RosterAction(ActionNAme) {
    return {
        type: "RosterAction",
        ActionNAme: ActionNAme
    }
}

export function RosterName(RosterName) {
    return {
        type: "RosterName",
        RosterName: RosterName
    }
}

export function RosterMaxPL(RosterMaxPL) {
    return {
        type: "RosterMaxPL",
        RosterMaxPL: RosterMaxPL
    }
}

export function RosterMaxPTS(RosterMaxPTS) {
    return {
        type: "RosterMaxPTS",
        RosterMaxPTS: RosterMaxPTS
    }
}

export function ActiveUnit(ActiveUnit) {
    return {
        type: "ActiveUnit",
        ActiveUnit: ActiveUnit
    }
}

export function ActiveDetachment(ActiveDetachment) {
    return {
        type: "ActiveDetachment",
        ActiveDetachment: ActiveDetachment
    }
}

export function NewRoster(Roster) {
    return {
        type: "NewRoster",
        Roster: Roster
    }
}