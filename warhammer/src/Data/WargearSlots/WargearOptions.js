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
        WargearSlotId: [2,4,6,9,18,20,34,39],
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
        WargearSlotId: [22,24,26,28,29,31],
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
        WargearSlotId: [30,32,33,34,43,44,45,46],
        WargearIds: []
    };
    WargearOptions.push(NullOption);

    const FusionPistol = {
        id: 36,
        Name: "Fusion pistol",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [31],
        WargearIds: [30]
    };
    WargearOptions.push(FusionPistol);

    const Mandiblasters = {
        id: 37,
        Name: "Mandiblasters",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [30,36],
        WargearIds: [31]
    };
    WargearOptions.push(Mandiblasters);

    const BansheeMask = {
        id: 38,
        Name: "Banshee Mask",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [30],
        WargearIds: [32]
    };
    WargearOptions.push(BansheeMask);

    const AutarchAvengerShurikenCatapult = {
        id: 39,
        Name: "Avenger shuriken catapult",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [33,32],
        WargearIds: [1]
    };
    WargearOptions.push(AutarchAvengerShurikenCatapult);

    const AutarchDeathSpinner = {
        id: 40,
        Name: "Death spinner",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [41],
        UpToXModels: null,
        WargearSlotId: [33,32],
        WargearIds: [33]
    };
    WargearOptions.push(AutarchDeathSpinner);

    const AutarchFusionGun = {
        id: 41,
        Name: "Fusion gun",
        CountPerModel: 1,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [41,42,44],
        UpToXModels: null,
        WargearSlotId: [33,32],
        WargearIds: [16]
    };
    WargearOptions.push(AutarchFusionGun);

    const AutarchLasblaster = {
        id: 42,
        Name: "Lasblaster",
        CountPerModel: 1,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [41,42,44],
        UpToXModels: null,
        WargearSlotId: [33,32],
        WargearIds: [34]
    };
    WargearOptions.push(AutarchLasblaster);

    const AutarchPowerSword = {
        id: 43,
        Name: "Power sword",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [33,32],
        WargearIds: [21]
    };
    WargearOptions.push(AutarchPowerSword);

    const AutarchReaperLauncher = {
        id: 44,
        Name: "Reaper launcher",
        CountPerModel: 1,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [41,42,44],
        UpToXModels: null,
        WargearSlotId: [33,32],
        WargearIds: [35]
    };
    WargearOptions.push(AutarchReaperLauncher);

    const AutarchScorpionChainsword = {
        id: 45,
        Name: "Scorpion chainsword",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [33,32],
        WargearIds: [24]
    };
    WargearOptions.push(AutarchScorpionChainsword);

    const AutarchForceshield = {
        id: 46,
        Name: "Forceshield",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [35,40],
        WargearIds: [36]
    };
    WargearOptions.push(AutarchForceshield);

    const DefaultFusionPistol = {
        id: 47,
        Name: "Fusion pistol",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [37],
        WargearIds: [30]
    };
    WargearOptions.push(DefaultFusionPistol);

    const DefaultAutarchPowerSword = {
        id: 48,
        Name: "Power sword",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [38],
        WargearIds: [21]
    };
    WargearOptions.push(DefaultAutarchPowerSword);

    const TwinShurikenCannon = {
        id: 49,
        Name: "Twin shuriken cannon",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [41],
        WargearIds: [37]
    };
    WargearOptions.push(TwinShurikenCannon);

    const TwinBrightLance = {
        id: 50,
        Name: "Twin bright lance",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [41],
        WargearIds: [38]
    };
    WargearOptions.push(TwinBrightLance);

    const TwinScatterLaser = {
        id: 51,
        Name: "Twin scatter laser",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [41],
        WargearIds: [39]
    };
    WargearOptions.push(TwinScatterLaser);

    const TwinStarcannon = {
        id: 52,
        Name: "Twin starcannon",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [41],
        WargearIds: [40]
    };
    WargearOptions.push(TwinStarcannon);

    const TwinAeldariMissileLauncher = {
        id: 53,
        Name: "Twin Aeldari missile launcher",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [41],
        WargearIds: [41]
    };
    WargearOptions.push(TwinAeldariMissileLauncher);

    const WaveSerpentShurikenCannon = {
        id: 54,
        Name: "Shuriken cannon",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [42],
        WargearIds: [8]
    };
    WargearOptions.push(WaveSerpentShurikenCannon);

    const TwinShurikenCatapult = {
        id: 55,
        Name: "Twin shuriken catapult",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [42],
        WargearIds: [42]
    };
    WargearOptions.push(TwinShurikenCatapult);

    const CrystalTargetingMatrix = {
        id: 56,
        Name: "Crystal targeting matrix",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [43],
        WargearIds: [43]
    };
    WargearOptions.push(CrystalTargetingMatrix);

    const SpiritStones = {
        id: 57,
        Name: "Spirit stones",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [44],
        WargearIds: [44]
    };
    WargearOptions.push(SpiritStones);

    const StarEngines = {
        id: 58,
        Name: "Star engines",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [45],
        WargearIds: [45]
    };
    WargearOptions.push(StarEngines);
    
    const VectoredEngines = {
        id: 59,
        Name: "Vectored engines",
        CountPerModel: null,
        PerXmodels: null,
        Default: false,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [46],
        WargearIds: [46]
    };
    WargearOptions.push(VectoredEngines);

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
        WargearSlotId: [365],
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
        WargearSlotId: [364,366,367,368],
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
        WargearSlotId: [365],
        WargearIds: [99]
    };
    WargearOptions.push(NullOptionTyranids);

    //=============
    

    //return WargearOptions.filter((option) => !!option.WargearSlotId.find((id) => parseInt(id) == parseInt(SlotId)));
    return WargearOptions.filter((option) => option.WargearSlotId.indexOf(SlotId) != -1);
}

export default ReturnWargearOptions;