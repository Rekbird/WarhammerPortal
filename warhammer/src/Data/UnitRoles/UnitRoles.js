function ReturnUnitRoles() {
    var UnitRoles = [];
    var Hq = {
        id:1,
        Name: "HQ",
        Image: ""
    };
    UnitRoles.push(Hq);

    var Troops = {
        id:2,
        Name: "Troops",
        Image: ""
    };
    UnitRoles.push(Troops);

    var Elites = {
        id:3,
        Name: "Elites",
        Image: ""
    };
    UnitRoles.push(Elites);

    var FastAttack = {
        id:4,
        Name: "Fast Attack",
        Image: ""
    };
    UnitRoles.push(FastAttack);

    var HeavySupport = {
        id:5,
        Name: "Heavy Support",
        Image: ""
    };
    UnitRoles.push(HeavySupport);

    var DedicatedTransport = {
        id:6,
        Name: "Dedicated Transport",
        Image: ""
    };
    UnitRoles.push(DedicatedTransport);

    var Flyer = {
        id:7,
        Name: "Flyer",
        Image: ""
    };
    UnitRoles.push(Flyer);

    var Fortification = {
        id:8,
        Name: "Fortification",
        Image: ""
    };
    UnitRoles.push(Fortification);

    var LordOfWar = {
        id:9,
        Name: "Lord of War",
        Image: ""
    };
    UnitRoles.push(DedicatedTransport);

    return UnitRoles;
}

export default ReturnUnitRoles;