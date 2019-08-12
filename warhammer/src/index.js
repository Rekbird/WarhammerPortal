import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import Reducers from './Store/reducers.js';
import './index.css';
import Warhammerportal from './WarhammerPortal.js';
import {Roster} from "../src/Classes/CommonClasses.js";
import { rootSaga } from './Sagas/Sagas.js';

//const heading = <h1 className="site-heading">Hello, React</h1>; new Roster(1,"New Roster",[],null,null,null,null,null,null)

const InitialState = {
    MainMenuCategoryKey: 1,
    FactionSelection: false,
    CurrentScrollCount: 0,
    PsychicPowerMenuButtons: {
        AvailableSpells: [],
        SelectedSpells: [],
        RemoveButtonLocked: true, 
        AddButtonLocked: false
    },
    RosterEditing: {
        Action: "Roster Editing",
        Roster: null,		
        ActiveDetachment: null,
        ActiveUnit: null,
        ActiveModel: null	
    },
    isLoading: false,
    retrievedUnits: []
};

const sagaMiddleware = createSagaMiddleware();
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
                Reducers,
                InitialState,
                applyMiddleware(sagaMiddleware),
            );

sagaMiddleware.run(rootSaga);

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

