import React, {Component} from 'react';
import { connect } from 'react-redux';

import "./WorkingArea.css";
import UsefulLinks from '../UsefulLinks/UsefulLinks.js';
import Paragraph from "../Paragraph/Paragraph.js";
import FactionGraphicList from "../FactionGraphicList/FactionGraphicList.js";
import ModelMenuButton from '../NewRosterCreation/Model/Model.js';
import UnitModelsList from '../NewRosterCreation/UnitModels/UnitModels.js';
import UnitsList from "../NewRosterCreation/UnitsList/UnitsList.js";
import GetFactions from "../../Scripts/GetFactions.js";
import UnitSelection from "../NewRosterCreation/UnitSelection/UnitSelection.js";
import UnitEditing from "../NewRosterCreation/UnitEditing/UnitEditing.js";
import GetFactionUnits from "../../Scripts/GetFactionUnits.js";
import DetachmentEditing from "../NewRosterCreation/DetachmentEditing/DetachmentEditing.js";
import {Roster} from "../../Classes/CommonClasses.js";
import RosterCreation from "../NewRosterCreation/NewRosterCreation.js";
import * as ActionCreators from "../../Store/ActionsCreators.js";
import ConstructionPlaceholder from "../ConstructionPlaceholder/ConstructionPlaceholder.js";



class WorkingArea extends Component {
    constructor(props) {
        super(props);
    }


    render() {
    let NeededArea;
    switch(this.props.SelectedMenuId) {
        case 1 :
            NeededArea = 
            <Paragraph section = "Общие правила" />;
        break;
        case 6 :
            NeededArea = 
            <div>
                <RosterCreation Roster = {this.props.Roster}/>
            </div>;
        break;
        case 8 :
            NeededArea = 
            <div>
                <UsefulLinks />
            </div>;
        break;
        default:
            NeededArea = null;
        break;
    }
    
    if(_.isEmpty(NeededArea)) {
        return <ConstructionPlaceholder />
    } else {
        return (
            <div className = "WorkingArea_Body" id = "WorkingArea">
                {NeededArea}
            </div>     
        );
    }
    }
}

const mapStateToProps = (state) => {
    return {
        SelectedMenuId: state.MainMenuCategoryKey,
        Roster: state.RosterEditing.Roster
    }
}
/*
const mapDispatchToProps = (dispatch) => {
    return {
        CurrentScrollCount: (CurrentScrollCount) => dispatch(ActionCreators.CurrentScrollCount(CurrentScrollCount))
    }
}
*/


const containerWorkingArea = connect(
    mapStateToProps
  )(WorkingArea);

export default containerWorkingArea;