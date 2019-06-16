

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import WarhammerPortal from './Store/reducers.js';
import './index.css';
import Warhammerportal from './WarhammerPortal.js';
import {Roster} from "../src/Classes/CommonClasses.js";

//const heading = <h1 className="site-heading">Hello, React</h1>;

const InitialState = {
    MainMenuCategoryKey: 1,
    FactionSelection: false,
    PsychicPowerMenuButtons: {
        RemoveButtonLocked: true, 
        AddButtonLocked: false
    },
    RosterEditing: {
        Action: "Roster Editing",
        Roster: new Roster(1,"New Roster",[],null,null,null,null,null,null),		
        ActiveDetachment: null,
        ActiveUnit: null	
    }	
}

const store = createStore(
                WarhammerPortal,
                InitialState
            );

class Application extends Component {
    render() {
        return (
            <div className = "MainClass">
                <Warhammerportal />
            </div>
        )
    }
}
ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>, 
    document.getElementById('root')
    );

