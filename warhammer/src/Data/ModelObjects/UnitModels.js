const ReturnUnitModels = (UnitId) => {
    let UnitModels = [];
    let Model1 = {
        id: 1,
        Name: "Dire Avenger",
        Cost: 8,
        MaxQuant: 10,
        MinQuant: 5,
        ModelsIncluding: 1,
        UnitId: 1,
        PerXmodels: null
    };
    UnitModels.push(Model1);

    let Model2 = {
        id: 2,
        Name: "Dire Avenger Exarch",
        Cost: 8,
        MaxQuant: 1,
        MinQuant: 0,
        ModelsIncluding: 1,
        UnitId: 1,
        PerXmodels: null
    };
    UnitModels.push(Model2);

    let Model3 = {
        id: 3,
        Name: "Guardian Defender",
        Cost: 8,
        MaxQuant: 20,
        MinQuant: 10,
        ModelsIncluding: 1,
        UnitId: 2,
        PerXmodels: null
    };
    UnitModels.push(Model3);

    let Model4 = {
        id: 4,
        Name: "Heavy Weapon Platform",
        Cost: 5,
        MaxQuant: 2,
        MinQuant: 0,
        ModelsIncluding: 1,
        UnitId: 2,
        PerXmodels: 10
    };
    UnitModels.push(Model4);

    let Model5 = {
        id: 5,
        Name: "Storm Guardian",
        Cost: 6,
        MaxQuant: 24,
        MinQuant: 8,
        ModelsIncluding: 1,
        UnitId: 3,
        PerXmodels: null
    };
    UnitModels.push(Model5);

    let Model6 = {
        id: 6,
        Name: "Ranger",
        Cost: 12,
        MaxQuant: 10,
        MinQuant: 5,
        ModelsIncluding: 1,
        UnitId: 4,
        PerXmodels: null
    };
    UnitModels.push(Model6);

    let Model7 = {
        id: 7,
        Name: "Fire Dragon",
        Cost: 10,
        MaxQuant: 10,
        MinQuant: 5,
        ModelsIncluding: 1,
        UnitId: 5,
        PerXmodels: null
    };
    UnitModels.push(Model7);

    let Model8 = {
        id: 8,
        Name: "Fire Dragon Exarch",
        Cost: 10,
        MaxQuant: 1,
        MinQuant: 0,
        ModelsIncluding: 1,
        UnitId: 5,
        PerXmodels: null
    };
    UnitModels.push(Model8);

    let Model9 = {
        id: 9,
        Name: "Howling Banshee",
        Cost: 9,
        MaxQuant: 10,
        MinQuant: 5,
        ModelsIncluding: 1,
        UnitId: 6,
        PerXmodels: null
    };
    UnitModels.push(Model9);

    let Model10 = {
        id: 10,
        Name: "Howling Banshee Exarch",
        Cost: 9,
        MaxQuant: 1,
        MinQuant: 0,
        ModelsIncluding: 1,
        UnitId: 6,
        PerXmodels: null
    };
    UnitModels.push(Model10);

    let Model11 = {
        id: 11,
        Name: "Striking Scorpion",
        Cost: 10,
        MaxQuant: 10,
        MinQuant: 5,
        ModelsIncluding: 1,
        UnitId: 7,
        PerXmodels: null
    };
    UnitModels.push(Model11);

    let Model12 = {
        id: 12,
        Name: "Striking Scorpion Exarch",
        Cost: 10,
        MaxQuant: 1,
        MinQuant: 0,
        ModelsIncluding: 1,
        UnitId: 7,
        PerXmodels: null
    };
    UnitModels.push(Model12);

    let Model13 = {
        id: 13,
        Name: "Farseer",
        Cost: 110,
        MaxQuant: 1,
        MinQuant: 1,
        ModelsIncluding: 1,
        UnitId: 8,
        PerXmodels: null
    };
    UnitModels.push(Model13);

    let Model14 = {
        id: 14,
        Name: "Warlock",
        Cost: 55,
        MaxQuant: 1,
        MinQuant: 1,
        ModelsIncluding: 1,
        UnitId: 9,
        PerXmodels: null
    };
    UnitModels.push(Model14);

    let Model15 = {
        id: 15,
        Name: "Spiritseer",
        Cost: 65,
        MaxQuant: 1,
        MinQuant: 1,
        ModelsIncluding: 1,
        UnitId: 10,
        PerXmodels: null
    };
    UnitModels.push(Model15);

    let Model16 = {
        id: 16,
        Name: "Warlock",
        Cost: 45,
        MaxQuant: 10,
        MinQuant: 2,
        ModelsIncluding: 1,
        UnitId: 11,
        PerXmodels: null
    };
    UnitModels.push(Model16);

    const Model17 = {
        id: 17,
        Name: "Autarch with Warp Jump Generator",
        Cost: 73,
        MaxQuant: 1,
        MinQuant: 1,
        ModelsIncluding: 1,
        UnitId: 12,
        PerXmodels: null
    };
    UnitModels.push(Model17);

    const Model18 = {
        id: 18,
        Name: "Autarch with Swooping Hawk Wings",
        Cost: 85,
        MaxQuant: 1,
        MinQuant: 1,
        ModelsIncluding: 1,
        UnitId: 14,
        PerXmodels: null
    };
    UnitModels.push(Model18);

    return UnitModels.filter((model) => model.UnitId == UnitId);
}

export default ReturnUnitModels;