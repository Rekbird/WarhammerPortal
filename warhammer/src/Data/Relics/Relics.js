const _ = require('lodash');

const ReturnRelics = (FactionId, ChapterTacticId, Unit) => {
    let Relics = [];
    let ReturnedRelics = [];

    // AELDARI RELICS =============

    const BlazingStar = {
        id: 1,
        Name: "Blazing star of Vaul",
        Description: "Model with a shuriken pistol or twin shuriken catapult only. One shuriken weapon carried by the model is a Blazing Star of Vaul. Add 2 to the number of attacks that the weapon can make.",
        keyWordRetriction: null,
        UnitRestriction: null,
        ReplacingWargear: [3],
        ChapterTacticId: null,
        FactionId: 28
    };
    Relics.push(BlazingStar);

    const FaolchusWing = {
        id: 2,
        Name: "Faolchú's wing",
        Description: "INFANTRY model only. The bearer of Faolchú’s Wing has a Move characteristic of 12\" and can FLY.",
        keyWordRetriction: "INFANTRY",
        UnitRestriction: null,
        ReplacingWargear: [],
        ChapterTacticId: null,
        FactionId: 28
    };
    Relics.push(FaolchusWing);

    const Firesabre = {
        id: 3,
        Name: "Firesabre",
        Description: "Model with a power sword only. The Firesabre replaces the model’s power sword.",
        keyWordRetriction: null,
        UnitRestriction: null,
        ReplacingWargear: [21],
        ChapterTacticId: null,
        FactionId: 28
    };
    Relics.push(Firesabre);

    const Shiftshroud = {
        id: 4,
        Name: "Shiftshroud of Alanssair",
        Description: "ALAITOC INFANTRY model only. Your opponent must subtract 1 from their hit rolls for attacks that target the bearer in the Shooting phase. " 
        + "In addition, during deployment, you may set up this model in hiding instead of placing it on the battlefield. " 
        + "At the end of one of your Movement phase, this model can emerge from hiding – set this model up anywhere on the battlefield that is more than 9\" away from any enemy models.",
        keyWordRetriction: "INFANTRY",
        UnitRestriction: null,
        ReplacingWargear: [],
        ChapterTacticId: 1,
        FactionId: 28
    };
    Relics.push(Shiftshroud);

    const Shimmerplume = {
        id: 4,
        Name: "Shimmerplume of Achillrial",
        Description: "AUTARCH only. Subtract 1 from all hit rolls that target this model.", 
        keyWordRetriction: null,
        UnitRestriction: 100, // change when autarch created in the Units
        ReplacingWargear: [],
        ChapterTacticId: null,
        FactionId: 28
    };
    Relics.push(Shimmerplume);

    Relics.forEach(function(relic) {
        let CanBeIncluded = true;
        CanBeIncluded = CanBeIncluded && (relic.FactionId == FactionId);

        if (CanBeIncluded && !!relic.ChapterTacticId) {
            CanBeIncluded = CanBeIncluded && (relic.ChapterTacticId == ChapterTacticId);
        }

        if (CanBeIncluded && !!relic.UnitRestriction) {
            CanBeIncluded = CanBeIncluded && (Unit.BaseUnit.id == relic.UnitRestriction);
        }

        if (CanBeIncluded && !_.isEmpty(relic.ReplacingWargear)) {
            let AllWargear = [];
            Unit.Models[0].RosterWargearSlots.forEach(slot => slot.SelectedOption.WargearIncluded.forEach(wargear => AllWargear.push(wargear.id)));
            CanBeIncluded = CanBeIncluded && (relic.ReplacingWargear.find(elem => AllWargear.indexOf(elem) != -1));
        }

        if (CanBeIncluded) ReturnedRelics.push(relic);
    });


    return ReturnedRelics;
}

export default ReturnRelics;