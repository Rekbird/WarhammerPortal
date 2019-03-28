import React, {Component} from 'react';
import './UnitModels.css';
import ModelListElement from '../Model/Model.js';
import getTestModels from '../../../Data/ModelObjects/TestModels.js';


class UnitModelsList extends Component {
     constructor(props) {
        super(props);
        this.handleModelButtonClick = this.handleModelButtonClick.bind(this, ModelListElement);
        this.state = {
            selectedModelButton: ""
        };
         
     }
     
    handleModelButtonClick(ButtonName,model) {
        if (ButtonName == "Delete") {
            if (models.indexOf(model) != -1){
                models.splice((models.indexOf(model)), 1);
            }
        } else if (ButtonName == "Copy") {
            models.splice((models.length),0,model);
        }
    }

     render() {
         const models = getTestModels();
         const modelsList = models.map(
             (model) => 
                <ModelListElement key = {model.id} singleModel = {model} handleModelButtonClick = {this.handleModelButtonClick}/>
          );
         return (
             <div>
                <ul>{modelsList}</ul>
             </div>
         )
    }
}

export default UnitModelsList;