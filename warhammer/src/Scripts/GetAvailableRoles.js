import GetFactionUnits from "./GetFactionUnits.js";

function GetAvailableRoles(FactionId) {
    var Units = GetFactionUnits(FactionId);
    console.log("GetFactionUnits" + Units.length);
    var Roles =[];
    for(var j=0;j<Units.length;j++) {
        var Unit = Units[j];
         Roles.push(Unit.UnitRole);
    }
    //var Roles = Units.UnitRole;
    console.log("Units roles " + Roles.length);
    var ReturnedRoles = [];
    if(Roles && (Roles.length > 0)) {
        for(var i=0;i<Roles.length;i++) {
            var Role = Roles[i];
            if(ReturnedRoles.indexOf(Role) == -1) {
                ReturnedRoles.push(Role);
            }
        }
    }
    console.log("ReturnedRoles" + ReturnedRoles.length);
    return ReturnedRoles;
}

export default GetAvailableRoles;