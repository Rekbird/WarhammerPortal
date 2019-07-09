import {PsychicPower} from "../Classes/CommonClasses.js";
import {UnitPowerLevel} from "../Classes/CommonClasses.js";
import {WargearSlot} from "../Classes/CommonClasses.js";
import {WargearOption} from "../Classes/CommonClasses.js";
import {Wargear} from "../Classes/CommonClasses.js";
import {DetachmentOption} from "../Classes/CommonClasses.js";
import {Detachment} from "../Classes/CommonClasses.js";
import {Faction} from "../Classes/CommonClasses.js";
import {ChapterTactic} from "../Classes/CommonClasses.js";
import {Model} from "../Classes/CommonClasses.js";
import {Unit} from "../Classes/CommonClasses.js";
import {NumberOfSpells} from "../Classes/CommonClasses.js";
import {RosterWargearSlot} from "../Classes/CommonClasses.js";
import {RosterModel} from "../Classes/CommonClasses.js";
import {UnitRole} from "../Classes/CommonClasses.js";
import {WarlordTrait} from "../Classes/CommonClasses.js";
import GetFactionUnitsByRole from "./GetFactionUnitsByRole";
import ReturnUnits from "../Data/Units/Units.js";
import ReturnUnitRoles from "../Data/UnitRoles/UnitRoles.js";
import GetFactionUnits from "./GetFactionUnits.js";
import ReturnFactions from "../Data/FactionImages/FactionImages.js";
import ReturnUnitPsuchicPowers from "../Data/PsychicPowers/UnitPsychicPowers.js";
import ReturnNumbersOfSpells from "../Data/PsychicPowers/NumbersOfSpells.js";
import ReturnUnitModels from "../Data/ModelObjects/UnitModels.js";
import ReturnWarlordTraits from "../Data/WarlordTraits/WarlordTraits.js"
import ReturnWargearSlots from "../Data/WargearSlots/WargearSlots.js";
import ReturnWargearOptions from "../Data/WargearSlots/WargearOptions.js";
import ReturnWargear from "../Data/WargearSlots/Wargear.js";
import ReturnDetachments from "../Data/Detachments/Detachments.js"

export function GetWarlordTraits(FactionId, ChapterTacticId) {

    let WarlordTraits = ReturnWarlordTraits(FactionId, ChapterTacticId);
    let ReturnedTraits = [];
    if (!!WarlordTraits && WarlordTraits.length > 0) {
        WarlordTraits.forEach(trait => {
            let NewWarlordTrait = new WarlordTrait(trait.id, trait.Name, trait.Description);
            ReturnedTraits.push(NewWarlordTrait);
        });
    }
    return ReturnedTraits;
}


export function GetNumberOfSpells(UnitId) {
    
    let ReturnedNumberOfSpells = [];
    let NumberOfSpellsFromBase = [];
    //Селект из базы по юнит айди
    if (!!UnitId) {
        NumberOfSpellsFromBase = ReturnNumbersOfSpells(UnitId);
    }

    //Эмуляция вызова
    if(NumberOfSpellsFromBase && NumberOfSpellsFromBase.length > 0) {
        
        for(let i=0;i<NumberOfSpellsFromBase.length;i++) {
            ReturnedNumberOfSpells.push(new NumberOfSpells(NumberOfSpellsFromBase[i].id,NumberOfSpellsFromBase[i].NumberOfModels,NumberOfSpellsFromBase[i].NumberOfSpells))
        }
         
    }
    return ReturnedNumberOfSpells;
}

export const GetCurrentNumberOfSpells = (NumberOfSpellsList, ModelsCount) => {
    let UnitNumberOfSpells = 0;
    if(ModelsCount) {
        NumberOfSpellsList.sort(function(a,b) {
            if(a.NumberOfModels < b.NumberOfModels) {
                return -1;
            } else if(a.NumberOfModels > b.NumberOfModels) {
                return 1;
            } else {
                return 0;
            }
        });
        for(let i=0;i<NumberOfSpellsList.length;i++) {
            let item = NumberOfSpellsList[i];
            if(NumberOfSpellsList[i+1]) {
                if(ModelsCount >= item.NumberOfModels && ModelsCount < NumberOfSpellsList[i+1].NumberOfModels) {
                    UnitNumberOfSpells = item.NumberOfSpells;
                    break;
                }
            } else {
                UnitNumberOfSpells = item.NumberOfSpells;
            }
        }
    }
    return UnitNumberOfSpells;
}


export function GetAvailableSpells(UnitId) {
    let ReturnedPsychicPowers = [];
    //Эмуляция вызова
    
    const Spells = ReturnUnitPsuchicPowers(UnitId);
    //Эмуляция вызова
    
    Spells.forEach(function(spell) {
            ReturnedPsychicPowers.push(new PsychicPower(spell.id,spell.Name,spell.DisciplineName));
        }
    );
    return ReturnedPsychicPowers;
}

export const GetUnits = (FactionId, RoleId) => {
    let DictionaryUnits = GetFactionUnitsByRole(FactionId, RoleId);
    let ReturnedUnits = [];

    DictionaryUnits.forEach((element) =>
        ReturnedUnits.push(
            new Unit(
                element.id,
                element.Name,
                element.Description,
                element.MaxModelQuantity,
                element.KnowsSmite,
                element.Named,
                element.WarlordTraitId,
                element.UnitRole.id,
                false,
                element.ForeignLink,
                element.Faction.id,
                element.Image
            )
        )
    );
    return ReturnedUnits;
}

export const GetUnitRoles = () => {
    const DictionaryRoles = ReturnUnitRoles();
    let ReturnedRoles = [];

    DictionaryRoles.forEach((element) =>
        ReturnedRoles.push(
            new UnitRole(
                element.id,
                element.Name,
                element.Image
            )
        )
    )
    return ReturnedRoles;
}

export const GetAvailableRoles = (FactionId) => {
    const Units = GetFactionUnits(FactionId);
    let Roles =[];
    for(let j=0;j<Units.length;j++) {
        let Unit = Units[j];
         Roles.push(Unit.UnitRole);
    }
    let ReturnedRoles = [];
    if(Roles && (Roles.length > 0)) {
        for(let i=0;i<Roles.length;i++) {
            let Role = Roles[i];
            if(ReturnedRoles.indexOf(Role) == -1) {
                ReturnedRoles.push(Role);
            }
        }
    }
    return ReturnedRoles;
}

export function GetUnitRole(RoleId) {
   
    let UnitRoles = GetUnitRoles();
    let ReturnedUnitRole = UnitRoles.filter((role) => role.id == RoleId)[0];
    return ReturnedUnitRole;
}

export function GetUnitPowerLevel(UnitId) {
    let UnitPowerLevels =[];
    let ReturnedUnitPowerLevels = [];

    let PowerLevel1 = {
        id:1,
        PowerLevel:5,
        NumberOfModels: 5
    };
    UnitPowerLevels.push(PowerLevel1);

    let PowerLevel2 = {
        id:1,
        PowerLevel:10,
        NumberOfModels: 10
    };
    UnitPowerLevels.push(PowerLevel2);

    for(let i=0;i<UnitPowerLevels.length;i++) {
        ReturnedUnitPowerLevels.push(new UnitPowerLevel(UnitPowerLevels[i].id,UnitPowerLevels[i].PowerLevel,UnitPowerLevels[i].NumberOfModels));
    }
    return ReturnedUnitPowerLevels;
}

export function GetUnitModels(UnitId) {
    let ReturnedModels = [];
    let UnitModels = ReturnUnitModels(UnitId);

    for(let i=0;i<UnitModels.length;i++) {
        ReturnedModels.push(new Model(UnitModels[i].id,UnitModels[i].Name,UnitModels[i].Cost,UnitModels[i].MaxQuant,UnitModels[i].MinQuant,UnitModels[i].ModelsIncluding,UnitModels[i].PerXmodels,UnitModels[i].UnitId));
    }
    return ReturnedModels;
}



export function GetWargearSlots(ModelId) {
    let ReturnedWargearSlots = [];
    let WargearSlots = ReturnWargearSlots(ModelId);

    WargearSlots.forEach(function(element) {
        ReturnedWargearSlots.push(new WargearSlot(element.id,element.Name));
    });
    return ReturnedWargearSlots;
}

export function GetWargearOptions(SlotId) {
    let ReturnedWargearOptions = [];
    let WargearOptions = ReturnWargearOptions(SlotId);

    WargearOptions.forEach(function(option) {
            ReturnedWargearOptions.push(new WargearOption(
                option.id,
                option.Name,
                option.CountPerModel,
                option.PerXmodels,
                option.Default,
                option.LinkedOptionsId,
                option.UpToXModels,
                option.WargearIds
                )
            );
        }
    );
    return ReturnedWargearOptions;
}

// export default GetWargearOption;

export function GetWargear(WargearIds) {
    let ReturnedWargears = [];
    let Wargears = ReturnWargear(WargearIds);

    Wargears.forEach(function(wargear) {
            ReturnedWargears.push(
                new Wargear(
                    wargear.id,
                    wargear.Name,
                    wargear.Cost,
                    wargear.Type,
                    wargear.Relic,
                    wargear.Image,
                    wargear.ChapterTacticId
                )
            );
    });
    return ReturnedWargears;
}

export function GetRosterWargearSlots(BaseWargearSlots) {
    let ReturnedSlots = [];
    if (!!BaseWargearSlots && BaseWargearSlots.length > 0) {
        let count = 1;
        for (let i = 0; i < BaseWargearSlots.length; i++) {

            const SelectedOption = BaseWargearSlots[i].Options.filter(Option => Option.Default == true);

            let CurrentSlot = new RosterWargearSlot(count, BaseWargearSlots[i].Name, SelectedOption[0], BaseWargearSlots[i]);
            ReturnedSlots.push(CurrentSlot);
            count++;
        }
        return ReturnedSlots;
    } else {
        return null;
    }
}


export function GetFactions() {
    let Factions = ReturnFactions();
    let ReturnedFactions = [];

    Factions.forEach((element) => (
        ReturnedFactions.push(
                    new Faction(
                        element.id,
                        element.Name,
                        element.Image,
                        null,
                        element.Logo
                    )
        )
    )
   )

    return ReturnedFactions;
}
// export default GetFactions;

export function GetFaction(FactionId) {
    return GetFactions().filter((Faction) => Faction.id == FactionId)[0];
}

// export default GetFaction;

export function GetChapterTactics(FactionId) {
    let ChapterTactics = [];
    let ReturnedChapterTactics = [];
    let ChapterTactic1 = {
        id: 1,
		Name: "Alaitoc"
    };
    ChapterTactics.push(ChapterTactic1);

    let ChapterTactic2 = {
        id: 2,
		Name: "Kronos"
    };
    ChapterTactics.push(ChapterTactic2);

    for(let i=0;i<ChapterTactics.length;i++) {
        ReturnedChapterTactics.push(new ChapterTactic(ChapterTactics[i].id,ChapterTactics[i].Name));
    }
    return ReturnedChapterTactics;
}

// export default GetChapterTactics;

export function GetChapterTactic(TacticId) {
    return GetChapterTactics().filter((Tactic) => Tactic.id == TacticId)[0];
}

// export default GetChapterTactic;

export function GetDetachments() {
    let Detachments = ReturnDetachments();
    let ReturnedDetachments = [];

    Detachments.forEach(function(detach) {
        ReturnedDetachments.push(
            new Detachment(
                detach.id,
                detach.Name,
                detach.CommandBenefit,
                detach.Restrictions,
                detach.Image
            )
        )
    });
    return ReturnedDetachments;
}

// export default GetDetachments;

export function GetDetachment(DetachmentId) {
    return GetDetachments().find((Detachment) => Detachment.id == DetachmentId);
}

// export default GetDetachment;

export function GetDetachmentOptions(DetachmentId) {
    let Options = [];
    let ReturnedOptions = [];

    

    for(let i=0;i<Options.length;i++) {
        ReturnedOptions.push(new DetachmentOption(Options[i].id,Options[i].UnitRole,Options[i].MaxQuant,Options[i].MinQuant));
    }
    return ReturnedOptions;
}

// export default GetDetachmentOptions;

export function GetDetachmentUnitsRoles(DetachmentUnits) {
    let Roles = [];
    for(let i = 0;i<DetachmentUnits.length;i++) {
        let Role = DetachmentUnits[i].BaseUnit.UnitRole;
        if(Roles.length > 0) {
            if(!Roles.find((role) => role.id == Role.id)) {
                Roles.push(Role);
            }
        } else {
            Roles.push(Role);
        }
    }
    return Roles.sort(function(a,b) {
        if(a.id < b.id) {
            return -1;
        } else if(a.id > b.id) {
            return 1;
        } else {
            return 0;
        }
    });
}


export function CheckDetachmentOptionFull(DetachmentUnits, Role, Detachment) {
    let Answer;
    let UnitsByRole = GetRosterUnitsByRole(DetachmentUnits, Role.id);
    let DetachmentOption = Detachment.DetachOptions.filter((option) => option.UnitRole.id == Role.id)[0];
    Answer = (UnitsByRole.length >= DetachmentOption.MaxQuant);
    return Answer;
}

export function GetRosterUnitModels(RosterUnit) {
    let RosterUnitModels = [];
    let BaseModels = RosterUnit.BaseUnit.Models;
    let count = 0;
    for(let i=0; i<BaseModels.length; i++) {
        for (let j=0; j < BaseModels[i].MinQuant; j++) {
        let NewRosterModel = new RosterModel(count+1,BaseModels[i],RosterUnit.id,BaseModels[i].Cost);
        count++;
        RosterUnitModels.push(NewRosterModel);
        NewRosterModel = recalculateRosterModel(NewRosterModel);
        }
    }
    return RosterUnitModels;
}

export function GetRosterUnitsByRole(RosterUnits, RoleId) {
    return RosterUnits.filter((unit) => unit.BaseUnit.UnitRole.id == RoleId);
}

export const GetUnitCurrentPowerLevel = (PowerLevelList, ModelsCount = 0) => {
    let UnitPowerLevel = 0;
    if(ModelsCount) {
        PowerLevelList.sort(function(a,b) {
            if(a.NumberOfModels < b.NumberOfModels) {
                return -1;
            } else if(a.NumberOfModels > b.NumberOfModels) {
                return 1;
            } else {
                return 0;
            }
        });
        for(let i=0;i<PowerLevelList.length;i++) {
            let item = PowerLevelList[i];
            if(PowerLevelList[i+1]) {
                if(ModelsCount >= item.NumberOfModels && ModelsCount < PowerLevelList[i+1].NumberOfModels) {
                    UnitPowerLevel = item.PowerLevel;
                    break;
                }
            } else {
                UnitPowerLevel = item.PowerLevel;
            }
        }
    }
    return UnitPowerLevel;
}

export const recalculateRosterModel = (RosterModel) => {
    RosterModel.TotalCost = RosterModel.BaseModel.Cost;
    RosterModel.RosterWargearSlots.forEach((slot) =>
        slot.SelectedOption.WargearIncluded.forEach((wargear) =>
            RosterModel.TotalCost += wargear.Cost
        )
    );
    return RosterModel;
}

export const recalculateRosterUnit = (RosterUnit) => {
    RosterUnit.TotalCost = 0;
    RosterUnit.Models.forEach((model) => 
        RosterUnit.TotalCost += model.TotalCost
    );
    return RosterUnit;
}

export const recalculateRosterDetachment = (Detach) => {
    let TotalDetachCost = 0;
    let TotalDetachPL = 0;
    Detach.RosterUnits.forEach(function(unit) {
            TotalDetachCost +=unit.TotalCost;
            TotalDetachPL += GetUnitCurrentPowerLevel(unit.BaseUnit.PowerLevel, unit.Models.length);
        }
    );
    Detach.TotalDetachCost = TotalDetachCost;
    Detach.TotalDetachPL = TotalDetachPL
    return Detach;
}

export const recalculateRosterCost = (Roster = this) => {
    let TotalPTS = 0;
    let TotalPL = 0;
    let TotalCP = 3;
   
    Roster.RosterDetachments.forEach(function(detach) {
        TotalPTS += detach.TotalDetachCost;
        TotalPL += detach.TotalDetachPL;
        TotalCP += detach.TotalDetachCP;
        }
    );
    Roster.TotalPTS = TotalPTS;
    Roster.TotalPL = TotalPL;
    Roster.TotalCP = TotalCP;
    return Roster;
}

export const calculateNewId = (ElementsList) => {
    if(!!ElementsList && ElementsList.length > 0) {
        let elements = ElementsList.slice();
        elements.sort(function(a,b) {
                if(a.id < b.id) {
                    return 1;
                } else if(a.id > b.id) {
                    return -1;
                } else {
                    return 0;
                }
            }
        );
        return elements[0].id+1;
    } else {
        return 1;
    }
}