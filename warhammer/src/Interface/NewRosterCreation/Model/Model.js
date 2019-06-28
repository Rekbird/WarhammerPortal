import React, {Component} from 'react';
import './Model.css';
import EditMenuButton from '../../../Data/ModelMenuButtons/EditMenuButton.png';
import CopyMenuButton from '../../../Data/ModelMenuButtons/CopyMenuButton.png';
import DeleteMenuButton from '../../../Data/ModelMenuButtons/DeleteMenuButton.png';

class ModelListElement extends Component {

    DeleteButton = () => {
        this.props.handleModelButtonClick(this.props.singleModel, 'Delete');
    }

    CopyButton = () => {
        this.props.handleModelButtonClick(this.props.singleModel, 'Copy');
    }

    EditButton = () => {
        this.props.handleModelButtonClick(this.props.singleModel, 'Edit');
    }

    render() {
        console.log("Модель отрендерилась");
        const Name = this.props.singleModel.BaseModel.Name;
        var CopyButton = null;
        var DeleteButton = null;
        if (this.props.showCopyButton) {
            CopyButton = <img src = {CopyMenuButton} className = 'model__buttons' alt = 'Copy' onClick = {this.CopyButton}/>;
        }
        if (this.props.showDeleteButton) {
            DeleteButton = <img src = {DeleteMenuButton} className = 'model__buttons' alt = 'Delete' onClick = {this.DeleteButton}/>
        }

        let classType = (this.props.ActiveModelExist) ? 'model__activeModelEditing' : 'model__titleText';
        return (
            <div className = 'model__element'>
                <div className = 'model__title'>
                    <span className = {classType} >{Name}</span>
                </div>
                <div className = 'model__buttonsSet'>
                    <img src = {EditMenuButton} className = 'model__buttons' alt = 'Edit' onClick = {this.EditButton}/>
                    {CopyButton}
                    {DeleteButton}
                </div>
            </div>
        )
    }
}

export default ModelListElement;