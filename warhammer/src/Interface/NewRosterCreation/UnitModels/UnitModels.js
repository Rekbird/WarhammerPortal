import React, {Component} from 'react';
import './UnitModels.css';
import ModelListElement from '../Model/Model.js';
import getTestModels from '../../../Data/ModelObjects/TestModels.js';


class UnitModelsList extends Component {
     constructor(props) {
        super(props);
        this.handleModelButtonClick = this.handleModelButtonClick.bind(this);
        this.models =  getTestModels();
        this.recordCounter = this.models.length;
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

     render() {
        if (this.state.isUpdated) {
         const modelsList = this.models.map(
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
}

export default UnitModelsList;