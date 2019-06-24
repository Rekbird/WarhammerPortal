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
        NumberOfSpellsFromBase = [
            {
                id : 1,
                NumberOfModels : 3,
                NumberOfSpells : 1
            },
            {
                id : 2,
                NumberOfModels : 4,
                NumberOfSpells : 2
            },
            {
                id : 3,
                NumberOfModels : 5,
                NumberOfSpells : 2
            },
            {
                id : 4,
                NumberOfModels : 6,
                NumberOfSpells : 3
            }
        ];
    }

    //Эмуляция вызова
    if(NumberOfSpellsFromBase && NumberOfSpellsFromBase.length > 0) {
        
        for(let i=0;i<NumberOfSpellsFromBase.length;i++) {
            ReturnedNumberOfSpells.push(new NumberOfSpells(NumberOfSpellsFromBase[i].id,NumberOfSpellsFromBase[i].NumberOfModels,NumberOfSpellsFromBase[i].NumberOfSpells))
        }
         
    }
    return ReturnedNumberOfSpells;
}


export function GetAvailableSpells(UnitId) {
    let ReturnedPsychicPowers = [];
    //Эмуляция вызова
    let Spells = [];
    let Spell1 = {
        id: 1,
		Name: "Smite",
		DisciplineName: ""
    };
    Spells.push(Spell1);

    let Spell2 = {
        id: 2,
		Name: "Conceal/Reveal",
		DisciplineName: ""
    };
    Spells.push(Spell2);
    //Эмуляция вызова
    for(let i=0;i<Spells.length;i++) {
        ReturnedPsychicPowers.push(new PsychicPower(Spells[i].id,Spells[i].Name,Spells[i].DisciplineName));
    }
    return Spells;
}


export function GetUnitRole(RoleId) {
   
    let UnitRoles = [];
    let ReturnedUnitRoles =[];
    let Role1 = {
        id:1,
        Name: "Troops",
        Image: ""
    };
    UnitRoles.push(Role1);
    //console.log(RoleId+" "+Role1.id == RoleId);
    let Role2 = {
        id:2,
        Name: "Elites",
        Image: ""
    };
    UnitRoles.push(Role2);
    
    //console.log(RoleId+" "+Role2.id == RoleId);
    for(let i=0;i<UnitRoles.length;i++) {
        ReturnedUnitRoles.push(new UnitRole(UnitRoles[i].id,UnitRoles[i].Name,UnitRoles[i].Image));
    }
   return ReturnedUnitRoles.filter((role) => role.id == RoleId)[0];
   //return ReturnedUnitRoles[RoleId];
   
}

// export default GetUnitRole;

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
    let UnitModels = [];
    let Model1 = {
        id: 1,
        Name: "Dire Avenger",
        Cost: 11,
        MaxQuant: 10,
        MinQuant: 5,
        ModelsIncluding: 1,
        UnitId: ""
    };
    UnitModels.push(Model1);

    let Model2 = {
        id: 2,
        Name: "Dire Avenger Exarch",
        Cost: 11,
        MaxQuant: 1,
        MinQuant: 0,
        ModelsIncluding: 1,
        UnitId: ""
    };
    UnitModels.push(Model2);

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
        LinkedOptionsId: []
    };
    WargearOptions.push(WargearOption1);
    let WargearOption2 = {
        id: 2,
        Name: "Option2",
        CountPerModel: 1,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: []
    };
    WargearOptions.push(WargearOption2);

    let WargearOption3 = {
        id: 3,
        Name: "Option3",
        CountPerModel: 1,
        PerXmodels: 10,
        Default: false,
        LinkedOptionsId: []
    };
    WargearOptions.push(WargearOption3);

    for(let i=0;i<WargearOptions.length;i++) {
        ReturnedWargearOptions.push(new WargearOption(WargearOptions[i].id,WargearOptions[i].Name,WargearOptions[i].CountPerModel,WargearOptions[i].PerXmodels,WargearOptions[i].Default,WargearOptions[i].LinkedOptionsId));
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
        ChapterTacticId: ""
    };
    Wargears.push(Wargear1);
    let Wargear2 = {
        id: 2,
        Name: "Wargear2",
        Cost: 10,
        Type: "",
        Relic: false,
        Image: "",
        ChapterTacticId: ""
    };
    Wargears.push(Wargear2);

    for(let i=0;i<Wargears.length;i++) {
        ReturnedWargears.push(new Wargear(Wargears[i].id,Wargears[i].Name,Wargears[i].Cost,Wargears[i].Type,Wargears[i].Relic,Wargears[i].Image,Wargears[i].ChapterTacticId));
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
    let Factions = [];
    let ReturnedFactions = [];
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
		//UnitRole: GetUnitRole("1"),
		MaxQuant: 6,
		MinQuant: 3
    };
    Options.push(Option1);

    let Option2 = {
        id: 2,
		//UnitRole: GetUnitRole("2"),
		MaxQuant: 6,
		MinQuant: 3
    };
    Options.push(Option2);

    for(let i=0;i<Options.length;i++) {
        ReturnedOptions.push(new DetachmentOption(Options[i].id,i+1,Options[i].MaxQuant,Options[i].MinQuant));
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
        console.log(NewRosterModel);
        }
    }
    console.log(RosterUnitModels.length);
    return RosterUnitModels;
}

export function GetRosterUnitsByRole(RosterUnits, RoleId) {
    return RosterUnits.filter((unit) => unit.BaseUnit.UnitRole.id == RoleId);
}