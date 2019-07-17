const ReturnUnitPowerLevel = (UnitId) => {
    let UnitPowerLevels =[];

    const PowerLevel1 = {
        id:1,
        PowerLevel:3,
        NumberOfModels: 5,
        UnitIds:[1,4,6]
    };
    UnitPowerLevels.push(PowerLevel1);

    const PowerLevel2 = {
        id:2,
        PowerLevel:6,
        NumberOfModels: 10,
        UnitIds:[1,4,6]
    };
    UnitPowerLevels.push(PowerLevel2);

    const PowerLevel3 = {
        id:3,
        PowerLevel:5,
        NumberOfModels: 10,
        UnitIds:[2]
    };
    UnitPowerLevels.push(PowerLevel3);

    const PowerLevel4 = {
        id:4,
        PowerLevel:10,
        NumberOfModels: 20,
        UnitIds:[2]
    };
    UnitPowerLevels.push(PowerLevel4);

    const PowerLevel5 = {
        id:5,
        PowerLevel:3,
        NumberOfModels: 8,
        UnitIds:[3]
    };
    UnitPowerLevels.push(PowerLevel5);

    const PowerLevel6 = {
        id:6,
        PowerLevel:6,
        NumberOfModels: 16,
        UnitIds:[3]
    };
    UnitPowerLevels.push(PowerLevel6);

    const PowerLevel7 = {
        id:7,
        PowerLevel:9,
        NumberOfModels: 24,
        UnitIds:[3]
    };
    UnitPowerLevels.push(PowerLevel7);

    const PowerLevel8 = {
        id:8,
        PowerLevel:6,
        NumberOfModels: 5,
        UnitIds:[5]
    };
    UnitPowerLevels.push(PowerLevel8);

    const PowerLevel9 = {
        id:9,
        PowerLevel:12,
        NumberOfModels: 10,
        UnitIds:[5]
    };
    UnitPowerLevels.push(PowerLevel9);

    const PowerLevel10 = {
        id:10,
        PowerLevel:4,
        NumberOfModels: 5,
        UnitIds:[7]
    };
    UnitPowerLevels.push(PowerLevel10);

    const PowerLevel11 = {
        id:11,
        PowerLevel:7,
        NumberOfModels: 10,
        UnitIds:[7]
    };
    UnitPowerLevels.push(PowerLevel11);

    const PowerLevel12 = {
        id:12,
        PowerLevel:6,
        NumberOfModels: 1,
        UnitIds:[8]
    };
    UnitPowerLevels.push(PowerLevel12);

    const PowerLevel13 = {
        id:13,
        PowerLevel:2,
        NumberOfModels: 1,
        UnitIds:[9]
    };
    UnitPowerLevels.push(PowerLevel13);

    const PowerLevel14 = {
        id:14,
        PowerLevel:3,
        NumberOfModels: 1,
        UnitIds:[10]
    };
    UnitPowerLevels.push(PowerLevel14);

    const PowerLevel15 = {
        id:15,
        PowerLevel:3,
        NumberOfModels: 2,
        UnitIds:[11]
    };
    UnitPowerLevels.push(PowerLevel15);

    const PowerLevel16 = {
        id:16,
        PowerLevel:5,
        NumberOfModels: 3,
        UnitIds:[11]
    };
    UnitPowerLevels.push(PowerLevel16);

    const PowerLevel17 = {
        id:17,
        PowerLevel:7,
        NumberOfModels: 4,
        UnitIds:[11]
    };
    UnitPowerLevels.push(PowerLevel17);

    const PowerLevel18 = {
        id:18,
        PowerLevel:9,
        NumberOfModels: 5,
        UnitIds:[11]
    };
    UnitPowerLevels.push(PowerLevel18);

    const PowerLevel19 = {
        id:19,
        PowerLevel:11,
        NumberOfModels: 6,
        UnitIds:[11]
    };
    UnitPowerLevels.push(PowerLevel19);

    const PowerLevel20 = {
        id:20,
        PowerLevel:13,
        NumberOfModels: 7,
        UnitIds:[11]
    };
    UnitPowerLevels.push(PowerLevel20);

    const PowerLevel21 = {
        id:21,
        PowerLevel:15,
        NumberOfModels: 8,
        UnitIds:[11]
    };
    UnitPowerLevels.push(PowerLevel21);

    const PowerLevel22 = {
        id:22,
        PowerLevel:17,
        NumberOfModels: 9,
        UnitIds:[11]
    };
    UnitPowerLevels.push(PowerLevel22);

    const PowerLevel23 = {
        id:23,
        PowerLevel:19,
        NumberOfModels: 10,
        UnitIds:[11]
    };
    UnitPowerLevels.push(PowerLevel23);

    const PowerLevel24 = {
        id:24,
        PowerLevel:5,
        NumberOfModels: 1,
        UnitIds:[12]
    };
    UnitPowerLevels.push(PowerLevel24);

    return UnitPowerLevels.filter((level) => !!level.UnitIds.find((id) => id == UnitId));

}

export default ReturnUnitPowerLevel;