import ReturnUnits from "../Data/Units/Units.js";

function GetFactionUnits(FactionId) {
    var Units = ReturnUnits();
    console.log("ReturnUnits" + Units.length);
    var ReturnedUnits = [];
    if(Units && (Units.length>0) && FactionId) {
        for(var i=0;i<Units.length;i++) {
            var Unit = Units[i];
            if(Unit.Faction.id == FactionId) {
                ReturnedUnits.push(Unit);
            }
        }
    }
    console.log("ReturnedUnits " + ReturnedUnits.length);
    return ReturnedUnits;
}

export default GetFactionUnits;