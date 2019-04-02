import ReturnFactions from "../Factions/Factions.js";
import ReturnUnitRoles from "../UnitRoles/UnitRoles.js";

import DireAvengersImage from "./DireAvengersImage.jpg";
import GuardiansDefendersImage from "./GuardiansDefendersImage.jpg";
import StormGuardiansImage from "./StormGuardiansImage.jpg";
import RangersImage from "./RangersImage.jpg";
import FireDragonsImage from "./FireDragonsImage.jpg";
import HowlingBansheesImage from "./HowlingBansheesImage.jpg";
import StrikingScorpionsImage from "./StrikingScorpionsImage.jpg";

function ReturnUnits() {
    var Factions = ReturnFactions();
    var UnitsRoles = ReturnUnitRoles();
    var Units = [];

    var DireAvengers = {
        id: 1,
        Name: "Dire Avengers",
        Codex: "",
        Description: "This unit contains 5 Dire Avengers. It can include up to 5 additional Dire Avengers (Power Rating +3). A Dire Avenger Exarch can take the place of one Dire Avenger. Each model is armed with an avenger shuriken catapult and plasma grenades.",
        WargearOptions: "",
        MaxModelQuantity: "",
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: "",
        Image: DireAvengersImage,
        Faction: Factions[27],
        Named: "",
        WarlordTraits: "",
        UnitRole: UnitsRoles[1],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Dire-Avengers"
    };
    Units.push(DireAvengers);

    var GuardiansDefenders = {
        id: 2,
        Name: "Guardians Defenders",
        Codex: "",
        Description: "This unit contains 10 Guardians. It can include up to 10 additional Guardians (Power Rating +4). For every 10 Guardians in the unit, you may include one Heavy Weapon Platform. Each Guardian is armed with a shuriken catapult and plasma grenades. Each Heavy Weapon Platform is armed with a shuriken cannon.",
        WargearOptions: "",
        MaxModelQuantity: "",
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: "",
        Image: GuardiansDefendersImage,
        Faction: Factions[27],
        Named: "",
        WarlordTraits: "",
        UnitRole: UnitsRoles[1],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Guardian-Defenders"
    };
    Units.push(GuardiansDefenders);

    var StormGuardians = {
        id: 3,
        Name: "Storm Guardians",
        Codex: "",
        Description: "This unit contains 8 Guardians. It can include up to 8 additional Guardians (Power Rating +3) or up to 16 additional Guardians (Power Rating +6). Each model is armed with a shuriken pistol, an Aeldari blade and plasma grenades.",
        WargearOptions: "",
        MaxModelQuantity: "",
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: "",
        Image: StormGuardiansImage,
        Faction: Factions[27],
        Named: "",
        WarlordTraits: "",
        UnitRole: UnitsRoles[1],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Storm-Guardians"
    };
    Units.push(StormGuardians);

    var Rangers = {
        id: 4,
        Name: "Rangers",
        Codex: "",
        Description: "This unit contains 5 Rangers. It can include up to 5 additional Rangers (Power Rating +3). Each model is armed with a shuriken pistol and a ranger long rifle.",
        WargearOptions: "",
        MaxModelQuantity: "",
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: "",
        Image: RangersImage,
        Faction: Factions[27],
        Named: "",
        WarlordTraits: "",
        UnitRole: UnitsRoles[1],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Rangers"
    };
    Units.push(Rangers);

    var FireDragons = {
        id: 5,
        Name: "Fire Dragons",
        Codex: "",
        Description: "This unit contains 5 Fire Dragons. It can include up to 5 additional Fire Dragons (Power Rating +6). A Fire Dragon Exarch can take the place of one Fire Dragon. Each model is armed with a fusion gun and melta bombs.",
        WargearOptions: "",
        MaxModelQuantity: "",
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: "",
        Image: FireDragonsImage,
        Faction: Factions[27],
        Named: "",
        WarlordTraits: "",
        UnitRole: UnitsRoles[2],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Fire-Dragons"
    };
    Units.push(FireDragons);

    var HowlingBanshees = {
        id: 6,
        Name: "Howling Banshees",
        Codex: "",
        Description: "This unit contains 5 Howling Banshees. It can include up to 5 additional Howling Banshees (Power Rating +3). A Howling Banshee Exarch can take the place of one Howling Banshee. Each model is armed with a shuriken pistol and a power sword.",
        WargearOptions: "",
        MaxModelQuantity: "",
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: "",
        Image: HowlingBansheesImage,
        Faction: Factions[27],
        Named: "",
        WarlordTraits: "",
        UnitRole: UnitsRoles[2],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Howling-Banshees"
    };
    Units.push(HowlingBanshees);

    var StrikingScorpions = {
        id: 7,
        Name: "Striking Scorpions",
        Codex: "",
        Description: "This unit contains 5 Striking Scorpions. It can include up to 5 additional Striking Scorpions (Power Rating +3). A Striking Scorpion Exarch can take the place of one Striking Scorpion. Each model is armed with a shuriken pistol, a scorpion chainsword and plasma grenades.",
        WargearOptions: "",
        MaxModelQuantity: "",
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: "",
        Image: StrikingScorpionsImage,
        Faction: Factions[27],
        Named: "",
        WarlordTraits: "",
        UnitRole: UnitsRoles[2],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Striking-Scorpions"
    };
    Units.push(StrikingScorpions);

    console.log("Units" + Units.length);
    return Units;
}

export default ReturnUnits;