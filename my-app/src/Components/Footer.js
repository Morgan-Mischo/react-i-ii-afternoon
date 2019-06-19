import React, { Component } from 'react'; 
import Style from './Style.css'; 
import Reset from './Reset.css'; 

class Footer extends Component {
    constructor() {
        super(); 
        this.state = {

        }
    }


render() {
    return(
        <div className="footer">
        <button className="previous"> Previous </button>
        <button className="next" >Next </button>
        </div>
    );
}
}

export default Footer; 