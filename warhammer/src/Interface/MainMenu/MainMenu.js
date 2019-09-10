import React, {Component} from 'react';
import './MainMenu.css';
import MenuCategory from './MenuCategory.js';
import MenuButton from './MenuButton.js';
import GetMenuCategories from '../../Scripts/GetMenuCategories.js';


class MainMenu extends Component {
     constructor(props) {
        super(props);
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
        this.state = {
            openCategoryKey: ""
        };
         
     }
     
    handleCategoryClick(CategiryId) {
        if(CategiryId != this.state.openCategoryKey) {
            this.setState({openCategoryKey : CategiryId});
        } else {
            this.setState({openCategoryKey : ""});
        }
    }

     render() {
         const categories = GetMenuCategories();
         const CategoriesList = categories.map(
             (category) => 
                <MenuCategory key = {category.id} category = {category} handleCategoryClick = {this.handleCategoryClick} openCategoryKey = {this.state.openCategoryKey} selectMenuButton = {this.props.selectMenuButton}/>
          );
         return (
             <div className="MainMenu__Body">
                <ul className="MainMenu__Categories_list">{CategoriesList}</ul>
             </div>
         )
    }
}

export default MainMenu;