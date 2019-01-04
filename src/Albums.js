import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "./albumsStyles.css"
import things from "./db"

class Albums extends Component {
    render (){

        return(
            <Router>
                <div id="albumsContainer">
                    <h1 id="albumsHeader">My Albums</h1>
                    <ul>
                        {/* pull albums out of json to display here in list items*/}
                    </ul>
                </div>
          </Router>

        );
    }
}

export default Albums;