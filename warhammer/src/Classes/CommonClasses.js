'use strict';
import * as utils from "../Scripts/CommonFunctions.js";

//<Dictionary Unit Elements>------------------------------------
export class Unit {
    constructor(id,Name,Description,MaxModelQuant,KnowsSmite,Named,UnitRoleId,IndexUnit,ExternalURL,FactionId) {
        this.id = id;
        this.Name = Name;
        this.Description = Description;
        this.MaxModelQuant = MaxModelQuant;
        this.KnowsSmite = KnowsSmite;
        this.Named = Named;
        this.WarlordTrait = utils.GetWarlordTrait(id);
        this.NumberOfSpells = utils.GetNumberOfSpells(id);
        this.AvailableSpells = utils.GetAvailableSpells(id);
        this.UnitRole = utils.GetUnitRole(UnitRoleId);//this function can be used for Unit and for DetachmentOption
        this.IndexUnit = IndexUnit;
        this.ExternalURL = ExternalURL;
        this.PowerLevel = utils.GetUnitPowerLevel(id);
        this.FactionId = FactionId;
    }

    get DefaultUnitmodels() {
    //this function returns default set of models from database for the current unit.
    //
    }
}

export class NumberOfSpells {
    constructor(id,NumberOfModels,NumberOfSpells) {
        this.id = id;
        this.NumberOfModels = NumberOfModels;
        this.NumberOfSpells = NumberOfSpells;
    }
}

export class PsychicPower {
    constructor(id,Name,DisciplineName) {
        this.id = id;
        this.Name = Name;
        this.DisciplineName = DisciplineName;
    }
}

export class UnitPowerLevel {
    constructor(id,PowerLevel,NumberOfModels) {
        this.id = id;
        this.PowerLevel = PowerLevel;
        this.NumberOfModels = NumberOfModels;
    }
}

export class WarlordTrait {
    constructor(id,Name,Description) {
        this.id = id;
        this.Name = Name;
        this.Description = Description;
    }
}

export class UnitRole {
    constructor(id,Name,Image) {
        this.id = id;
        this.Name = Name;
        this.Image = Image;
    }
}

//<Dictionary Model Elements>------------------------------------
export class Model {
    constructor(id,Name,Cost,MaxQuant,MinQuant,ModelsIncluding,UnitId) {
        this.id = id;
        this.Name = Name;
        this.Cost = Cost;
        this.MaxQuant = MaxQuant;
        this.MinQuant = MinQuant;
        this.ModelsIncluding = ModelsIncluding;
        this.UnitId = UnitId;
        //this.WargearSlots = utils.GetWargearSlots(id);
    }
}

export class WargearSlot {
    constructor(id,Name) {
        this.id = id;
        this.Name = Name;
        this.Options = utils.GetWargearOption(id);
    }

    get DefaultWargearOption() {
        //function returns default wargear option for the current wargear slot.
        //
    }
}

export class WargearOption {
    constructor(id,Name,CountPerModel,PerXmodels,LinkedOptionsId) {
        this.id = id;
        this.Name = Name;
        this.CountPerModel = CountPerModel;
        this.PerXmodels = PerXmodels;
        this.LinkedOptionsId = LinkedOptionsId;
        //this.WargearIncluded = utils.GetWargearForOption(id);
    }
}

export class Wargear {
    constructor(id,Name,Cost,Type,Relic,Default,Image,ChapterTacticId) {
        this.id = id;
        this.Name = Name;
        this.Cost = Cost;
        this.Type = Type;
        this.Relic = Relic;
        this.Default = Default;
        this.Image = Image;
        this.ChapterTacticId = ChapterTacticId;
    }
}

//<Dictionary Faction Elements>------------------------------------

export class Faction {
    constructor(id,Name,CodexImage,IndexImage,FactionLogo) {
        this.id = id;
        this.Name = Name;
        this.CodexImage = CodexImage;
        this.IndexImage = IndexImage;
        this.FactionLogo = FactionLogo;
        this.ChapterTactics = utils.GetChapterTactics(id);
    }
}

export class ChapterTactic {
    constructor(id,Name) {
        this.id = id;
        this.Name = Name;
    }
}

//<Dictionary Core Elements>------------------------------------

export class Detachment {
    constructor(id,Name,CommandBenefit,Restrictions,Image) {
        this.id = id;
        this.Name = Name;
        this.CommandBenefit = CommandBenefit;
        this.Restrictions = Restrictions;
        this.Image = Image;
        this.DetachOptions = utils.GetDetachmentOptions(id);
    }
}

export class DetachmentOption {
    constructor(id,UnitRoleId,MaxQuant,MinQuant) {
        this.id = id;
        this.UnitRole = utils.GetUnitRole(UnitRoleId);
        this.MaxQuant = MaxQuant;
        this.MinQuant = MinQuant;
    }
}

//<Roster creation Unit Elements>------------------------------------
/*
export class RosterModel {
    constructor(id,BaseModel,RosterUnitId,TotalCost) {
        this.id = id;
        this.BaseModel = BaseModel;
        this.RosterUnitId = RosterUnitId;
        this.TotalCost = TotalCost;
        this.RosterWargearSlots = utils.GetRosterWargearSlots(BaseModel.WargearSlots);
    }
}

export class RosterWargearSlot {
    constructor(id,Name,WargearOption) {
        this.id = id;
        this.Name = Name;
        this.SelectedOptions = WargearOption;
    }
}

export class RosterUnit {
    constructor(id,Models,BaseUnit,SpellsSelected,TotalCost,RosterDetachmentId) {
        this.id = id;
        this.Models = Models;
        this.BaseUnit = BaseUnit;
        this.SpellsSelected = SpellsSelected;
        this.TotalCost = TotalCost;
        this.RosterDetachmentId = RosterDetachmentId;
    }
}

export class RosterDetachment {
    constructor(id,RosterUnits,ChapterTactic,Detachment,Faction,RosterId,TotalDetachCost,TotalDetachPL) {
        this.id = id;
        this.RosterUnits = RosterUnits;
        this.ChapterTactic = ChapterTactic;
        this.Detachment = Detachment;
        this.Faction = Faction;
        this.RosterId = RosterId;
        this.TotalDetachCost = TotalDetachCost;
        this.TotalDetachPL = TotalDetachPL;
    }
}

export class Roster {
    constructor(id,Name,RosterDetachments,TotalPTS,TotalPL,TotalCP,MaxPL,MaxPTS,UserId) {
        this.id = id;
        this.Name = Name;
        this.RosterDetachments = RosterDetachments;
        this.TotalPTS = TotalPTS;
        this.TotalPL = TotalPL;
        this.TotalCP = TotalCP;
        this.MaxPL = MaxPL;
        this.MaxPTS = MaxPTS;
        this.UserId = UserId;
    }
}
*/