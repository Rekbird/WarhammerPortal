import React, {Component} from 'react';
import "./WorkingArea.css";
import UsefulLinks from '../UsefulLinks/UsefulLinks.js';
import Paragraph from "../Paragraph/Paragraph.js";
import FactionGraphicList from "../FactionGraphicList/FactionGraphicList.js";
import ModelMenuButton from '../NewRosterCreation/Model/Model.js';
import UnitModelsList from '../NewRosterCreation/UnitModels/UnitModels.js';

function WorkingArea(props) {
    var NeededArea;
    switch(props.SelectedMenuId) {
        case 1 :
            NeededArea = 
            <Paragraph section = "Общие правила" />;
        break;
        case 2 :
            NeededArea = 
            <div>
                <h3>Раздел находится в разработке. Здесь будет следующее:</h3>
                <h3>Арты</h3>
            </div>;
        break;
        case 3 :
            NeededArea = 
            <div>
                <h3>Раздел находится в разработке. Здесь будет следующее:</h3>
                <h3>Общие правила</h3>
            </div>;
        break;
        case 4 :
            NeededArea = 
            <div>
                <h3>Раздел находится в разработке. Здесь будет следующее:</h3>
                <h3>Дополнительные правила</h3>
            </div>;
        break;
        case 5 :
            NeededArea = 
            <div>
                <h3>Раздел находится в разработке. Здесь будет следующее:</h3>
                <h3>Кодексы фракций</h3>
            </div>;
        break;
        case 6 :
            NeededArea = 
            <div>
                <FactionGraphicList />
                <UnitModelsList />
            </div>;
        break;
        case 7 :
            NeededArea = 
            <div>
                <h3>Раздел находится в разработке. Здесь будет следующее:</h3>
                <h3>Сохраненные ростеры</h3>
            </div>;
        break;
        case 8 :
            NeededArea = 
            <div>
                <UsefulLinks />
            </div>;
        break;
        default:
            if(!props.SelectedMenuId) {
                NeededArea = <h3>Отсутствует id кнопки</h3>;
            } else {
                NeededArea = <h3>id кнопки есть, но элемент Отсутствует</h3>;
            }
        break;
    }
    
    return (
        <div className = "WorkingArea_Body">{NeededArea}</div>     
    );
}

export default WorkingArea;