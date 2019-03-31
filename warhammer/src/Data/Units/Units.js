import ReturnFactions from "../Factions/Factions.js";
import ReturnUnitRoles from "../UnitRoles/UnitRoles.js";

function ReturnUnits() {
    var Factions = ReturnFactions();
    var UnitsRoles = ReturnUnitRoles();
    var Units = [];

    var DireAvengers = {
        id: 1,
        Name: "Dire Avengers",
        Codex: "",
        Description: "",
        WargearOptions: "",
        MaxModelQuantity: "",
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: "",
        Image: "",
        Faction: Factions[27],
        Named: "",
        WarlordTraits: "",
        UnitRole: UnitsRoles[1]
    };
    Units.push(DireAvengers);

    var GuardiansDefenders = {
        id: 2,
        Name: "Guardians Defenders",
        Codex: "",
        Description: "",
        WargearOptions: "",
        MaxModelQuantity: "",
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: "",
        Image: "",
        Faction: Factions[27],
        Named: "",
        WarlordTraits: "",
        UnitRole: UnitsRoles[1]
    };
    Units.push(GuardiansDefenders);

    var StormGuardians = {
        id: 3,
        Name: "Storm Guardians",
        Codex: "",
        Description: "",
        WargearOptions: "",
        MaxModelQuantity: "",
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: "",
        Image: "",
        Faction: Factions[27],
        Named: "",
        WarlordTraits: "",
        UnitRole: UnitsRoles[1]
    };
    Units.push(StormGuardians);

    var Rangers = {
        id: 4,
        Name: "Rangers",
        Codex: "",
        Description: "",
        WargearOptions: "",
        MaxModelQuantity: "",
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: "",
        Image: "",
        Faction: Factions[27],
        Named: "",
        WarlordTraits: "",
        UnitRole: UnitsRoles[1]
    };
    Units.push(Rangers);

    return Units;
}

export default ReturnUnits;