'use strict';
import * as utils from "../Scripts/CommonFunctions.js";

//<Dictionary Unit Elements>------------------------------------
export class Unit {
    constructor(id,Name,Description,MaxModelQuant,KnowsSmite,Named,UnitRoleId,IndexUnit,ExternalURL,FactionId,Image) {
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
        this.Faction = utils.GetFaction(FactionId);
        this.Models = utils.GetUnitModels(id);
        this.Image = Image;
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
        this.WargearSlots = utils.GetWargearSlots(id);
    }
}

export class WargearSlot {
    constructor(id,Name) {
        this.id = id;
        this.Name = Name;
        this.Options = utils.GetWargearOptions(id);
    }

    get DefaultWargearOption() {
        //function returns default wargear option for the current wargear slot.
        //
    }
}

export class WargearOption {
    constructor(id,Name,CountPerModel,PerXmodels,Default,LinkedOptionsId) {
        this.id = id;
        this.Name = Name;
        this.CountPerModel = CountPerModel;
        this.PerXmodels = PerXmodels;
        this.Default = Default;
        this.LinkedOptionsId = LinkedOptionsId;
        this.WargearIncluded = utils.GetWargear(id);
    }
}

export class Wargear {
    constructor(id,Name,Cost,Type,Relic,Image,ChapterTacticId) {
        this.id = id;
        this.Name = Name;
        this.Cost = (Cost) ? Cost : 0;
        this.Type = Type;
        this.Relic = Relic;
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

export class RosterModel {
    constructor(id,BaseModel,RosterUnitId,TotalCost) {
        this.id = id;
        this.BaseModel = BaseModel;
        this.RosterUnitId = RosterUnitId;
        this.TotalCost = (TotalCost) ? TotalCost : 0;
        this.RosterWargearSlots = utils.GetRosterWargearSlots(BaseModel.WargearSlots);
        //this.recalculateRosterModel = this.recalculateRosterModel.bind(this);
    }

    copyRosterModel = () => {
        let ModelCopy = new RosterModel(null,this.BaseModel,this.RosterUnitId,this.TotalCost);
        //let ModelCopy = Object.assign({}, this);
        if(!!this.RosterWargearSlots && this.RosterWargearSlots.length > 0) {
            for(let i=0;i<this.RosterWargearSlots.length;i++) {
                let Slot = this.RosterWargearSlots[i];
                let SlotCopy = Slot.copyRosterWargearSlot();
                SlotCopy.id = i+1;
                ModelCopy.RosterWargearSlots.push(SlotCopy);
            }
        }
        return ModelCopy;
    }
    /*
    recalculateRosterModel = () => {
        this.TotalCost = this.BaseModel.Cost;
        this.RosterWargearSlots.forEach((slot) =>
            slot.SelectedOption.WargearIncluded.forEach((wargear) =>
                this.TotalCost += wargear.Cost
            )
        );
        return this;
    }
    */
}

export class RosterWargearSlot {
    constructor(id,Name,WargearOption,BaseSlot) {
        this.id = id;
        this.Name = Name;
        this.SelectedOption = WargearOption;
        this.BaseSlot = BaseSlot;
    }

    copyRosterWargearSlot = () => {
        let SlotCopy = new RosterWargearSlot(null,this.Name, this.SelectedOptions);
        return SlotCopy;
    }
}

export class RosterUnit {
    constructor(id,Models,BaseUnit,SpellsSelected,TotalCost,RosterDetachmentId) {
        this.id = id;
        this.Models = Models;
        this.BaseUnit = BaseUnit;
        this.SpellsSelected = SpellsSelected;
        this.TotalCost = (TotalCost) ? TotalCost : 0;
        this.RosterDetachmentId = RosterDetachmentId;
        //this.recalculateRosterUnit = this.recalculateRosterUnit.bind(this);
    }

    copyRosterUnit = (NewId = null) => {
        let UnitCopy = new RosterUnit(NewId,[],this.BaseUnit,this.SpellsSelected,this.TotalCost,this.RosterDetachmentId);
        //let UnitCopy = Object.assign({}, this, {id: NewId, Models: []});
        if(!!this.Models && this.Models.length > 0) {
            for(let i=0;i<this.Models.length;i++) {
                let Model = this.Models[i];
                let ModelCopy = Model.copyRosterModel();
                ModelCopy.id = i+1;
                ModelCopy.RosterUnitId = UnitCopy.id;
                UnitCopy.Models.push(ModelCopy);
            }
        }
        return UnitCopy;
    }

    /*
    recalculateRosterUnit = () => {
        this.TotalCost = 0;
        this.Models.forEach((model) => 
            this.TotalCost += model.TotalCost
        );
        return this;
    }
    */
}

export class RosterDetachment {
    constructor(id,RosterUnits,ChapterTactic,Detachment,Faction,RosterId,TotalDetachCost,TotalDetachPL,TotalDetachCP) {
        this.id = id;
        this.RosterUnits = RosterUnits;
        this.ChapterTactic = ChapterTactic;
        this.Detachment = Detachment;
        this.Faction = Faction;
        this.RosterId = RosterId;
        this.TotalDetachCost = (TotalDetachCost) ? TotalDetachCost : 0;
        this.TotalDetachPL = (TotalDetachPL) ? TotalDetachPL : 0;
        this.TotalDetachCP = (TotalDetachCP) ? TotalDetachCP : 0;
        //this.copyRosterDetachment = this.copyRosterDetachment.bind(this);
    }

    
    copyRosterDetachment = (NewId = null, OldDetachment) => {
        //let OldDetachment = this;
        //let DetachmentCopy = new RosterDetachment(NewId,[],OldDetachment.ChapterTactic,OldDetachment.Detachment,OldDetachment.Faction,OldDetachment.RosterId,OldDetachment.TotalDetachCost,OldDetachment.TotalDetachPL);
        let DetachmentCopy = Object.assign({}, OldDetachment, {id: NewId, RosterUnits: []});
        //console.log("Количество юнитов "+OldDetachment.RosterUnits.length);
        //console.log("Чаптер тактика "+OldDetachment.ChapterTactic);
        //console.log("детачмент "+OldDetachment.Detachment);
        //console.log("фракция "+OldDetachment.Faction);
        if(!!OldDetachment.RosterUnits && OldDetachment.RosterUnits.length > 0) {
            for(let i=0;i<OldDetachment.RosterUnits.length;i++) {
                let Unit = OldDetachment.RosterUnits[i];
                let UnitCopy = Unit.copyRosterUnit();
                UnitCopy.id = i+1;
                UnitCopy.RosterDetachmentId = DetachmentCopy.id;
                DetachmentCopy.RosterUnits.push(UnitCopy);
            }
        }
        return DetachmentCopy;
    }

    /*
    recalculateRosterDetachment = (Detach) => {
        let TotalDetachCost = 0;
        let TotalDetachPL = 0;
        console.log("Количество юнитов до пересчета "+Detach.RosterUnits.length);
        Detach.RosterUnits.forEach(function(unit) {
                TotalDetachCost +=unit.TotalCost;
                TotalDetachPL += utils.GetUnitCurrentPowerLevel(unit.BaseUnit.PowerLevel, unit.Models.length);
            }
        );
        Detach.TotalDetachCost = TotalDetachCost;
        Detach.TotalDetachPL = TotalDetachPL
        console.log("Количество юнитов после пересчета "+Detach.RosterUnits.length);
        return Detach;
    }
    */
}

export class Roster {
    constructor(id,Name,RosterDetachments,TotalPTS,TotalPL,TotalCP,MaxPL,MaxPTS,UserId) {
        this.id = id;
        this.Name = Name;
        this.RosterDetachments = RosterDetachments;
        this.TotalPTS = (TotalPTS) ? TotalPTS : 0;
        this.TotalPL = (TotalPL) ? TotalPL : 0;
        this.TotalCP = (TotalCP) ? TotalCP : 0;
        this.MaxPL = MaxPL;
        this.MaxPTS = MaxPTS;
        this.UserId = UserId;
        //this.recalculateRosterCost = this.recalculateRosterCost.bind(this);
    }
    /*
    recalculateRosterCost = (Roster = this) => {
        console.log("Вызвали recalculateRosterCost");
       
        console.log("Имя ростера "+Roster.Name);
        console.log("Количество детачментов в методе до перебора"+Roster.RosterDetachments.length);
        let TotalPTS = 0;
        let TotalPL = 0;
        let TotalCP = 0;
       
        
        Roster.RosterDetachments.forEach(function(detach) {
            TotalPTS += detach.TotalDetachCost;
            TotalPL += detach.TotalDetachPL;
            TotalCP += detach.TotalDetachCP;
            }
        );
        
       for(let i=0;i<this.RosterDetachments.length;i++) {
            let detach = this.RosterDetachments[i];
            TotalPTS += detach.TotalDetachCost;
            TotalPL += detach.TotalDetachPL;
            TotalCP += detach.TotalDetachCP;
       }
       
        console.log("Количество детачментов в методе после перебора"+Roster.RosterDetachments.length);
        Roster.TotalPTS = TotalPTS;
        Roster.TotalPL = TotalPL;
        Roster.TotalCP = TotalCP;
        return Roster;
        
    }
    */
}
