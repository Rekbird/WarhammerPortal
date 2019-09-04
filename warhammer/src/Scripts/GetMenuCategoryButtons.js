/*import React, {Component} from 'react';*/


function GetMenuCategoryButtons(CategoryName) {
    var Button1 = {
        id : 1,
        CategoryName : "Art Articles",
        name : "Description of Universe"

    };
    var Button2 = {
        id : 2,
        CategoryName : "Art Articles",
        name : "Arts"

    };
    var Button3 = {
        id : 3,
        CategoryName : "Rules",
        name : "Core Rules"
    };
    var Button4 = {
        id : 4,
        CategoryName : "Rules",
        name : "Advanced Rules"
    };
    var Button5 = {
        id : 5,
        CategoryName : "Rules",
        name : "Fractions Codices"
    };
    var Button6 = {
        id : 6,
        CategoryName : "Rosters",
        name : "Create New"
    };
    var Button7 = {
        id : 7,
        CategoryName : "Rosters",
        name : "Saved Rosters"
    };
    var Button8 = {
        id : 8,
        CategoryName : "Additional Information",
        name : "Useful Links"
    };
    var Button9 = {
        id : 9,
        CategoryName : "Rosters",
        name : "Open play"
    };
    var Button10 = {
        id : 10,
        CategoryName : "Rosters",
        name : "Narrative play"
    };
    var Button11 = {
        id : 11,
        CategoryName : "Rosters",
        name : "Matched play"
    };
    var Button12 = {
        id : 12,
        CategoryName : "Rosters",
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
