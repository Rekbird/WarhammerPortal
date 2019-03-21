import React, {Component} from 'react';
import './MenuCategory.css';
import MenuButton from './MenuButton.js';
import GetMenuCategoryButtons from '../../Scripts/GetMenuCategoryButtons';


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
    if(this.props.openCategoryKey == this.props.category.id) {
        var buttons = GetMenuCategoryButtons(category);
        buttons = buttons.map(
            (button) => 
        <MenuButton key = {button.id} button = {button}  selectMenuButton = {this.props.selectMenuButton}/>
        );
        buttons = <ul className="MainMenu__Buttons">{buttons}</ul>;
        
    }
    return (
        
        <div>
            <li onClick = {this.handleClick} className = "MainMenu__Categories">{category}</li>
            {buttons}
        </div>
        
    )
    }
}

export default MenuCategory;