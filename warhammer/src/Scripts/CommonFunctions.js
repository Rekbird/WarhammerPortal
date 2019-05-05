import {PsychicPower} from "../Classes/CommonClasses.js";
import {UnitPowerLevel} from "../Classes/CommonClasses.js";
import {WargearSlot} from "../Classes/CommonClasses.js";
import {WargearOption} from "../Classes/CommonClasses.js";
import {Wargear} from "../Classes/CommonClasses.js";
import {DetachmentOption} from "../Classes/CommonClasses.js";
import {Detachment} from "../Classes/CommonClasses.js";
import {Faction} from "../Classes/CommonClasses.js";
import {ChapterTactic} from "../Classes/CommonClasses.js";

export function GetWarlordTrait(UnitId, FactionId, ChapterTacticId) {
    /*
    //Эмуляционный вызов
    let WarlordTraits = [];
    let WarlordTraitIds = [];
    if(UnitId) {
        let Units = ReturnUnits();
        for (let i=0;i<Units.length;i++) {
            if(Units[i].id == UnitId) {
                WarlordTraitIds = Units[i].WarlordTraits.concat(WarlordTraitIds);
                let WarlordTraitsFromBase = ReturnWarlordTraits();
                for(let j=0;j<WarlordTraitIds.length;j++) {
                    let TraitId = WarlordTraitIds[j];
                    for(let k=0;k<WarlordTraitsFromBase;k++)
                    if(WarlordTraitsFromBase[k].id == TraitId) {
                        WarlordTraits.push(WarlordTraitsFromBase[k]);
                    }
                }
            }
        }
    } else if(FactionId && ChapterTacticId) {
        let WarlordTraitsFromBase = ReturnWarlordTraits();
        for (let i=0;i<WarlordTraitsFromBase.length;i++) {
            if(WarlordTraitsFromBase[i].id_Faction == FactionId && WarlordTraitsFromBase[i].id_Chapter_tactic == ChapterTacticId) {
                WarlordTraits.push(WarlordTraitsFromBase[i]);
            }
        }
    }
    //Эмуляционный вызов
    if(!!WarlordTraits && WarlordTraits.length > 0) {
        if(WarlordTraits.length == 1) {
            let WarlordTrait = new WarlordTrait(WarlordTraits[0].id,WarlordTraits[0].Name,WarlordTraits[0].Description);
            return WarlordTrait;
        } else {
            let ReturnedTraits = [];
            for(let i=0;i<WarlordTraits.length;i++) {
                let WarlordTrait = new WarlordTrait(WarlordTraits[i].id,WarlordTraits[i].Name,WarlordTraits[i].Description);
                ReturnedTraits.push(WarlordTrait);
            }
            return ReturnedTraits;
        }
    } else {
        return null;
    }
    */
}

// export default GetWarlordTrait;

export function GetNumberOfSpells(UnitId) {
    /*
    let ReturnedNumberOfSpells = [];
    //Эмуляция вызова
    let NumberOfSpellsFromBase = ReturnNumberOfSpells();
    let NumberOfSpells = [];
    for (let i=0;i<NumberOfSpellsFromBase.length;i++) {
        if(NumberOfSpellsFromBase[i].id_Unit == UnitId) {
            NumberOfSpells.push(NumberOfSpellsFromBase[i]);
        }
    }

    //Эмуляция вызова
    if(NumberOfSpells && NumberOfSpells.length > 0) {
        
        for(let i=0;i<NumberOfSpells.length;i++) {
            ReturnedNumberOfSpells.push(new NumberOfSpells(NumberOfSpells[i].id,NumberOfSpells[i].NumberOfModels,NumberOfSpells[i].NumberOfSpells))
        }
         
    }
    return ReturnedNumberOfSpells;
    */
}

// export default GetNumberOfSpells;

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
// export default GetAvailableSpells;

export function GetUnitRole(RoleId) {
    let UnitRoles = [];
    let ReturnedUnitRoles =[];
    let Hq = {
        id:1,
        Name: "HQ",
        Image: ""
    };
    UnitRoles.push(Hq);

    let Troops = {
        id:2,
        Name: "Troops",
        Image: ""
    };
    UnitRoles.push(Troops);

    for(let i=0;i<UnitRoles.length;i++) {
        ReturnedUnitRoles.push(new PsychicPower(UnitRoles[i].id,UnitRoles[i].Name,UnitRoles[i].Image));
    }
    return ReturnedUnitRoles;
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

export function GetModel(UnitId) {
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
        Name: "Hive Tyrant",
        Cost: 450,
        MaxQuant: 1,
        MinQuant: 1,
        ModelsIncluding: 1,
        UnitId: ""
    };
    UnitModels.push(Model2);

    for(let i=0;i<UnitModels.length;i++) {
        ReturnedModels.push(new Model1(UnitModels[i].id,UnitModels[i].Name,UnitModels[i].Cost,UnitModels[i].MaxQuant,UnitModels[i].MinQuant,UnitModels[i].ModelsIncluding,UnitModels[i].UnitId));
    }
    return ReturnedModels;
}

// export default GetModel;

export function GetWargearSlot(ModelId) {
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

export function GetWargearOption(SlotId) {
    let ReturnedWargearOptions = [];
    let WargearOptions = [];
    let WargearOption1 = {
        id: 1,
        Name: "Option1",
        CountPerModel: 1,
        PerXmodels: 1,
        LinkedOptionsId: []
    };
    WargearOptions.push(WargearOption1);
    let WargearOption2 = {
        id: 2,
        Name: "Option2",
        CountPerModel: 1,
        PerXmodels: 1,
        LinkedOptionsId: []
    };
    WargearOptions.push(WargearOption2);

    for(let i=0;i<WargearOptions.length;i++) {
        ReturnedWargearOptions.push(new WargearOption(WargearOptions[i].id,WargearOptions[i].Name,WargearOptions[i].CountPerModel,WargearOptions[i].PerXmodels,WargearOptions[i].LinkedOptionsId));
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
        Default: true,
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
        Default: true,
        Image: "",
        ChapterTacticId: ""
    };
    Wargears.push(Wargear2);

    for(let i=0;i<Wargears.length;i++) {
        ReturnedWargears.push(new Wargear(Wargears[i].id,Wargears[i].Name,Wargears[i].Cost,Wargears[i].Type,Wargears[i].Relic,Wargears[i].Default,Wargears[i].Image,Wargears[i].ChapterTacticId));
    }
    return ReturnedWargears;
}

export function GetFactions() {
    let Factions = [];
    let ReturnedFactions = [];
    let Faction1 = {
        id: 1,
        Name: "Craftworlds",
        CodexImage: "",
		IndexImage:"",
		FactionLogo: ""
    };
    Factions.push(Faction1);
    let Faction2 = {
        id: 2,
        Name: "Tyranids",
        CodexImage: "",
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
		Image: ""
    };
    Detachments.push(Detach1);
    let Detach2 = {
        id: 2,
        Name: "Spearhead",
		CommandBenefit: 1,
		Restrictions: "",
		Image: ""
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
		UnitRole: "",
		MaxQuant: 6,
		MinQuant: 3
    };
    Options.push(Option1);

    let Option2 = {
        id: 2,
		UnitRole: "",
		MaxQuant: 6,
		MinQuant: 3
    };
    Options.push(Option2);

    for(let i=0;i<Options.length;i++) {
        ReturnedOptions.push(new DetachmentOption(Options[i].id,Options[i].UnitRole,Options[i].MaxQuant,Options[i].MinQuant));
    }
    return ReturnedOptions;
}

// export default GetDetachmentOptions;