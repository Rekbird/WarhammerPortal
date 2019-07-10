const ReturnSubFactions = (FactionId) => {
    let SubFactions = [];
    let ReturnedSubFactions = [];

    //Aeldary SubFactions ===============

    const Alaitoc = {
        id: 1,
        Name: "Alaitoc: Fieldcraft",
        FactionId: 28
    };
    SubFactions.push(Alaitoc);

    const BielTan = {
        id: 2,
        Name: "Biel-Tan: Swordwind",
        FactionId: 28
    };
    SubFactions.push(BielTan);

    const Iyanden = {
        id: 3,
        Name: "Iyanden: Stoic Endurance",
        FactionId: 28
    };
    SubFactions.push(Iyanden);

    const SaimHann = {
        id: 4,
        Name: "Saim-Hann: Wild Host",
        FactionId: 28
    };
    SubFactions.push(SaimHann);

    const Ulthwe = {
        id: 5,
        Name: "Ulthwé: Foresight of the Damned",
        FactionId: 28
    };
    SubFactions.push(Ulthwe);

    ReturnedSubFactions = SubFactions.filter(subfaction => parseInt(subfaction.FactionId) == parseInt(FactionId));

    return ReturnedSubFactions;
}

export default ReturnSubFactions;