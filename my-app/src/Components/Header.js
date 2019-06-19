import React, { Component } from 'react'; 
import Style from './Style.css'; 
import Reset from './Reset.css'; 

class Header extends Component {
    constructor() {
        super(); 
        this.state = {

        }
    }


render() {
    return(
        <div> 
            <p className="home">Home</p>
        </div>
    );
}
}

export default Header; 