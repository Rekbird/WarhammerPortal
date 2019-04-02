function getTestModels() {
    var Model1 = {
        id : 1,
        baseModel: {
            id : 1,
            ModelName : "Tyranid Warrior",
            maxCount : "",
            minCount : ""
            }
    };
    var Model2 = {
        id : 2,
        baseModel: {
            id : 1,
            ModelName : "Tyranid Warrior",
            maxCount : "",
            minCount : ""
            }
        
    };
    var Model3 = {
        id : 3,
        baseModel: {
            id : 2,
            ModelName : "Tyranid Warrior with strangler",
            maxCount : "1",
            minCount : ""
            }
    };
    var Model4 = {
        id : 4,
        baseModel: {
            id : 3,
            ModelName : "Tyranid Warrior with cannon",
            maxCount : "1",
            minCount : ""
            }
    };

    var testModels = [Model1,Model2,Model3,Model4];

    return testModels;
}


export default getTestModels;