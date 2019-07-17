import ReturnFactions from "../Factions/Factions.js";
import ReturnUnitRoles from "../UnitRoles/UnitRoles.js";

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
import AutarchWithWarpJumpGeneratorImage from "./AutarchWithWarpJumpGenerator.jpg";

function ReturnUnits() {
    const Factions = ReturnFactions();
    const UnitsRoles = ReturnUnitRoles();
    let Units = [];

    const DireAvengers = {
        id: 1,
        Name: "Dire Avengers",
        Codex: null,
        Description: "This unit contains 5 Dire Avengers. It can include up to 5 additional Dire Avengers (Power Rating +3). A Dire Avenger Exarch can take the place of one Dire Avenger. Each model is armed with an avenger shuriken catapult and plasma grenades.",
        MaxModelQuantity: 10,
        FactionKeywords: "",
        Keywords: "",
        KnowsSmite: false,
        Image: DireAvengersImage,
        Faction: Factions[27],
        Named: false,
        WarlordTraitId: null,
        UnitRole: UnitsRoles[1],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Dire-Avengers"
    };
    Units.push(DireAvengers);

    const GuardiansDefenders = {
        id: 2,
        Name: "Guardians Defenders",
        Codex: null,
        Description: "This unit contains 10 Guardians. It can include up to 10 additional Guardians (Power Rating +4). For every 10 Guardians in the unit, you may include one Heavy Weapon Platform. Each Guardian is armed with a shuriken catapult and plasma grenades. Each Heavy Weapon Platform is armed with a shuriken cannon.",
        MaxModelQuantity: 22,
        FactionKeywords: "",
        Keywords: "",
        KnowsSmite: false,
        Image: GuardiansDefendersImage,
        Faction: Factions[27],
        Named: false,
        WarlordTraitId: null,
        UnitRole: UnitsRoles[1],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Guardian-Defenders"
    };
    Units.push(GuardiansDefenders);

    const StormGuardians = {
        id: 3,
        Name: "Storm Guardians",
        Codex: "",
        Description: "This unit contains 8 Guardians. It can include up to 8 additional Guardians (Power Rating +3) or up to 16 additional Guardians (Power Rating +6). Each model is armed with a shuriken pistol, an Aeldari blade and plasma grenades.",
        MaxModelQuantity: 24,
        FactionKeywords: "",
        Keywords: "",
        KnowsSmite: false,
        Image: StormGuardiansImage,
        Faction: Factions[27],
        Named: false,
        WarlordTraitId: null,
        UnitRole: UnitsRoles[1],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Storm-Guardians"
    };
    Units.push(StormGuardians);

    const Rangers = {
        id: 4,
        Name: "Rangers",
        Codex: "",
        Description: "This unit contains 5 Rangers. It can include up to 5 additional Rangers (Power Rating +3). Each model is armed with a shuriken pistol and a ranger long rifle.",
        MaxModelQuantity: 10,
        FactionKeywords: "",
        Keywords: "",
        KnowsSmite: false,
        Image: RangersImage,
        Faction: Factions[27],
        Named: false,
        WarlordTraitId: null,
        UnitRole: UnitsRoles[1],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Rangers"
    };
    Units.push(Rangers);

    const FireDragons = {
        id: 5,
        Name: "Fire Dragons",
        Codex: "",
        Description: "This unit contains 5 Fire Dragons. It can include up to 5 additional Fire Dragons (Power Rating +6). A Fire Dragon Exarch can take the place of one Fire Dragon. Each model is armed with a fusion gun and melta bombs.",
        MaxModelQuantity: 10,
        FactionKeywords: "",
        Keywords: "",
        KnowsSmite: false,
        Image: FireDragonsImage,
        Faction: Factions[27],
        Named: false,
        WarlordTraitId: null,
        UnitRole: UnitsRoles[2],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Fire-Dragons"
    };
    Units.push(FireDragons);

    const HowlingBanshees = {
        id: 6,
        Name: "Howling Banshees",
        Codex: "",
        Description: "This unit contains 5 Howling Banshees. It can include up to 5 additional Howling Banshees (Power Rating +3). A Howling Banshee Exarch can take the place of one Howling Banshee. Each model is armed with a shuriken pistol and a power sword.",
        MaxModelQuantity: 10,
        FactionKeywords: "",
        Keywords: "",
        KnowsSmite: false,
        Image: HowlingBansheesImage,
        Faction: Factions[27],
        Named: false,
        WarlordTraitId: null,
        UnitRole: UnitsRoles[2],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Howling-Banshees"
    };
    Units.push(HowlingBanshees);

    const StrikingScorpions = {
        id: 7,
        Name: "Striking Scorpions",
        Codex: "",
        Description: "This unit contains 5 Striking Scorpions. It can include up to 5 additional Striking Scorpions (Power Rating +3). A Striking Scorpion Exarch can take the place of one Striking Scorpion. Each model is armed with a shuriken pistol, a scorpion chainsword and plasma grenades.",
        MaxModelQuantity: 10,
        FactionKeywords: "",
        Keywords: "",
        KnowsSmite: false,
        Image: StrikingScorpionsImage,
        Faction: Factions[27],
        Named: false,
        WarlordTraitId: null,
        UnitRole: UnitsRoles[2],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Striking-Scorpions"
    };
    Units.push(StrikingScorpions);

    const Farseer = {
        id: 8,
        Name: "Farseer",
        Codex: "",
        Description: "A Farseer is a single model armed with a shuriken pistol and a witchblade.",
        MaxModelQuantity: 1,
        FactionKeywords: "",
        Keywords: "",
        KnowsSmite: true,
        Image: FarseerImage,
        Faction: Factions[27],
        Named: false,
        WarlordTraitId: null,
        UnitRole: UnitsRoles[0],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Farseer"
    };
    Units.push(Farseer);

    const Warlock = {
        id: 9,
        Name: "Warlock",
        Codex: "",
        Description: "A Warlock is a single model armed with a shuriken pistol and a witchblade.",
        MaxModelQuantity: 1,
        FactionKeywords: "",
        Keywords: "",
        KnowsSmite: true,
        Image: WarlockImage,
        Faction: Factions[27],
        Named: false,
        WarlordTraitId: null,
        UnitRole: UnitsRoles[0],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Warlock"
    };
    Units.push(Warlock);

    const Spiritseer = {
        id: 10,
        Name: "Spiritseer",
        Codex: "",
        Description: "A Spiritseer is a single model armed with a shuriken pistol and a witch staff.",
        MaxModelQuantity: 1,
        FactionKeywords: "",
        Keywords: "",
        KnowsSmite: true,
        Image: SpiritSeerImage,
        Faction: Factions[27],
        Named: false,
        WarlordTraitId: null,
        UnitRole: UnitsRoles[0],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Spiritseer"
    };
    Units.push(Spiritseer);

    const Warlock_Conclave = {
        id: 11,
        Name: "Warlock Conclave",
        Codex: "",
        Description: "This unit contains 2 Warlocks. It can include up to 8 additional Warlocks (Power Rating +2 per model). Each model is armed with a shuriken pistol and a witchblade.",
        MaxModelQuantity: 10,
        FactionKeywords: "",
        Keywords: "",
        KnowsSmite: true,
        Image: WarlockConclaveImage,
        Faction: Factions[27],
        Named: false,
        WarlordTraitId: null,
        UnitRole: UnitsRoles[0],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Warlock-Conclave"
    };
    Units.push(Warlock_Conclave);

    const AutarchWithWarpJumpGenerator = {
        id: 12,
        Name: "Autarch with Warp Jump Generator",
        Codex: "",
        Description: "An Autarch with warp jump generator is a single model armed with a shuriken pistol and sunburst grenades.",
        MaxModelQuantity: 1,
        FactionKeywords: "",
        Keywords: "",
        KnowsSmite: false,
        Image: AutarchWithWarpJumpGeneratorImage,
        Faction: Factions[27],
        Named: false,
        WarlordTraitId: null,
        UnitRole: UnitsRoles[0],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Autarch-with-Warp-Jump-Generator"
    };
    Units.push(AutarchWithWarpJumpGenerator);

    const Asurmen = {
        id: 13,
        Name: "Asurmen",
        Codex: "",
        Description: "Asurmen is a single model armed with the Sword of Asur and two avenger shuriken catapults. Only one of this model may be included in your army.",
        MaxModelQuantity: 1,
        FactionKeywords: "",
        Keywords: "",
        KnowsSmite: false,
        Image: WarlockConclaveImage,
        Faction: Factions[27],
        Named: true,
        WarlordTraitId: null,
        UnitRole: UnitsRoles[0],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Asurmen"
    };
    Units.push(Asurmen);

    const Autarch = {
        id: 14,
        Name: "Autarch",
        Codex: "",
        Description: "An Autarch is a single model armed with a star glaive and plasma grenades. They are equipped with a Forceshield.",
        MaxModelQuantity: 1,
        FactionKeywords: "",
        Keywords: "",
        KnowsSmite: false,
        Image: WarlockConclaveImage,
        Faction: Factions[27],
        Named: false,
        WarlordTraitId: null,
        UnitRole: UnitsRoles[0],
        ForeignLink: "http://wahapedia.ru/wh40k8ed/factions/craftworlds/Autarch"
    };
    Units.push(Autarch);

    //console.log("Units" + Units.length);
    return Units;
}

export default ReturnUnits;