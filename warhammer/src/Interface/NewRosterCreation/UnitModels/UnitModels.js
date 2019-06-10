import React, {Component} from 'react';
import './UnitModels.css';
import ModelListElement from '../Model/Model.js';
import getTestModels from '../../../Data/ModelObjects/TestModels.js';


class UnitModelsList extends Component {
     constructor(props) {
        super(props);
        this.handleModelButtonClick = this.handleModelButtonClick.bind(this);
        this.models =  this.props.Models;
        this.recordCounter = this.models.length;
        this.modelsMaxCount = 9;
        this.modelMinCount = 3;
        this.state = {
            isUpdated : true
        };
     }
     
    handleModelButtonClick = (model,ButtonName) => {
        if (ButtonName == "Delete") {
                this.models.splice((this.models.indexOf(model)), 1);
                this.setState({isUpdated : true});
            
        } else if (ButtonName == "Copy") {
            this.recordCounter = this.recordCounter + 1;
            const newModel = Object.assign({}, model);
            newModel.id = this.recordCounter;
            this.models.splice((this.models.length),0,newModel);
            this.setState({isUpdated : true});

        } else {
            this.setState({isUpdated : false});
        }
    }

    showCopyButton = (currentModel) =>{
        if (this.models.length >= this.modelMaxCount) {
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
                <ModelListElement key = {model.id} singleModel = {model} showCopyButton = {this.showCopyButton(model.BaseModel)} showDeleteButton = {(this.models.length > this.modelMinCount)} handleModelButtonClick = {this.handleModelButtonClick}/>
          );
         return (
             <div>
                <ul className = 'unitModels__list'>{modelsList}</ul>
             </div>
         )
    
        }    
    }
}

export default UnitModelsList;