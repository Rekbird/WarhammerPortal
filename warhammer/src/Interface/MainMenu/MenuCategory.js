import React, {Component} from 'react';
import './MenuCategory.css';
import MenuButton from './MenuButton.js';
import MenuButtons from "./MainMenyButtons.js";
import ReactDOM from 'react-dom';
import GetMenuCategoryButtons from '../../Scripts/GetMenuCategoryButtons';
import {TransitionGroup} from 'react-transition-group';
import { CSSTransitionGroup } from 'react-transition-group';

 class MenuCategory extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
     }

    handleClick() {
        this.props.handleCategoryClick(this.props.category.id);
    }

    

    render() {
    let ButtonBlock;
    if(this.props.openCategoryKey == this.props.category.id) {
        ButtonBlock = <MenuButtons 
            selectMenuButton = {this.props.selectMenuButton}
            category = {this.props.category.CategoryName}
        />
    }
    return ( 
        <div>
            <li onClick = {this.handleClick} className = "MainMenu__Categories">{this.props.category.CategoryName}</li>
            <TransitionGroup>
                {ButtonBlock}
            </TransitionGroup>
        </div>
    )
    }
}

export default MenuCategory;