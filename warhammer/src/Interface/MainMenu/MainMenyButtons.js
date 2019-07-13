import React, {Component} from 'react';
import MenuButton from './MenuButton.js';
import './MenuButton.css';
import ReactDOM from 'react-dom';
import GetMenuCategoryButtons from '../../Scripts/GetMenuCategoryButtons';


class MenuButtons extends Component {
    constructor(props) {
        super(props);
    }

    componentWillEnter(callback) {
        ReactDOM.findDOMNode(this).className = "MainMenu__ButtonsBlock-enter";
        setTimeout(callback, 50);
    }
    
    componentDidEnter() {
        ReactDOM.findDOMNode(this).className = "MainMenu__ButtonsBlock-enter-active";
    }

    componentWillLeave(callback) {
        ReactDOM.findDOMNode(this).className = "MainMenu__ButtonsBlock-leave-active";
        setTimeout(callback, 50);
    }
    
    componentDidLeave() {
        ReactDOM.findDOMNode(this).className = "MainMenu__ButtonsBlock-leave";
    }

    render() {
        let buttons = GetMenuCategoryButtons(this.props.category);
        buttons = buttons.map(
            (button) => 
                <MenuButton key = {button.id} button = {button}  selectMenuButton = {this.props.selectMenuButton}/>           
        );
        return (
            <div>
                {buttons}
            </div>
        )
    }
}

export default MenuButtons;

