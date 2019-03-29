import React, {Component} from 'react';
import './Model.css';
import EditMenuButton from '../../../Data/ModelMenuButtons/EditMenuButton.png';
import CopyMenuButton from '../../../Data/ModelMenuButtons/CopyMenuButton.png';
import DeleteMenuButton from '../../../Data/ModelMenuButtons/DeleteMenuButton.png';

class ModelListElement extends Component {

    DeleteButton = () => {
        console.log("pressed delete");
        this.props.handleModelButtonClick(this.props.singleModel, 'Delete');
    }

    CopyButton = () => {
        console.log("pressed copy");
        this.props.handleModelButtonClick(this.props.singleModel, 'Copy');
    }

    render() {
        const Name = this.props.singleModel.ModelName;
        return (
            <div className = 'model__element'>
                <div className = 'model__title'>
                    <span className = 'model__titleText' >{Name}</span>
                </div>
                <div className = 'model__buttonsSet'>
                    <img src = {EditMenuButton} className = 'model__buttons' alt = 'Edit' />
                    <img src = {CopyMenuButton} className = 'model__buttons' alt = 'Copy' onClick = {this.CopyButton}/>
                    <img src = {DeleteMenuButton} className = 'model__buttons' alt = 'Delete' onClick = {this.DeleteButton}/>
                </div>
            </div>
        )
    }
}

export default ModelListElement;