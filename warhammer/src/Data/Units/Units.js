import ReturnFactions from "../Factions/Factions.js";
import ReturnUnitRoles from "../UnitRoles/UnitRoles.js";

import DireAvengersImage from "./DireAvengersImage.jpg";
import GuardiansDefendersImage from "./GuardiansDefendersImage.jpg";
import StormGuardiansImage from "./StormGuardiansImage.jpg";
import RangersImage from "./RangersImage.jpg";

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

    console.log("Units" + Units.length);
    return Units;
}

export default ReturnUnits;