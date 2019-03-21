import React, {Component} from 'react';
import '../Header.css';
import './ProfileButton.css'

class LoginButton extends Component {
    /* constructor(props) {
         super(props);
         this.state = {
            user = this.props.user;
         
     }
     }*/
       

     render() {
         return (
             <div className = 'Header__profile_block'>
             {
	            !!this.props.user ? (
	                <button  className='Header__profile_div'>
		                <div className = 'ProfileButton'>
			                <img src='' alt = "A"/>
			                this.props.user.displayname
		                </div> 
	                </button>
	            ) : (
                    <div className='Header__profile_div'>
		                <p>Guest</p>
                    </div>
	            )
            }
                <div className='ProfileButton__button_div'>
                    <button className = 'ProfileButton'>
                        {!!this.props.user ? "Sign out" : "Sign in"}
                    </button>
                </div>
            </div>
         )
    }
}

export default LoginButton;