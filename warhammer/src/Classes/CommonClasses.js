'use strict';

//<Dictionary Unit Elements>------------------------------------
class Unit {
    constructor(id,Name,Description,MaxModelQuant,KnowsSmite,Named,UnitRoleId,IndexUnit,ExternalURL,FactionId) {
        this.id = id;
        this.Name = Name;
        this.Description = Description;
        this.MaxModelQuant = MaxModelQuant;
        this.KnowsSmite = KnowsSmite;
        this.Named = Named;
        this.WarlordTrait = GetWarlordTrait(id);
        this.NumberOfSpells = GetNumberOfSpells(id);
        this.AvailableSpells = GetAvailableSpells(id);
        this.UnitRole = GetUnitRole(UnitRoleId);//this function can be used for Unit and for DetachmentOption
        this.IndexUnit = IndexUnit;
        this.ExternalURL = ExternalURL;
        this.PowerLevel = GetPowerLevel(id);
        this.FactionId = FactionId;
    }

    get DefaultUnitmodels() {
    //this function returns default set of models from database for the current unit.
    //
    }
}

class NumberOfSpells {
    constructor(id,NumberOfModels,NumberOfSpells) {
        this.id = id;
        this.NumberOfModels = NumberOfModels;
        this.NumberOfSpells = NumberOfSpells;
    }
}

class PsychicPower {
    constructor(id,Name,DisciplineName) {
        this.id = id;
        this.Name = Name;
        this.DisciplineName = DisciplineName;
    }
}

class UnitPowerLevel {
    constructor(id,PowerLevel,NumberOfModels) {
        this.id = id;
        this.PowerLevel = PowerLevel;
        this.NumberOfModels = NumberOfModels;
    }
}

class WarlordTrait {
    constructor(id,Name,Description) {
        this.id = id;
        this.Name = Name;
        this.Description = Description;
    }
}

class UnitRole {
    constructor(id,Name,Image) {
        this.id = id;
        this.Name = Name;
        this.Image = Image;
    }
}

//<Dictionary Model Elements>------------------------------------
class Model {
    constructor(id,Name,Cost,MaxQuant,MinQuant,ModelsIncluding,UnitId) {
        this.id = id;
        this.Name = Name;
        this.Cost = Cost;
        this.MaxQuant = MaxQuant;
        this.MinQuant = MinQuant;
        this.ModelsIncluding = ModelsIncluding;
        this.UnitId = UnitId;
        this.WargearSlots = GetWargearSlots(id);
    }
}

class WargearSlot {
    constructor(id,Name) {
        this.id = id;
        this.Name = Name;
        this.Options = GetWargearOptions(id);
    }

    get DefaultWargearOption() {
        //function returns default wargear option for the current wargear slot.
        //
    }
}

class WargearOption {
    constructor(id,Name,CountPerModel,PerXmodels,LinkedOptionsId) {
        this.id = id;
        this.Name = Name;
        this.CountPerModel = CountPerModel;
        this.PerXmodels = PerXmodels;
        this.LinkedOptionsId = LinkedOptionsId;
        this.WargearIncluded = GetWargearForOption(id);
    }
}

class Wargear {
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

class Faction {
    constructor(id,Name,CodexImage,IndexImage,FactionLogo) {
        this.id = id;
        this.Name = Name;
        this.CodexImage = CodexImage;
        this.IndexImage = IndexImage;
        this.FactionLogo = FactionLogo;
        this.ChapterTactics = GetChapterTactics(id);
    }
}

class ChapterTactic {
    constructor(id,Name) {
        this.id = id;
        this.Name = Name;
    }
}

//<Dictionary Core Elements>------------------------------------

class Detachment {
    constructor(id,Name,CommandBenefit,Restrictions,Image) {
        this.id = id;
        this.Name = Name;
        this.CommandBenefit = CommandBenefit;
        this.Restrictions = Restrictions;
        this.Image = Image;
        this.DetachOptions = GetDetachOptions(id);
    }
}

class DetachmentOption {
    constructor(id,UnitRoleId,MaxQuant,MinQuant) {
        this.id = id;
        this.UnitRole = GetUnitRole(UnitRoleId);
        this.MaxQuant = MaxQuant;
        this.MinQuant = MinQuant;
    }
}

//<Roster creation Unit Elements>------------------------------------

class RosterModel {
    constructor(id,BaseModel,RosterUnitId,TotalCost) {
        this.id = id;
        this.BaseModel = BaseModel;
        this.RosterUnitId = RosterUnitId;
        this.TotalCost = TotalCost;
        this.RosterWargearSlots = GetRosterWargearSlots(BaseModel.WargearSlots);
    }
}

class RosterWargearSlot {
    constructor(id,Name,WargearOption) {
        this.id = id;
        this.Name = Name;
        this.SelectedOptions = WargearOption;
    }
}

class RosterUnit {
    constructor(id,Models,BaseUnit,SpellsSelected,TotalCost,RosterDetachmentId) {
        this.id = id;
        this.Models = Models;
        this.BaseUnit = BaseUnit;
        this.SpellsSelected = SpellsSelected;
        this.TotalCost = TotalCost;
        this.RosterDetachmentId = RosterDetachmentId;
    }
}

class RosterDetachment {
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

class Roster {
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
