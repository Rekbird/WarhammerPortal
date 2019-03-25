

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Warhammerportal from './WarhammerPortal.js';

//const heading = <h1 className="site-heading">Hello, React</h1>;

class Application extends Component {
    render() {
        return (
            <div className = "MainClass">
                <Warhammerportal />
            </div>
        )
    }
}
ReactDOM.render(<Application />, document.getElementById('root'));

