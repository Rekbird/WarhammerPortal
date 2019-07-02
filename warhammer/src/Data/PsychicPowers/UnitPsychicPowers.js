import PsychicPowers from "./PsychicPowers.js";

const ReturnUnitPsychicPowers = (UnitId) => {
    let UnitPsychicPowers =[];
    let AllPsychicPowers = PsychicPowers();
    let ReturnedSpells = [];
    //console.log(AllPsychicPowers);

    const PsychicPowersSet1 = {
        id: 1,
        Spells: [1,2,3,4,5,6,7],
        Units: [8]
    };
    UnitPsychicPowers.push(PsychicPowersSet1);
    /*
    const PsychicPowersSet2 = {
        id: 1,
        Spells: [1,2,3,4,5,6,7],
        Units: [8]
    };
    UnitPsuchicPowers.push(PsychicPowersSet1);
    */
   //console.log("ReturnUnitPsuchicPowers UnitID "+UnitId+" "+typeof UnitId);
  // console.log("ReturnUnitPsuchicPowers Units length " + UnitPsychicPowers[0].Units.find((unit) => parseInt(unit) == parseInt(UnitId)));
    const SetOfSpells = UnitPsychicPowers.find((element) => !!element.Units.find((unit) => parseInt(unit) == parseInt(UnitId)));
  //  console.log("ReturnUnitPsuchicPowers UnitInList "+UnitPsychicPowers[0].Units[0]+" "+typeof UnitPsychicPowers[0].Units[0]);
  //  console.log("ReturnUnitPsuchicPowers Equal "+(parseInt(UnitPsychicPowers[0].Units[0]) == parseInt(UnitId)));
    if(!!SetOfSpells) {
    //    console.log(SetOfSpells.Spells);
        SetOfSpells.Spells.forEach(function(spell) {
                                        let FoundedSpell = AllPsychicPowers.find((power) => parseInt(power.id)  == parseInt(spell));
                                        if(FoundedSpell) {
                                            ReturnedSpells.push(FoundedSpell);
                                        }
                                    }
        );
    }
   // console.log(ReturnedSpells);
    return ReturnedSpells;
}

export default ReturnUnitPsychicPowers;