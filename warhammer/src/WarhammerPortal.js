import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Header  from './Interface/Header/Header.js';
import MainMenu from './Interface/MainMenu/MainMenu.js';
import WorkingArea from './Interface/WorkingArea/WorkingArea.js';
import { Roster } from './Classes/CommonClasses.js';

import * as ActionCreators from "./Store/ActionsCreators.js";

class Warhammerportal extends Component {
    constructor(props) {
        super(props);
        this.selectMenuButton = this.selectMenuButton.bind(this);
        /*
        this.state = {
            SelectedMenuId : 1
        };
        */
    }

    selectMenuButton(ButtonId) {
        if(this.props.SelectedMenuId != ButtonId) {
            this.props.selectMenuButton(ButtonId);
            if(ButtonId === 6) {
                this.props.NewRoster(new Roster(1,"New Roster",[],null,null,null,null,null,null));
            }
        }
    }
    render() {
        return (
            <div style = {{height: "100%", width: "100%",position: "relative", overflow: "auto", margin: "0px", Padding: "0px"}}>
                <Header />
                <MainMenu selectMenuButton = {this.selectMenuButton}/>
                <WorkingArea SelectedMenuId = {this.props.SelectedMenuId} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        SelectedMenuId: state.MainMenuCategoryKey
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectMenuButton: (ButtonId) => dispatch(ActionCreators.CategoryClick(ButtonId)),
        NewRoster: (Roster) => dispatch(ActionCreators.NewRoster(Roster))
    }
}

const containerWorkingArea = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Warhammerportal);


export default containerWorkingArea;