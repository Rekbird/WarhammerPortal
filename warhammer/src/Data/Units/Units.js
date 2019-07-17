import ReturnFactions from "../Factions/Factions.js";
import ReturnUnitRoles from "../UnitRoles/UnitRoles.js";
//---Aeldari images
import DireAvengersImage from "./DireAvengersImage.jpg";
import GuardiansDefendersImage from "./GuardiansDefendersImage.jpg";
import StormGuardiansImage from "./StormGuardiansImage.jpg";
import RangersImage from "./RangersImage.jpg";
import FireDragonsImage from "./FireDragonsImage.jpg";
import HowlingBansheesImage from "./HowlingBansheesImage.jpg";
import StrikingScorpionsImage from "./StrikingScorpionsImage.jpg";
import FarseerImage from "./FarseerImage.jpg";
import SpiritSeerImage from "./SpiritSeerImage.jpg";
import WarlockImage from "./WarlockImage.jpg";
import WarlockConclaveImage from "./WarlockConclaveImage.jpg";

//---Tyranid images

function ReturnUnits() {
    const Factions = ReturnFactions();
    const UnitsRoles = ReturnUnitRoles();
    let Units = [];

//Aeldari units =================

    const DireAvengers = {
        id: 1,
        Name: "Dire Avengers",
        Codex: "",
        Description: "This unit contains 5 Dire Avengers. It can include up to 5 additional Dire Avengers (Power Rating +3). A Dire Avenger Exarch can take the place of one Dire Avenger. Each model is armed with an avenger shuriken catapult and plasma grenades.",
        WargearOptions: "",
        MaxModelQuantity: 10,
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: false,
        Image: DireAvengersImage,
        Faction: Factions[27],
        Named: false,
        WarlordTraitId: "",
        UnitRole: UnitsRoles[1],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Dire-Avengers"
    };
    Units.push(DireAvengers);

    const GuardiansDefenders = {
        id: 2,
        Name: "Guardians Defenders",
        Codex: "",
        Description: "This unit contains 10 Guardians. It can include up to 10 additional Guardians (Power Rating +4). For every 10 Guardians in the unit, you may include one Heavy Weapon Platform. Each Guardian is armed with a shuriken catapult and plasma grenades. Each Heavy Weapon Platform is armed with a shuriken cannon.",
        WargearOptions: "",
        MaxModelQuantity: 22,
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: "",
        Image: GuardiansDefendersImage,
        Faction: Factions[27],
        Named: "",
        WarlordTraitId: "",
        UnitRole: UnitsRoles[1],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Guardian-Defenders"
    };
    Units.push(GuardiansDefenders);

    const StormGuardians = {
        id: 3,
        Name: "Storm Guardians",
        Codex: "",
        Description: "This unit contains 8 Guardians. It can include up to 8 additional Guardians (Power Rating +3) or up to 16 additional Guardians (Power Rating +6). Each model is armed with a shuriken pistol, an Aeldari blade and plasma grenades.",
        WargearOptions: "",
        MaxModelQuantity: 24,
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: "",
        Image: StormGuardiansImage,
        Faction: Factions[27],
        Named: "",
        WarlordTraitId: "",
        UnitRole: UnitsRoles[1],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Storm-Guardians"
    };
    Units.push(StormGuardians);

    const Rangers = {
        id: 4,
        Name: "Rangers",
        Codex: "",
        Description: "This unit contains 5 Rangers. It can include up to 5 additional Rangers (Power Rating +3). Each model is armed with a shuriken pistol and a ranger long rifle.",
        WargearOptions: "",
        MaxModelQuantity: 10,
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: "",
        Image: RangersImage,
        Faction: Factions[27],
        Named: "",
        WarlordTraitId: "",
        UnitRole: UnitsRoles[1],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Rangers"
    };
    Units.push(Rangers);

    const FireDragons = {
        id: 5,
        Name: "Fire Dragons",
        Codex: "",
        Description: "This unit contains 5 Fire Dragons. It can include up to 5 additional Fire Dragons (Power Rating +6). A Fire Dragon Exarch can take the place of one Fire Dragon. Each model is armed with a fusion gun and melta bombs.",
        WargearOptions: "",
        MaxModelQuantity: 10,
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: "",
        Image: FireDragonsImage,
        Faction: Factions[27],
        Named: "",
        WarlordTraitId: "",
        UnitRole: UnitsRoles[2],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Fire-Dragons"
    };
    Units.push(FireDragons);

    const HowlingBanshees = {
        id: 6,
        Name: "Howling Banshees",
        Codex: "",
        Description: "This unit contains 5 Howling Banshees. It can include up to 5 additional Howling Banshees (Power Rating +3). A Howling Banshee Exarch can take the place of one Howling Banshee. Each model is armed with a shuriken pistol and a power sword.",
        WargearOptions: "",
        MaxModelQuantity: 10,
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: "",
        Image: HowlingBansheesImage,
        Faction: Factions[27],
        Named: "",
        WarlordTraitId: "",
        UnitRole: UnitsRoles[2],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Howling-Banshees"
    };
    Units.push(HowlingBanshees);

    const StrikingScorpions = {
        id: 7,
        Name: "Striking Scorpions",
        Codex: "",
        Description: "This unit contains 5 Striking Scorpions. It can include up to 5 additional Striking Scorpions (Power Rating +3). A Striking Scorpion Exarch can take the place of one Striking Scorpion. Each model is armed with a shuriken pistol, a scorpion chainsword and plasma grenades.",
        WargearOptions: "",
        MaxModelQuantity: 10,
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: "",
        Image: StrikingScorpionsImage,
        Faction: Factions[27],
        Named: "",
        WarlordTraitId: "",
        UnitRole: UnitsRoles[2],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Striking-Scorpions"
    };
    Units.push(StrikingScorpions);

    const Farseer = {
        id: 8,
        Name: "Farseer",
        Codex: "",
        Description: "A Farseer is a single model armed with a shuriken pistol and a witchblade.",
        WargearOptions: "",
        MaxModelQuantity: 1,
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: true,
        Image: FarseerImage,
        Faction: Factions[27],
        Named: "",
        WarlordTraitId: "",
        UnitRole: UnitsRoles[0],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Farseer"
    };
    Units.push(Farseer);

    const Warlock = {
        id: 9,
        Name: "Warlock",
        Codex: "",
        Description: "A Warlock is a single model armed with a shuriken pistol and a witchblade.",
        WargearOptions: "",
        MaxModelQuantity: 1,
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: true,
        Image: WarlockImage,
        Faction: Factions[27],
        Named: "",
        WarlordTraitId: "",
        UnitRole: UnitsRoles[0],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Warlock"
    };
    Units.push(Warlock);

    const Spiritseer = {
        id: 10,
        Name: "Spiritseer",
        Codex: "",
        Description: "A Spiritseer is a single model armed with a shuriken pistol and a witch staff.",
        WargearOptions: "",
        MaxModelQuantity: 1,
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: true,
        Image: SpiritSeerImage,
        Faction: Factions[27],
        Named: "",
        WarlordTraitId: "",
        UnitRole: UnitsRoles[0],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Spiritseer"
    };
    Units.push(Spiritseer);

    const Warlock_Conclave = {
        id: 11,
        Name: "Warlock Conclave",
        Codex: "",
        Description: "This unit contains 2 Warlocks. It can include up to 8 additional Warlocks (Power Rating +2 per model). Each model is armed with a shuriken pistol and a witchblade.",
        WargearOptions: "",
        MaxModelQuantity: 10,
        FactionKeywords: "",
        Keywords: "",
        PowerRating: "",
        KnowsSmite: true,
        Image: WarlockConclaveImage,
        Faction: Factions[27],
        Named: "",
        WarlordTraitId: "",
        UnitRole: UnitsRoles[0],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Warlock-Conclave"
    };
    Units.push(Warlock_Conclave);

//Aeldari units =================

const Broodlord = {
    id: 361,
    Name: "Broodlord",
    Codex: null,
    Description: "A Broodlord is a single model armed with monstrous rending claws.",
    MaxModelQuantity: 1,
    FactionKeywords: "",
    Keywords: "",
    KnowsSmite: true,
    Image: WarlockConclaveImage,
    Faction: Factions[35],
    Named: null,
    WarlordTraitId: null,
    UnitRole: UnitsRoles[0],
    ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/tyranids/Broodlord"
};
Units.push(Broodlord);

const Neurothrope = {
    id: 362,
    Name: "Neurothrope",
    Codex: null,
    Description: "A Neurothrope is a single model armed with claws and teeth.",
    MaxModelQuantity: 1,
    FactionKeywords: "",
    Keywords: "",
    KnowsSmite: true,
    Image: WarlockConclaveImage,
    Faction: Factions[35],
    Named: null,
    WarlordTraitId: null,
    UnitRole: UnitsRoles[0],
    ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/tyranids/Neurothrope"
};
Units.push(Neurothrope);

const UnitName = {
    id: 36 + length,
    Name: "NAME",
    Codex: null,
    Description: "DESCRIPTION",
    MaxModelQuantity: 1,
    FactionKeywords: "",
    Keywords: "",
    KnowsSmite: true,
    Image: WarlockConclaveImage,
    Faction: Factions[35],
    Named: null,
    WarlordTraitId: null,
    UnitRole: UnitsRoles[0],
    ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/tyranids/Broodlord"
};
Units.push(UnitName);

    return Units;
}

export default ReturnUnits;