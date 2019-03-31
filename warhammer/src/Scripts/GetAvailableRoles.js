import GetFactionUnits from "./GetFactionUnits.js";

function GetAvailableRoles(FactionId) {
    var Roles = GetFactionUnits(FactionId).UnitRole;
    var ReturnedRoles = [];
    if(Roles && (Roles.length > 0)) {
        for(var i=0;i<Roles.length;i++) {
            var Role = Roles[i];
            if(ReturnedRoles.indexOf(Role) == -1) {
                ReturnedRoles.push(Role);
            }
        }
    }
    
    return ReturnedRoles;
}

export default GetAvailableRoles;