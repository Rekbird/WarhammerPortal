import React, {Component} from 'react';
import './MenuCategory.css';
import MenuButton from './MenuButton.js';
import GetMenuCategoryButtons from '../../Scripts/GetMenuCategoryButtons';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
    const category = this.props.category.CategoryName;
    let ButtonBlock;
    let buttons = GetMenuCategoryButtons(category);
    if(this.props.openCategoryKey == this.props.category.id) {
        buttons = buttons.map(
            (button) => 
                <MenuButton key = {button.id} button = {button}  selectMenuButton = {this.props.selectMenuButton}/>           
        );
        ButtonBlock = <div>
                        {buttons}
                    </div>
    }
    return ( 
        <div>
            <li onClick = {this.handleClick} className = "MainMenu__Categories">{category}</li>
            <CSSTransitionGroup 
                transitionName="MainMenu__ButtonsBlock" 
                transitionAppear={false} 
                transitionEnterTimeout={500} 
                transitionLeaveTimeout = {500}>
                {ButtonBlock}
            </CSSTransitionGroup>
        </div>
    )
    }
}

export default MenuCategory;