/*import React, {Component} from 'react';*/

function GetMenuCategories() {
    var Category1 = {
        id : 1,
        CategoryName : "Art Articles"
    };
    var Category2 = {
        id : 2,
        CategoryName : "Rules"
    };
    var Category3 = {
        id : 3,
        CategoryName : "Rosters"
    };
    var Category4 = {
        id : 4,
        CategoryName : "Additional Information"
    };

    var categories = [Category1,Category2,Category3,Category4];
    return categories;
    
}

export default GetMenuCategories;
