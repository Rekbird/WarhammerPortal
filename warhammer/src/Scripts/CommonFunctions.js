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
import CraftworldsImage from "../Data/FactionImages/factionlogo/Craftworlds.png";
import TyranidsImage from "../Data/FactionImages/factionlogo/tyranids.png";
import BattalionImage from "../Data/Detachments/BatalionDetachment.png";
import SpearheadImage from "../Data/Detachments/SpearheadDetachment.png";
import GetFactionUnitsByRole from "./GetFactionUnitsByRole";
import ReturnUnits from "../Data/Units/Units.js";
import ReturnUnitRoles from "../Data/UnitRoles/UnitRoles.js";
import GetFactionUnits from "./GetFactionUnits.js";
import ReturnFactions from "../Data/FactionImages/FactionImages.js";
import ReturnUnitPsuchicPowers from "../Data/PsychicPowers/UnitPsychicPowers.js";
import ReturnNumbersOfSpells from "../Data/PsychicPowers/NumbersOfSpells.js";
import ReturnUnitModels from "../Data/ModelObjects/UnitModels.js";
//import GetAvailableRoles from "./GetAvailableRoles.js";

export function GetWarlordTrait(UnitId, FactionId, ChapterTacticId) {
    /*
    Первый шаг - проверка того что юнит не именной. Если именной то в нем есть атрибут с айди трейта и по этому айди мы возвращаем объект трейта. Конец функции
    Второй шаг - Если юнит не именной мы возвращаем массив трейтов которые мы селектим по айди фракции и айди чаптер тактики.
    */
    //Эмуляционный вызов 
    let WarlordTraits = [];
    let Unit;
    let TraitIds = [];
    if (!!UnitId) {
    //Cелектим айдишники трейтов SELECT WarlordTrait FROM Unit_table WHERE Id = UnitId AND Named = true
        TraitIds = [23];
    } else if (!!FactionId && !!ChapterTacticId) {
    //Селектим айдишники SELECT Id FROM WarlordTraits_table WHERE id_Faction =  FactionId AND id_ChapterTactic = ChapterTacticId
        TraitIds = [24,25,26];
    }
    //Эмуляция получения объектов из базы
    if (!!TraitIds && TraitIds.length > 0) {
        for (let i = 0; i < TraitIds.length; i++) {
            let NewWarlordTrait = {
                    id : TraitIds[i],
                    Name : "TraitName" + TraitIds[i],
                    Description : "TratiDescr" + TraitIds[i]
            };
            WarlordTraits.push(NewWarlordTrait);
        }
    }
    //Обработка объектов из базы, преобразование их в экземпляры классов
    if(!!WarlordTraits && WarlordTraits.length > 0) {
        if(WarlordTraits.length == 1) {
            let NewWarlordTrait = new WarlordTrait(WarlordTraits[0].id,WarlordTraits[0].Name,WarlordTraits[0].Description);
            return NewWarlordTrait;
        } else {
            let ReturnedTraits = [];
            for(let i=0;i<WarlordTraits.length;i++) {
                let NewWarlordTrait = new WarlordTrait(WarlordTraits[i].id,WarlordTraits[i].Name,WarlordTraits[i].Description);
                ReturnedTraits.push(NewWarlordTrait);
            }
            return ReturnedTraits;
        }
    } else {
        return null;
    }    
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
    console.log("GetUnitRoles : Unit Roles "+ReturnedRoles);
    return ReturnedRoles;
}

export const GetAvailableRoles = (FactionId) => {
    const Units = GetFactionUnits(FactionId);
    //console.log("GetFactionUnits" + Units.length);
    let Roles =[];
    for(let j=0;j<Units.length;j++) {
        let Unit = Units[j];
         Roles.push(Unit.UnitRole);
    }
    //var Roles = Units.UnitRole;
    //console.log("Units roles " + Roles.length);
    let ReturnedRoles = [];
    if(Roles && (Roles.length > 0)) {
        for(let i=0;i<Roles.length;i++) {
            let Role = Roles[i];
            if(ReturnedRoles.indexOf(Role) == -1) {
                ReturnedRoles.push(Role);
            }
        }
    }
    //console.log("ReturnedRoles" + ReturnedRoles.length);
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

// export default GetUnitPowerLevel;

export function GetUnitModels(UnitId) {
    let ReturnedModels = [];
    let UnitModels = ReturnUnitModels(UnitId);

    for(let i=0;i<UnitModels.length;i++) {
        ReturnedModels.push(new Model(UnitModels[i].id,UnitModels[i].Name,UnitModels[i].Cost,UnitModels[i].MaxQuant,UnitModels[i].MinQuant,UnitModels[i].ModelsIncluding,UnitModels[i].UnitId));
    }
    return ReturnedModels;
}



export function GetWargearSlots(ModelId) {
    let ReturnedWargearSlots = [];
    let WargearSlots = [];
    let WargearSlot1 = {
        id: 1,
        Name: "Slot1"
    };
    WargearSlots.push(WargearSlot1);

    let WargearSlot2 = {
        id: 2,
        Name: "Slot2"
    };
    WargearSlots.push(WargearSlot2);

    for(let i=0;i<WargearSlots.length;i++) {
        ReturnedWargearSlots.push(new WargearSlot(WargearSlots[i].id,WargearSlots[i].Name));
    }
    return ReturnedWargearSlots;
}

// export default GetWargearSlot;

export function GetWargearOptions(SlotId) {
    let ReturnedWargearOptions = [];
    let WargearOptions = [];
    let WargearOption1 = {
        id: 1,
        Name: "Option1",
        CountPerModel: 3,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        WargearSlotId: 1
    };
    WargearOptions.push(WargearOption1);
    let WargearOption2 = {
        id: 2,
        Name: "Option2",
        CountPerModel: 1,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        WargearSlotId: 1
    };
    WargearOptions.push(WargearOption2);

    let WargearOption3 = {
        id: 3,
        Name: "Option3",
        CountPerModel: 1,
        PerXmodels: 10,
        Default: true,
        LinkedOptionsId: [],
        WargearSlotId: 2
    };
    WargearOptions.push(WargearOption3);

    let WargearOption4 = {
        id: 4,
        Name: "Option4",
        CountPerModel: 1,
        PerXmodels: 10,
        Default: false,
        LinkedOptionsId: [],
        WargearSlotId: 2
    };
    WargearOptions.push(WargearOption4);

    for(let i=0;i<WargearOptions.length;i++) {
        if (SlotId == WargearOptions[i].WargearSlotId) {
            ReturnedWargearOptions.push(new WargearOption(WargearOptions[i].id,WargearOptions[i].Name,WargearOptions[i].CountPerModel,WargearOptions[i].PerXmodels,WargearOptions[i].Default,WargearOptions[i].LinkedOptionsId));
        }
    }
    return ReturnedWargearOptions;
}

// export default GetWargearOption;

export function GetWargear(OptionId) {
    let ReturnedWargears = [];
    let Wargears = [];
    let Wargear1 = {
        id: 1,
        Name: "Wargear1",
        Cost: 10,
        Type: "",
        Relic: false,
        Image: "",
        ChapterTacticId: "",
        OptionId: 1
    };
    Wargears.push(Wargear1);
    let Wargear2 = {
        id: 2,
        Name: "Wargear2",
        Cost: 10,
        Type: "",
        Relic: false,
        Image: "",
        ChapterTacticId: "",
        OptionId: 1
    };
    Wargears.push(Wargear2);

    let Wargear3 = {
        id: 3,
        Name: "Wargear3",
        Cost: 20,
        Type: "",
        Relic: false,
        Image: "",
        ChapterTacticId: "",
        OptionId: 2
    };
    Wargears.push(Wargear3);

    let Wargear4 = {
        id: 4,
        Name: "Wargear4",
        Cost: 5,
        Type: "",
        Relic: false,
        Image: "",
        ChapterTacticId: "",
        OptionId: 3
    };
    Wargears.push(Wargear4);

    let Wargear5 = {
        id: 5,
        Name: "Wargear5",
        Cost: 32,
        Type: "",
        Relic: false,
        Image: "",
        ChapterTacticId: "",
        OptionId: 4
    };
    Wargears.push(Wargear5);

    for(let i=0;i<Wargears.length;i++) {
        if (Wargears[i].OptionId == OptionId) {
            ReturnedWargears.push(new Wargear(Wargears[i].id,Wargears[i].Name,Wargears[i].Cost,Wargears[i].Type,Wargears[i].Relic,Wargears[i].Image,Wargears[i].ChapterTacticId));
        }
    }
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
    /*
    let Faction1 = {
        id: 28,
        Name: "Craftworlds",
        CodexImage: CraftworldsImage,
		IndexImage:"",
		FactionLogo: ""
    };
    Factions.push(Faction1);
    let Faction2 = {
        id: 36,
        Name: "Tyranids",
        CodexImage: TyranidsImage,
		IndexImage:"",
		FactionLogo: ""
    };
    Factions.push(Faction2);
    
    for(let i=0;i<Factions.length;i++) {
        ReturnedFactions.push(new Faction(Factions[i].id,Factions[i].Name,Factions[i].CodexImage,Factions[i].IndexImage,Factions[i].FactionLogo));
    }
    */
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
    let Detachments = [];
    let ReturnedDetachments = [];
    let Detach1 = {
        id: 1,
        Name: "Batallion",
		CommandBenefit: 5,
		Restrictions: "",
		Image: BattalionImage
    };
    Detachments.push(Detach1);
    let Detach2 = {
        id: 2,
        Name: "Spearhead",
		CommandBenefit: 1,
		Restrictions: "",
		Image: SpearheadImage
    };
    Detachments.push(Detach2);

    for(let i=0;i<Detachments.length;i++) {
        ReturnedDetachments.push(new Detachment(Detachments[i].id,Detachments[i].Name,Detachments[i].CommandBenefit,Detachments[i].Restrictions,Detachments[i].Image));
    }
    return ReturnedDetachments;
}

// export default GetDetachments;

export function GetDetachment(DetachmentId) {
    return GetDetachments().filter((Detachment) => Detachment.id == DetachmentId)[0];
}

// export default GetDetachment;

export function GetDetachmentOptions(DetachmentId) {
    let Options = [];
    let ReturnedOptions = [];

    let Option1 = {
        id: 1,
		UnitRole: 1,
		MaxQuant: 6,
		MinQuant: 3
    };
    Options.push(Option1);

    let Option2 = {
        id: 2,
		UnitRole: 2,
		MaxQuant: 6,
		MinQuant: 3
    };
    Options.push(Option2);

    let Option3 = {
        id: 3,
		UnitRole: 3,
		MaxQuant: 6,
		MinQuant: 3
    };
    Options.push(Option3);

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
            if(Roles.filter((role) => role.id == Role.id).length === 0) {
                Roles.push(Role);
            }
        } else {
            Roles.push(Role);
        }
    }
    return Roles;
}

export function CheckDetachmentOptionFull(DetachmentUnits, Role, Detachment) {
    let Answer;
    let UnitsByRole = GetRosterUnitsByRole(DetachmentUnits, Role.id);
    console.log(Role.id);
    console.log(Detachment.DetachOptions);
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
        console.log(NewRosterModel);
        }
    }
    console.log(RosterUnitModels.length);
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
    //console.log("Количество юнитов до пересчета "+Detach.RosterUnits.length);
    Detach.RosterUnits.forEach(function(unit) {
            TotalDetachCost +=unit.TotalCost;
            TotalDetachPL += GetUnitCurrentPowerLevel(unit.BaseUnit.PowerLevel, unit.Models.length);
        }
    );
    Detach.TotalDetachCost = TotalDetachCost;
    Detach.TotalDetachPL = TotalDetachPL
    //console.log("Количество юнитов после пересчета "+Detach.RosterUnits.length);
    return Detach;
}

export const recalculateRosterCost = (Roster = this) => {
    //console.log("Вызвали recalculateRosterCost");
    //console.log("Имя ростера "+Roster.Name);
    //console.log("Количество детачментов в методе до перебора"+Roster.RosterDetachments.length);
    let TotalPTS = 0;
    let TotalPL = 0;
    let TotalCP = 3;
   
    Roster.RosterDetachments.forEach(function(detach) {
        TotalPTS += detach.TotalDetachCost;
        TotalPL += detach.TotalDetachPL;
        TotalCP += detach.TotalDetachCP;
        }
    );
   
    //console.log("Количество детачментов в методе после перебора"+Roster.RosterDetachments.length);
    Roster.TotalPTS = TotalPTS;
    Roster.TotalPL = TotalPL;
    Roster.TotalCP = TotalCP;
    return Roster;
}