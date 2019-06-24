import React, {Component} from 'react';
import '../AddNewModel/AddNewModel.css';
import * as ActionCreators from "../../../Store/ActionsCreators.js";
import { connect } from 'react-redux';
import AddMenuButton from '../../../Data/ModelMenuButtons/AddMenuButton.png';
import {RosterModel} from "../../../Classes/CommonClasses.js";

/*
in:
ActiveUnit.Models
Out:
this.Models
*/

class AddNewModel extends Component {
    constructor(props) {
       super(props);
       this.HandleButtonClick = this.HandleButtonClick.bind(this);
       this.ChosenModel = null;
    }
    
    GetAvailableModels = (RosterModels, BaseModels) => {
        let AvailableModels = [];

        BaseModels.forEach((model) => {
            if ((RosterModels.filter((rosterModel) => rosterModel.BaseModel.id == model.id).length < model.MaxQuant) || !model.MaxQuant) {
                AvailableModels.push(model);
            }
        });
        return AvailableModels;
    }

    HandleButtonClick = () => {
        let NewRosterModel = new RosterModel((this.props.Models.length + 1),this.ChosenModel,this.props.Unit.id,this.ChosenModel.Cost); 
        let NewUnitModels = this.props.Models.slice();
        NewUnitModels.splice((NewUnitModels.length),0,NewRosterModel);
        this.props.HandleAddButtonClick(NewUnitModels);
    }

    HandleOnchangeSelect = (event) => {
        let ChosenModelId = event.target.value;
        this.ChosenModel = this.props.BaseModels.filter((model) => model.id == ChosenModelId)[0];
    }

    render() {
        if (this.props.BaseModels.length > 1) {
            let AvailableOptions = this.GetAvailableModels(this.props.Models, this.props.BaseModels);
            this.ChosenModel = AvailableOptions[0];
                let Options = AvailableOptions.map(
                    (option) =>
                    <option className = "AddNewModel__Option" key = {option.id} value = {option.id}>{option.Name}</option>
                );
            return (
                <div>
                <select className = 'AddNewModel__SelectModel' onChange = {this.HandleOnchangeSelect}>{Options}</select>
                <img src = {AddMenuButton} className = 'AddNewModel__AddButton' alt = 'Add' onClick = {this.HandleButtonClick}/>
                </div>
            )
        } else {
            this.ChosenModel = this.props.BaseModels[0];
            return (
                <div>
                 <img src = {AddMenuButton} className = 'AddNewModel__AddButton' alt = 'Add' onClick = {this.HandleButtonClick}/>
                </div>
            )
        } 
    }
}



const mapStateToProps = (state) => {
    return {
        Models: state.RosterEditing.ActiveUnit.Models,
        BaseModels: state.RosterEditing.ActiveUnit.BaseUnit.Models,
        Unit: state.RosterEditing.ActiveUnit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        HandleAddButtonClick: (models) => dispatch(ActionCreators.UpdateUnitModels(models)),
    }
}

const containerAddNewModel = connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddNewModel);

export default containerAddNewModel;