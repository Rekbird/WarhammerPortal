const ReturnWargear = (WargearIds) => {
    let Wargears = [];
    let ReturnedWargears = [];

    //Aeldary Wargear

    const AvengerShurikenCatapult = {
        id: 1,
        Name: "Avenger shuriken catapult",
        Cost: 3,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(AvengerShurikenCatapult);

    const PlasmaGrenade = {
        id: 2,
        Name: "Plasma grenade",
        Cost: 0,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(PlasmaGrenade);

    const ShurikenPistol = {
        id: 3,
        Name: "Shuriken pistol",
        Cost: 0,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(ShurikenPistol);

    const PowerGlaive = {
        id: 4,
        Name: "Power glaive",
        Cost: 4,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(PowerGlaive);

    const Diresword = {
        id: 5,
        Name: "Diresword",
        Cost: 4,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(Diresword);

    const Shimmershield = {
        id: 6,
        Name: "Shimmershield",
        Cost: 10,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(Shimmershield);

    const ShurikenCatapult = {
        id: 7,
        Name: "Shuriken catapult",
        Cost: 0,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(ShurikenCatapult);

    const ShurikenCannon = {
        id: 8,
        Name: "Shuriken cannon",
        Cost: 10,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(ShurikenCannon);

    const AeldariMissileLauncher = {
        id: 9,
        Name: "Aeldari missile launcher",
        Cost: 20,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(AeldariMissileLauncher);

    const BrightLance = {
        id: 10,
        Name: "Bright lance",
        Cost: 20,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(BrightLance);

    const ScatterLaser = {
        id: 11,
        Name: "Scatter laser",
        Cost: 7,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(ScatterLaser);

    const Starcannon = {
        id: 12,
        Name: "Starcannon",
        Cost: 13,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(Starcannon);

    const AeldariBlade = {
        id: 13,
        Name: "Aeldari blade",
        Cost: 0,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(AeldariBlade);

    const Chainsword = {
        id: 14,
        Name: "Chainsword",
        Cost: 0,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(Chainsword);

    const Flamer = {
        id: 15,
        Name: "Flamer",
        Cost: 6,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(Flamer);

    const FusionGun = {
        id: 16,
        Name: "Fusion gun",
        Cost: 14,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(FusionGun);

    const RangerLongRifle = {
        id: 17,
        Name: "Ranger long rifle",
        Cost: 0,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(RangerLongRifle);

    const MeltaBomb = {
        id: 18,
        Name: "Melta bomb",
        Cost: 0,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(MeltaBomb);

    const Firepike = {
        id: 19,
        Name: "Firepike",
        Cost: 17,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(Firepike);

    const DragonsBreathFlamer = {
        id: 20,
        Name: "Dragon’s breath flamer",
        Cost: 14,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(DragonsBreathFlamer);

    const PowerSword = {
        id: 21,
        Name: "Power sword",
        Cost: 4,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(PowerSword);

    const Executioner = {
        id: 22,
        Name: "Executioner",
        Cost: 7,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(Executioner);

    const Mirrorswords = {
        id: 23,
        Name: "Mirrorswords",
        Cost: 4,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(Mirrorswords);

    const ScorpionChainsword = {
        id: 24,
        Name: "Scorpion chainsword",
        Cost: 1,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(ScorpionChainsword);

    const ScorpionsClaw = {
        id: 25,
        Name: "Scorpion’s claw",
        Cost: 9,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(ScorpionsClaw);

    const BitingBlade = {
        id: 26,
        Name: "Biting blade",
        Cost: 5,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(BitingBlade);

    const WitchBlade = {
        id: 27,
        Name: "Witchblade",
        Cost: 0,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(WitchBlade);

    const SingingSpear = {
        id: 28,
        Name: "Singing spear",
        Cost: 5,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(SingingSpear);

    const WitchStaff = {
        id: 29,
        Name: "Witch staff",
        Cost: 0,
        Type: null,
        Relic: false,
        Image: null,
        ChapterTacticId: null
    };
    Wargears.push(WitchStaff);

    //=========

    WargearIds.forEach(function(WargearId) {
        ReturnedWargears.push(Wargears.find((wargear) => parseInt(wargear.id) == parseInt(WargearId)));
    });

    return ReturnedWargears;
}

export default ReturnWargear;