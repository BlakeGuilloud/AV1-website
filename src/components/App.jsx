import React, { Component } from 'react';
import logo from '../assets/av1-logo.png';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import Blog from './Blog';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div>
        <div className="img__wrapper" />
        <img className="img__logo" src={logo} alt="i have failed you" />
        <Router>
          <div className="App">
            <div className="header-container">
              <ul className="navigation">
                <li><Link to="/blog">Blog</Link></li>
                <span>|</span>
                <li><Link to="/contact">Contact</Link></li>
                <span>|</span>
                <li><Link to="/work">Work</Link></li>
              </ul>
              <div className="header-logo">
                <img src={logo} alt="i have failed you" />
              </div>
            </div>

            <div className="content-container">
              <Route exact path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
            </div>
            <div className="footer-container">
              AV1 &nbsp; | &nbsp; 2017
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
