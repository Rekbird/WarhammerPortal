

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './Store/reducers.js';
import './index.css';
import Warhammerportal from './WarhammerPortal.js';

//const heading = <h1 className="site-heading">Hello, React</h1>;

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

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

