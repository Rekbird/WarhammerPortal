const ReturnSubFactions = (FactionId) => {
    let SubFactions = [];
    let ReturnedSubFactions = [];

    //Tyranid SubFactions ===============

    const Behemoth = {
        id: 361,
        Name: "Behemoth: Hyper-aggression",
        FactionId: 36
    };
    SubFactions.push(Behemoth);

    const Gorgon = {
        id: 362,
        Name: "Gorgon: Adaptive Toxins",
        FactionId: 36
    };
    SubFactions.push(Gorgon);

    const Hydra = {
        id: 363,
        Name: "Hydra: Swarming Instincts",
        FactionId: 36
    };
    SubFactions.push(Hydra);

    const Jormungandr = {
        id: 364,
        Name: "Jormungandr: Tunnel Networks",
        FactionId: 36
    };
    SubFactions.push(Jormungandr);

    const Kraken = {
        id: 365,
        Name: "Kraken: Questing Tendrils",
        FactionId: 36
    };
    SubFactions.push(Kraken);

    const Kronos = {
        id: 366,
        Name: "Kronos: Bio-barrage",
        FactionId: 36
    };
    SubFactions.push(Kronos);

    const Leviathan = {
        id: 367,
        Name: "Leviathan: Synaptic Imperative",
        FactionId: 36
    };
    SubFactions.push(Leviathan);

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