/*import React, {Component} from 'react';*/


function GetMenuCategoryButtons(CategoryName) {
    var Button1 = {
        id : 1,
        CategoryName : "Художественные статьи",
        name : "Устройство вселенной"

    };
    var Button2 = {
        id : 2,
        CategoryName : "Художественные статьи",
        name : "Арты"

    };
    var Button3 = {
        id : 3,
        CategoryName : "Правила",
        name : "Общие правила"
    };
    var Button4 = {
        id : 4,
        CategoryName : "Правила",
        name : "Дополнительные правила"
    };
    var Button5 = {
        id : 5,
        CategoryName : "Правила",
        name : "Кодексы фракций"
    };
    var Button6 = {
        id : 6,
        CategoryName : "Ростеры",
        name : "Создать новый"
    };
    var Button7 = {
        id : 7,
        CategoryName : "Ростеры",
        name : "Сохраненные ростеры"
    };
    var Button8 = {
        id : 8,
        CategoryName : "Дополнительная информация",
        name : "Полезные ссылки"
    };
    var Button9 = {
        id : 9,
        CategoryName : "Правила",
        name : "Open play"
    };
    var Button10 = {
        id : 10,
        CategoryName : "Правила",
        name : "Narrative play"
    };
    var Button11 = {
        id : 11,
        CategoryName : "Правила",
        name : "Matched play"
    };
    var Button12 = {
        id : 12,
        CategoryName : "Правила",
        name : "Battle-forged Armies"
    };
    
    var buttons = [Button1,Button2,Button3,Button4,Button5,Button6,Button7,Button8,Button9,Button10,Button11,Button12];
    if(CategoryName) {
        var ReturnedButtons = [];
        for(var i=0;i<buttons.length;i++) {
            if(buttons[i].CategoryName === CategoryName) {
                ReturnedButtons.push(buttons[i]);
            }
        }
        return ReturnedButtons;
    } else {
        return buttons;
    }
    
}

export default GetMenuCategoryButtons;
