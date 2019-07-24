const ReturnWargearOptions = (SlotId) => {
    let WargearOptions = [];
    
    //Aeldari Options

    const AvengerShurikenCatapult = {
        id: 1,
        Name: "Avenger shuriken catapult",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [1,3],
        WargearIds: [1]
    };
    WargearOptions.push(AvengerShurikenCatapult);

    const PlasmaGrenade = {
        id: 2,
        Name: "Plasma grenade",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [2,4,6,9,18,20],
        WargearIds: [2]
    };
    WargearOptions.push(PlasmaGrenade);

    const TwoAvengerShurikenCatapults = {
        id: 3,
        Name: "Two avenger shuriken catapults",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [3],
        WargearIds: [1,1]
    };
    WargearOptions.push(TwoAvengerShurikenCatapults);

    const ShurikenPistolAndPowerGlaive = {
        id: 4,
        Name: "Shuriken pistol and power glaive",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [3],
        WargearIds: [3,4]
    };
    WargearOptions.push(ShurikenPistolAndPowerGlaive);

    const ShurikenPistolAndDiresword = {
        id: 5,
        Name: "Shuriken pistol and diresword",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [3],
        WargearIds: [3,5]
    };
    WargearOptions.push(ShurikenPistolAndDiresword);

    const ShimmershieldAndPowerGlaive = {
        id: 6,
        Name: "Shimmershield and power glaive",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [3],
        WargearIds: [4,6]
    };
    WargearOptions.push(ShimmershieldAndPowerGlaive);

    const ShurikenCatapult = {
        id: 7,
        Name: "Shuriken catapult",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [5],
        WargearIds: [7]
    };
    WargearOptions.push(ShurikenCatapult);

    const ShurikenCannon = {
        id: 8,
        Name: "Shuriken cannon",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [7],
        WargearIds: [8]
    };
    WargearOptions.push(ShurikenCannon);

    const AeldariMissileLauncher = {
        id: 9,
        Name: "Aeldari missile launcher",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [7],
        WargearIds: [9]
    };
    WargearOptions.push(AeldariMissileLauncher);

    const BrightLance = {
        id: 10,
        Name: "Bright lance",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [7],
        WargearIds: [10]
    };
    WargearOptions.push(BrightLance);

    const ScatterLaser = {
        id: 11,
        Name: "Scatter laser",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [7],
        WargearIds: [11]
    };
    WargearOptions.push(ScatterLaser);

    const Starcannon = {
        id: 12,
        Name: "Starcannon",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [7],
        WargearIds: [12]
    };
    WargearOptions.push(Starcannon);

    const AeldariBladeAndShurikenPistol = {
        id: 13,
        Name: "Aeldari blade and shuriken pistol",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [8],
        WargearIds: [13,3]
    };
    WargearOptions.push(AeldariBladeAndShurikenPistol);

    const ChainswordAndShurikenPistol = {
        id: 14,
        Name: "Chainsword and shuriken pistol",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [8],
        WargearIds: [14,3]
    };
    WargearOptions.push(ChainswordAndShurikenPistol);

    const GuardianFlamer = {
        id: 15,
        Name: "Flamer ",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [16],
        UpToXModels: 2,
        WargearSlotId: [8],
        WargearIds: [15]
    };
    WargearOptions.push(GuardianFlamer);

    const GuardianFusionGun = {
        id: 16,
        Name: "Fusion Gun",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [15],
        UpToXModels: 2,
        WargearSlotId: [8],
        WargearIds: [16]
    };
    WargearOptions.push(GuardianFusionGun);

    const ShurikenPistolAndRangerLongRifle = {
        id: 17,
        Name: "Shuriken pistol, ranger long rifle",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [10],
        WargearIds: [17,3]
    };
    WargearOptions.push(ShurikenPistolAndRangerLongRifle);

    const DragonFusinGun = {
        id: 18,
        Name: "Fusion gun",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [11,13],
        WargearIds: [16]
    };
    WargearOptions.push(DragonFusinGun);

    const MeltaBomb = {
        id: 19,
        Name: "Melta bomb",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [12,14],
        WargearIds: [18]
    };
    WargearOptions.push(MeltaBomb);

    const Firepike = {
        id: 21,
        Name: "Firepike",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [13],
        WargearIds: [19]
    };
    WargearOptions.push(Firepike);

    const DragonsBreathFlamer = {
        id: 22,
        Name: "Dragon’s breath flamer",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [13],
        WargearIds: [20]
    };
    WargearOptions.push(DragonsBreathFlamer);

    const ShurikenPistolAndPowerSword = {
        id: 23,
        Name: "Shuriken pistol and a power sword",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [15,16],
        WargearIds: [21,3]
    };
    WargearOptions.push(ShurikenPistolAndPowerSword);

    const Executioner = {
        id: 24,
        Name: "Executioner",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [16],
        WargearIds: [22]
    };
    WargearOptions.push(Executioner);

    const Mirrorswords = {
        id: 25,
        Name: "Mirrorswords",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [16],
        WargearIds: [23]
    };
    WargearOptions.push(Mirrorswords);

    const ShurikenPistolAndChainsword  = {
        id: 26,
        Name: "Shuriken pistol and a Chainsword",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [17],
        WargearIds: [24,3]
    };
    WargearOptions.push(ShurikenPistolAndChainsword);

    const ShurikenPistol  = {
        id: 28,
        Name: "Shuriken pistol",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [22,24,26,28,29],
        WargearIds: [3]
    };
    WargearOptions.push(ShurikenPistol);

    const ScorpionsClaw  = {
        id: 29,
        Name: "Scorpion’s claw",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [29],
        WargearIds: [25]
    };
    WargearOptions.push(ScorpionsClaw);

    const ScorpionChainsword  = {
        id: 30,
        Name: "Scorpion chainsword",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [19],
        WargearIds: [24]
    };
    WargearOptions.push(ScorpionChainsword);

    const BitingBlade = {
        id: 31,
        Name: "Biting blade",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [19],
        WargearIds: [26]
    };
    WargearOptions.push(BitingBlade);

    const WitchBlade = {
        id: 32,
        Name: "Witchblade",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [21,23,27],
        WargearIds: [27]
    };
    WargearOptions.push(WitchBlade);

    const SingingSpear = {
        id: 33,
        Name: "Singing spear",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [21,23,27],
        WargearIds: [28]
    };
    WargearOptions.push(SingingSpear);

    const WitchStaff = {
        id: 34,
        Name: "Witch staff",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [25],
        WargearIds: [29]
    };
    WargearOptions.push(WitchStaff);

    const NullOption = {
        id: 35,
        Name: "--none--",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [],
        WargearIds: [99]
    };
    WargearOptions.push(NullOption);

    //Tyranid options =============

    const MonstrousRendingClaws = {
        id: 361,
        Name: "Monstrous rending claws",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [361],
        WargearIds: [361]
    };
    WargearOptions.push(MonstrousRendingClaws);

    const ClawsAndTeeth = {
        id: 362,
        Name: "Claws and teeth",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [362],
        WargearIds: [362]
    };
    WargearOptions.push(ClawsAndTeeth);

    const PincerTail = {
        id: 363,
        Name: "Prehensile pincer tail",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [363],
        WargearIds: [363]
    };
    WargearOptions.push(PincerTail);

    const TyrantWings = {
        id: 364,
        Name: "Wings",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [364],
        WargearIds: [364]
    };
    WargearOptions.push(TyrantWings);

    const MonstrousBoneswords = {
        id: 365,
        Name: "Monstrous boneswords",
        CountPerModel: 1,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [367],
        UpToXModels: null,
        WargearSlotId: [365,366],
        WargearIds: [365]
    };
    WargearOptions.push(MonstrousBoneswords);

    const WhipAndMonstrousSword = {
        id: 366,
        Name: "Lash whip and monstrous bonesword",
        CountPerModel: 1,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [367],
        UpToXModels: null,
        WargearSlotId: [365,366],
        WargearIds: [366]
    };
    WargearOptions.push(WhipAndMonstrousSword);

    const TyrantScythes2Pairs = {
        id: 367,
        Name: "Monstrous scything talons (2 pairs)",
        CountPerModel: 1,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [368,365,366,369,3610,3611,3612],
        UpToXModels: null,
        WargearSlotId: [365,366],
        WargearIds: [367]
    };
    WargearOptions.push(TyrantScythes2Pairs);

    const TyrantScythes1Pair = {
        id: 368,
        Name: "Monstrous scything talons (1 pair)",
        CountPerModel: 1,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [367],
        UpToXModels: null,
        WargearSlotId: [365,366],
        WargearIds: [368]
    };
    WargearOptions.push(TyrantScythes1Pair);

    const MonstrousDeathspitter = {
        id: 369,
        Name: "Deathspitter with slimer maggots",
        CountPerModel: 1,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [367],
        UpToXModels: null,
        WargearSlotId: [365,366],
        WargearIds: [369,369]
    };
    WargearOptions.push(MonstrousDeathspitter);

    const MonstrousDevourer = {
        id: 3610,
        Name: "Devourer with brainleech worms",
        CountPerModel: 1,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [367],
        UpToXModels: null,
        WargearSlotId: [365,366],
        WargearIds: [3610,3610]
    };
    WargearOptions.push(MonstrousDevourer);

    const Stranglethorn = {
        id: 3611,
        Name: "Stranglethorn cannon",
        CountPerModel: 1,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [3612,367],
        UpToXModels: null,
        WargearSlotId: [365,366],
        WargearIds: [3611]
    };
    WargearOptions.push(Stranglethorn);

    const HvVenomCannon = {
        id: 3612,
        Name: "Heavy venom cannon",
        CountPerModel: 1,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [3611,367],
        UpToXModels: null,
        WargearSlotId: [365,366],
        WargearIds: [3612]
    };
    WargearOptions.push(HvVenomCannon);

    const AdrenalGlandsMonstrous = {
        id: 3612,
        Name: "Adrenal glands",
        CountPerModel: 1,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [367],
        WargearIds: [3613]
    };
    WargearOptions.push(AdrenalGlandsMonstrous);

    const ToxinSacs1 = {
        id: 3613,
        Name: "Toxin sacs",
        CountPerModel: 1,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [368],
        WargearIds: [3614]
    };
    WargearOptions.push(ToxinSacs1);

    const NullOptionTyranidsDefault = {
        id: 3614,
        Name: "--none--",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [364,367,368],
        WargearIds: [99]
    };
    WargearOptions.push(NullOptionTyranidsDefault);

    const NullOptionTyranids = {
        id: 3615,
        Name: "--none--",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [365,366],
        WargearIds: [99]
    };
    WargearOptions.push(NullOptionTyranids);

    return WargearOptions.filter((option) => !!option.WargearSlotId.find((id) => parseInt(id) == parseInt(SlotId)));
}

export default ReturnWargearOptions;