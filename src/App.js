import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Albums from "./Albums"
import Album from "./Album"
import Pictures from "./Pictures"
import axios from 'axios'

class App extends Component {
  render() {
    return (
      <Router>
        <div id="container">
          <Route exact path="/" component={Albums} />
          <Route path="/Album" component={Album} />
          <Route path="/Pictures/:id" component={Pictures} />
        </div>
      </Router>
    );
  }
}

export default App;