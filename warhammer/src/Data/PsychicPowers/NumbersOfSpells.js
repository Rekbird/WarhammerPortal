const ReturnNumbersOfSpells = (UnitId) => {

    const NumberOfSpellsFromBase = [
            {
                id : 1,
                NumberOfModels : 1,
                NumberOfSpells : 3,
                UnitId: 11
            },
            {
                id : 2,
                NumberOfModels : 4,
                NumberOfSpells : 3,
                UnitId: 11
            },
            {
                id : 3,
                NumberOfModels : 7,
                NumberOfSpells : 3,
                UnitId: 11
            },
            {
                id : 4,
                NumberOfModels : 1,
                NumberOfSpells : 3,
                UnitId: 8
            },
            {
                id : 5,
                NumberOfModels : 1,
                NumberOfSpells : 2,
                UnitId: 9
            },
            {
                id : 6,
                NumberOfModels : 1,
                NumberOfSpells : 2,
                UnitId: 10
            },
            {
                id : 7,
                NumberOfModels : 1,
                NumberOfSpells : 2,
                UnitId: 361
            },
            {
                id :8,
                NumberOfModels : 1,
                NumberOfSpells : 2,
                UnitId: 362
            },

        ];
    return NumberOfSpellsFromBase.filter((spell) => spell.UnitId == UnitId);
}

export default ReturnNumbersOfSpells;