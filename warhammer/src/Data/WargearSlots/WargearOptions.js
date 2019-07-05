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
        WargearSlotId: [1,3]
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
        WargearSlotId: [2,4,6,9,18,20]
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
        WargearSlotId: [3]
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
        WargearSlotId: [3]
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
        WargearSlotId: [3]
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
        WargearSlotId: [3]
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
        WargearSlotId: [5]
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
        WargearSlotId: [7]
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
        WargearSlotId: [7]
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
        WargearSlotId: [7]
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
        WargearSlotId: [7]
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
        WargearSlotId: [7]
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
        WargearSlotId: [8]
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
        WargearSlotId: [8]
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
        WargearSlotId: [8]
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
        WargearSlotId: [8]
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
        WargearSlotId: [10]
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
        WargearSlotId: [11,13]
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
        WargearSlotId: [12,14]
    };
    WargearOptions.push(MeltaBomb);

    const MeltaBomb = {
        id: 20,
        Name: "Melta bomb",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [13]
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
        WargearSlotId: [13]
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
        WargearSlotId: [13]
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
        WargearSlotId: [15,16]
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
        WargearSlotId: [16]
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
        WargearSlotId: [16]
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
        WargearSlotId: [17]
    };
    WargearOptions.push(ShurikenPistolAndChainsword);

    const ShurikenPistolAndChainsword  = {
        id: 27,
        Name: "Shuriken pistol and a Chainsword",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [17]
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
        WargearSlotId: [25]
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
        WargearSlotId: [22,24,26,28,29]
    };
    WargearOptions.push(ScorpionsClaw);

    const ScorpionChainsword  = {
        id: 30,
        Name: "Shuriken pistol",
        CountPerModel: null,
        PerXmodels: null,
        Default: true,
        LinkedOptionsId: [],
        UpToXModels: null,
        WargearSlotId: [19]
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
        WargearSlotId: [19]
    };
    WargearOptions.push(BitingBlade);

    //=============

    return WargearOptions.filter((option) => !!(option.WargearSlotId.filter((id) => id == SlotId)));
}

export default ReturnWargearOptions;