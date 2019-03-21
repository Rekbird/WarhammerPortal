/*import React, {Component} from 'react';*/

function GetMenuCategories() {
    var Category1 = {
        id : 1,
        CategoryName : "Художественные статьи"
    };
    var Category2 = {
        id : 2,
        CategoryName : "Правила"
    };
    var Category3 = {
        id : 3,
        CategoryName : "Ростеры"
    };
    var Category4 = {
        id : 4,
        CategoryName : "Дополнительная информация"
    };

    var categories = [Category1,Category2,Category3,Category4];
    return categories;
    
}

export default GetMenuCategories;
