import React, {Component} from 'react';
import './Header.css';
import logo from '../../Data/Header/Logo.png';
import LoginButton from "./ProfileButton/LoginButton.js";

class Header extends Component {
   /* constructor(props) {
        super(props);
    }
    */
    render() {
        return (
            <div className="Header">
                <div className='Header__div_block'><img  className='Header__Logo' src={logo} alt='Здесь должно быть лого, но оно опаздывает.'/></div>
                <div className='Header__div_block'> <h2 className='Header__Title'>
                          Tabletop game portal
                    </h2></div>
                    <div className='Header__div_block'></div>
                    
                    <div className='Header__div_block'>
                        <LoginButton user = {null} />
                    </div>
            </div>
        );
    }
}

export default Header;