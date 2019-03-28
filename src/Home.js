import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link, withRouter } from 'react-router-dom';
class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Home Page</p>
          <nav>
            <Link to="/app" alt="">
              Go App
            </Link>
          </nav>
        </header>
      </div>
    );
  }
}

export default withRouter(Home);
