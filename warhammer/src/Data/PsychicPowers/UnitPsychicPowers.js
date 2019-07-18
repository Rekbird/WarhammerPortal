import PsychicPowers from "./PsychicPowers.js";

const ReturnUnitPsychicPowers = (UnitId) => {
    let UnitPsychicPowers =[];
    let AllPsychicPowers = PsychicPowers();
    let ReturnedSpells = [];
    //console.log(AllPsychicPowers);

    const PsychicPowersSet1 = {
        id: 1,
        Spells: [1,2,3,4,5,6,7],
        Units: [9,10,11]
    };
    UnitPsychicPowers.push(PsychicPowersSet1);
    
    const PsychicPowersSet2 = {
        id: 2,
        Spells: [1,8,9,10,11,12,13],
        Units: [8]
    };
    UnitPsychicPowers.push(PsychicPowersSet2);

    const TyranidPsychicPowersSet = {
        id: 3,
        Spells: [361,362,363,364,365,366],
        Units: [361,362]
    };
    UnitPsychicPowers.push(TyranidPsychicPowersSet);
    
    const SetOfSpells = UnitPsychicPowers.find((element) => !!element.Units.find((unit) => parseInt(unit) == parseInt(UnitId)));
    if(!!SetOfSpells) {
        SetOfSpells.Spells.forEach(function(spell) {
                                        let FoundedSpell = AllPsychicPowers.find((power) => parseInt(power.id)  == parseInt(spell));
                                        if(FoundedSpell) {
                                            ReturnedSpells.push(FoundedSpell);
                                        }
                                    }
        );
    }
    return ReturnedSpells;
}

export default ReturnUnitPsychicPowers;