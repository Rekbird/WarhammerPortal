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
import ReturnDetachments from "../Data/Detachments/Detachments.js";
import ReturnDetachmentOptions from "../Data/Detachments/DetachmentOptions.js";
import ReturnUnitPowerLevel from "../Data/UnitPowerLevels/UnitPowerLevels.js";
import ReturnSubFactions from "../Data/SubFactions/SubFactions.js";
import ReturnRelics from "../Data/Relics/Relics.js";
//import GetAvailableRoles from "./GetAvailableRoles.js";


const _ = require('lodash');

export function GetWarlordTraits(FactionId, ChapterTacticId, ActiveUnit) {

    let WarlordTraits = ReturnWarlordTraits(FactionId, ChapterTacticId);
    let ReturnedTraits = [];
    if (!_.isEmpty(WarlordTraits)) {
        WarlordTraits.forEach(trait => {
            let NewWarlordTrait = new WarlordTrait(trait.id, trait.Name, trait.Description);
            ReturnedTraits.push(NewWarlordTrait);
        });
    }
    ReturnedTraits = !!ActiveUnit ? ReturnedTraits.filter(elem => elem.id == ActiveUnit.WarlordTraitId) : ReturnedTraits;
    return ReturnedTraits;
}

export function GetFactionRelics(FactionId, ChapterTacticId, Unit) {

    let Relics = ReturnRelics(FactionId, ChapterTacticId, Unit);
    let ReturnedRelics = [];
    if (!_.isEmpty(Relics)) {
        Relics.forEach(relic => {
            let NewRelic = new WarlordTrait(relic.id, relic.Name, relic.Description, relic.keyWordRetriction, relic.UnitRestriction, relic.ReplacingWargear, relic.ChapterTacticId, relic.FactionId);
            ReturnedRelics.push(NewRelic);
        });
    }
    return ReturnedRelics;
}

export function GetNumberOfSpells(UnitId) {
    
    let ReturnedNumberOfSpells = [];
    let NumberOfSpellsFromBase = [];
    //Селект из базы по юнит айди
    if (!!UnitId) {
        NumberOfSpellsFromBase = ReturnNumbersOfSpells(UnitId);
    }

    //Эмуляция вызова
    if(!_.isEmpty(NumberOfSpellsFromBase)) {
        
        NumberOfSpellsFromBase.forEach(function(element) {
            ReturnedNumberOfSpells.push(
                new NumberOfSpells(
                    element.id,
                    element.NumberOfModels,
                    element.NumberOfSpells
                )
            )
        });
         
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
            ReturnedPsychicPowers.push(
                new PsychicPower(
                    spell.id,
                    spell.Name,
                    spell.DisciplineName
                )
            );
        }
    );
    return ReturnedPsychicPowers;
}

export const GetUnits = (FactionId) => {
    let DictionaryUnits = ReturnUnits(FactionId);
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

export const GetAvailableRoles = (Units) => {
    let ReturnedRoles = [];
    Units.forEach(
        function(unit){
            if(_.isEmpty(ReturnedRoles.find((role) => role.id == unit.UnitRole.id))) {
                ReturnedRoles.push(unit.UnitRole)
            }
        });
    return ReturnedRoles;
}

export function GetUnitRole(RoleId) {
   
    let UnitRoles = GetUnitRoles();
    let ReturnedUnitRole = UnitRoles.filter((role) => role.id == RoleId)[0];
    return ReturnedUnitRole;
}

export function GetUnitPowerLevel(UnitId) {
    let UnitPowerLevels =ReturnUnitPowerLevel(UnitId);
    let ReturnedUnitPowerLevels = [];

    UnitPowerLevels.forEach(function(level) {
        ReturnedUnitPowerLevels.push(
                new UnitPowerLevel(
                    level.id,
                    level.PowerLevel,
                    level.NumberOfModels
                )
            )
        }
    );
    return ReturnedUnitPowerLevels;
}

export function GetUnitModels(UnitId) {
    let ReturnedModels = [];
    let UnitModels = ReturnUnitModels(UnitId);

    UnitModels.forEach(function(element) {
        ReturnedModels.push(
            new Model(
                element.id,
                element.Name,
                element.Cost,
                element.MaxQuant,
                element.MinQuant,
                element.ModelsIncluding,
                element.PerXmodels,
                element.UnitId
            )
        );
    });
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
            ReturnedWargearOptions.push(
                new WargearOption(
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
    if (!_.isEmpty(BaseWargearSlots)) {
        let count = 1;
        BaseWargearSlots.forEach(function(element) {

            const SelectedOption = element.Options.find(Option => Option.Default == true);

            ReturnedSlots.push(
                new RosterWargearSlot(
                    count,
                    element.Name,
                    SelectedOption,
                    element
                )
            );
            count++;
        });
        return ReturnedSlots;
    } else {
        return null;
    }
}


export function GetFactions() {
    let Factions = ReturnFactions();
    let ReturnedFactions = [];

    Factions.forEach((element) => {
        ReturnedFactions.push(
            new Faction(
                element.id,
                element.Name,
                element.Image,
                null,
                element.Logo
            )
        )
    });

    return ReturnedFactions;
}
// export default GetFactions;

export function GetFaction(FactionId) {
    return GetFactions().find((Faction) => Faction.id == FactionId);
}

// export default GetFaction;

export function GetChapterTactics(FactionId) {
    let ChapterTactics = [];
    if(!!FactionId) {
        let ReturnedChapterTactics = ReturnSubFactions(FactionId);
        ReturnedChapterTactics.forEach(tactic => 
            ChapterTactics.push(new ChapterTactic(tactic.id, tactic.Name, tactic.FactionId))
        );
    }
    return ChapterTactics;
}

// export default GetChapterTactics;

export function GetChapterTactic(TacticId, FactionId) {
    return GetChapterTactics(FactionId).find((Tactic) => parseInt(Tactic.id) == parseInt(TacticId));
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
    const Options = ReturnDetachmentOptions(DetachmentId);
    let ReturnedOptions = [];

    Options.forEach(function(option) {
        ReturnedOptions.push(
            new DetachmentOption(
                option.id,
                option.UnitRole,
                option.MaxQuant,
                option.MinQuant
            )
        );
    });
    
    return ReturnedOptions;
}

// export default GetDetachmentOptions;

export function GetDetachmentUnitsRoles(DetachmentUnits) {
    let Roles = [];
    DetachmentUnits.forEach(function(unit) {
        let Role = unit.BaseUnit.UnitRole;
        if(Roles.length > 0) {
            if(!Roles.find((role) => role.id == Role.id)) {
                Roles.push(Role);
            }
        } else {
            Roles.push(Role);
        }
    });
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
    let Answer = false;
    if(!_.isEmpty(DetachmentUnits)) {
        // Проверяем что Detachment не Auxillary Support
        if(Detachment.id != 12) {
            //Проверяем если роль Dedicated Transport
            if(Role.id == 6) {
                const UnitsByRoleDedicated = GetRosterUnitsByRole(DetachmentUnits, Role.id);
                if(!_.isEmpty(UnitsByRoleDedicated)) {
                    const OtherUnits = _.difference(DetachmentUnits, UnitsByRoleDedicated);
                    Answer = UnitsByRoleDedicated.length >= OtherUnits.length;
                }
            } else {
                const UnitsByRole = GetRosterUnitsByRole(DetachmentUnits, Role.id);
                const DetachmentOption = Detachment.DetachOptions.find((option) => parseInt(option.UnitRole.id) == parseInt(Role.id));
                Answer = (UnitsByRole.length >= DetachmentOption.MaxQuant);
            }  
        }     
    }
    return Answer;
}

export function GetRosterUnitModels(RosterUnit) {
    let RosterUnitModels = [];
    let BaseModels = RosterUnit.BaseUnit.Models;
    let count = 0;
    BaseModels.forEach(function(model) {
        for (let j=0; j < model.MinQuant; j++) {
            let NewRosterModel = new RosterModel(count+1,model,RosterUnit.id,model.Cost);
            count++;
            RosterUnitModels.push(NewRosterModel);
            NewRosterModel = recalculateRosterModel(NewRosterModel);
        }
    });
    return RosterUnitModels;
}

export function GetRosterUnitsByRole(RosterUnits, RoleId) {
    return RosterUnits.filter((unit) => parseInt(unit.BaseUnit.UnitRole.id) == parseInt(RoleId));
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
            const item = PowerLevelList[i];
            const nextItem = PowerLevelList[i+1];
            if(!_.isEmpty(nextItem)) {
                if(ModelsCount > item.NumberOfModels && ModelsCount < nextItem.NumberOfModels) {
                    UnitPowerLevel = nextItem.PowerLevel;
                    break;
                } else if(ModelsCount == item.NumberOfModels) {
                    UnitPowerLevel = item.PowerLevel;
                    break;
                } else {
                    UnitPowerLevel = nextItem.PowerLevel;
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