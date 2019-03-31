import ReturnUnits from "../Data/Units/Units.js";

function GetFactionUnitsByRole(FactionId, RoleId) {
    var Units = ReturnUnits();
    var ReturnedUnits = [];
    if (Units && FactionId && RoleId && (Units.length > 0)) {
        for (var i=0;i<Units.length;i++) {
            var Unit = Units[i];
            if((Unit.Faction.id == FactionId) && (Unit.UnitRole.id == RoleId)) {
                ReturnedUnits.push(Unit);
            }
        }
    }
    return ReturnedUnits;
}

export default GetFactionUnitsByRole;