import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header  from './Interface/Header/Header.js';
import MainMenu from './Interface/MainMenu/MainMenu.js';
import WorkingArea from './Interface/WorkingArea/WorkingArea.js';

class Warhammerportal extends Component {
    constructor(props) {
        super(props);
        this.selectMenuButton = this.selectMenuButton.bind(this);
        this.state = {
            SelectedMenuId : 1
        };
    }

    selectMenuButton(ButtonId) {
        if(this.state.SelectedMenuId != ButtonId) {
            this.setState({SelectedMenuId : ButtonId});
        }
    }
    render() {
        return (
            <div style = {{height: "100%", width: "100%",position: "absolute", overflow: "auto"}}>
                <Header />
                <MainMenu selectMenuButton = {this.selectMenuButton}/>
                <WorkingArea SelectedMenuId = {this.state.SelectedMenuId} />
            </div>
        );
    }
}


export default Warhammerportal;