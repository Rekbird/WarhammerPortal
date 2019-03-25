
import React, {Component} from 'react';
import './MenuButton.css';


class MenuButton extends Component {
    constructor(props) {
        super(props);
        this.selectMenuButton = this.selectMenuButton.bind(this);
    }

    selectMenuButton() {
        this.props.selectMenuButton(this.props.button.id);
    }

    render() {
        const button = this.props.button.name;
        return (
            <li className = "MainMenu__Button" onClick = {this.selectMenuButton}>{button}</li>
        )
    }
}

export default MenuButton;

