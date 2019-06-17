import React, {Component} from 'react';
import './UnitModels.css';
import ModelListElement from '../Model/Model.js';
import * as ActionCreators from "../../../Store/ActionsCreators.js";
import {connect} from 'redux';

class UnitModelsList extends Component {
     constructor(props) {
        super(props);
        this.handleModelButtonClick = this.handleModelButtonClick.bind(this);
        this.models =  this.props.Models;
        this.recordCounter = this.models.length;
     }
     
    handleModelButtonClick = (model,ButtonName) => {
        if (ButtonName == "Delete") {
            this.models.splice((this.models.indexOf(model)), 1);
            this.props.handleModelButtonClick(model,ButtonName);
            
        } else if (ButtonName == "Copy") {
            this.recordCounter = this.recordCounter + 1;
            const newModel = Object.assign({}, model);
            newModel.id = this.recordCounter;
            this.models.splice((this.models.length),0,newModel);
            this.props.handleModelButtonClick(model,ButtonName);

        } else {
           
        }
        
    }

    showCopyButton = (currentModel) =>{
        if (this.models.length >= currentModel.MaxQuant) {
            return false;

        } else if (!currentModel.MaxQuant) {
            return true;
        
        } else if (this.models.filter(function (model){           
            return model.BaseModel.id = currentModel.id}
            ).length >= currentModel.MaxQuant) {
                return false;
        } else {
                return true;
        }
    }
     render() {
        if (this.state.isUpdated) {
         const modelsList = this.models.map(
             (model) => 
                <ModelListElement key = {model.id} singleModel = {model} showCopyButton = {this.showCopyButton(model.BaseModel)} showDeleteButton = {(this.models.length > model.BaseModel.MinQuant)} handleModelButtonClick = {this.handleModelButtonClick}/>
          );
         return (
             <div>
                <ul className = 'unitModels__list'>{modelsList}</ul>
             </div>
         )
    
        }    
    }
}

const mapStateToProps = (state) => {
    return {
        Models: state.RosterEditing.ActiveUnit.Models
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleModelButtonClick: (model,ButtonName) => dispatch(ActionCreators.UpdateUnitModels(model,ButtonName))
    }
}

const containerUnitModelsList = connect(
    mapStateToProps,
    mapDispatchToProps
  )(UnitModelsList);

export default containerUnitModelsList;