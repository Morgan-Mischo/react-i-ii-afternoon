import React, { Component } from 'react'; 
import data from '../data'; 
import Style from './Style.css'; 
import Reset from './Reset.css'; 

class MainContent extends Component {
    constructor() {
        super(); 
        this.state = {
            i: 0

        }
    }


handleNext () {

}

handlePrevious () {

}


render() {
    return(
        <div className = "mainContent">
            <div className = "number">{this.state.i}/25</div>
            <div className ="Name">{data[this.state.i].name.first} {data[this.state.i].name.last}</div>
            <div className = "from"><strong>From: </strong>{data[this.state.i].city} </div>
            <div className = "title"><strong>Job Title: </strong> {data[this.state.i].title} </div>
            <div className = "employer"><strong>Employer: </strong>{data[this.state.i].employer} </div>

            <ol className = "movies"> <strong>Favorite Movies: </strong></ol>
               <li> {data[this.state.i].favoriteMovies[0]} </li> 
                <li>{data[this.state.i].favoriteMovies[1]} </li>
                <li> {data[this.state.i].favoriteMovies[2]} </li>
        </div>
    )
}
}

export default MainContent; 

