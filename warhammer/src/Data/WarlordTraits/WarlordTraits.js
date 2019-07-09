function ReturnWarlordTraits(FactionId, ChapterTacticId) {
    let Traits = [];
//Craftworlds traits ---------------
    const AmbushOfBlades = {
        id: 1,
        Name: "Ambush Of Blades",
        Description: "Each time you make a hit roll of 6 or more for a friendly <CRAFTWORLD> unit within 6\" of your Warlord " +
        "in the Fight phase, the Armour Penetration characteristic of that attack is increased by 1 (i.e. AP0 becomes AP-1, AP-1 becomes AP-2, and so on).",
        FactionId: 28,
        ChapterTacticId: null,
    };
    Traits.push(AmbushOfBlades);

    const AnEyeOnDistantEvents = {
        id: 2,
        Name: "An Eye On Distant Events",
        Description: "Enemy units cannot fire Overwatch at your Warlord.",
        FactionId: 28,
        ChapterTacticId: null,
    };
    Traits.push(AnEyeOnDistantEvents);

    const FalconsSwiftness = {
        id: 3,
        Name: "Falcon's Swiftness",
        Description: "Add 2 to your Warlord’s Move characteristic.",
        FactionId: 28,
        ChapterTacticId: null,
    };
    Traits.push(FalconsSwiftness);

    const FatesMessenger = {
        id: 4,
        Name: "Fate's Messenger",
        Description: "Add 1 to the Wounds characteristic of your Warlord. In addition, roll a dice each time your Warlord loses a wound. On a roll of 6, your Warlord does not lose the wound.",
        FactionId: 28,
        ChapterTacticId: null,
    };
    Traits.push(FatesMessenger);

    const MarkOfTheHunter = {
        id: 5,
        Name: "Mark of the incomparable hunter",
        Description: "Your Warlord can target enemy CHARACTERS in the Shooting phase even if they are not the closest enemy model.",
        FactionId: 28,
        ChapterTacticId: null,
    };
    Traits.push(MarkOfTheHunter);

    const SeerOfVector = {
        id: 6,
        Name: "Seer of the shifting vector",
        Description: "Once per battle round, you can re-roll a single hit roll, wound roll, save roll, Psychic test or Deny The Witch test made for your Warlord.",
        FactionId: 28,
        ChapterTacticId: null,
    };
    Traits.push(SeerOfVector);

    return Traits.filter(e => e.FactionId == FactionId && (!e.ChapterTacticId || e.ChapterTacticId == ChapterTacticId));
}

export default ReturnWarlordTraits;