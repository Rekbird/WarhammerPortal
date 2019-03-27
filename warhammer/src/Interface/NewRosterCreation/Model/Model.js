import React, {Component} from 'react';
import './Model.css';
import EditMenuButton from '../../../Data/ModelMenuButtons/EditMenuButton.png';
import CopyMenuButton from '../../../Data/ModelMenuButtons/CopyMenuButton.png';
import DeleteMenuButton from '../../../Data/ModelMenuButtons/DeleteMenuButton.png';

class ModelMenuButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = 'model__main'>
                <div style = {{display: 'inline-block', width: '80%'}}>
                    <span className = 'model__title' >Model name</span>
                </div>
                <div style = {{display: 'inline-block', width: '20%'}}>
                    <img src = {EditMenuButton} className = 'model__buttons' alt = 'Edit' />
                    <img src = {CopyMenuButton} className = 'model__buttons' alt = 'Copy' />
                    <img src = {DeleteMenuButton} className = 'model__buttons' alt = 'Delete' />
                </div>
            </div>
        )
    }
}

export default ModelMenuButton;