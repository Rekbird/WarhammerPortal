import RoleTroopsImage from "./RoleTroopsImage.png";
import RoleDedicatedTransportImage from "./RoleDedicatedTransportImage.png";
import RoleElitesImage from "./RoleElitesImage.png";
import RoleFastAttackImage from "./RoleFastAttackImage.png";
import RoleFlyersImage from "./RoleFlyersImage.png";
import RoleFortificationsImage from "./RoleFortificationsImage.png";
import RoleHeavySupportImage from "./RoleHeavySupportImage.png";
import RoleHQImage from "./RoleHQImage.png";
import RoleLordsOfWarImage from "./RoleLordsOfWarImage.png";

function ReturnUnitRoles() {
    var UnitRoles = [];
    var Hq = {
        id:1,
        Name: "HQ",
        Image: RoleHQImage
    };
    UnitRoles.push(Hq);

    var Troops = {
        id:2,
        Name: "Troops",
        Image: RoleTroopsImage
    };
    UnitRoles.push(Troops);

    var Elites = {
        id:3,
        Name: "Elites",
        Image: RoleElitesImage
    };
    UnitRoles.push(Elites);

    var FastAttack = {
        id:4,
        Name: "Fast Attack",
        Image: RoleFastAttackImage
    };
    UnitRoles.push(FastAttack);

    var HeavySupport = {
        id:5,
        Name: "Heavy Support",
        Image: RoleHeavySupportImage
    };
    UnitRoles.push(HeavySupport);

    var DedicatedTransport = {
        id:6,
        Name: "Dedicated Transport",
        Image: RoleDedicatedTransportImage
    };
    UnitRoles.push(DedicatedTransport);

    var Flyer = {
        id:7,
        Name: "Flyer",
        Image: RoleFlyersImage
    };
    UnitRoles.push(Flyer);

    var Fortification = {
        id:8,
        Name: "Fortification",
        Image: RoleFortificationsImage
    };
    UnitRoles.push(Fortification);

    var LordOfWar = {
        id:9,
        Name: "Lord of War",
        Image: RoleLordsOfWarImage
    };
    UnitRoles.push(DedicatedTransport);

    return UnitRoles;
}

export default ReturnUnitRoles;