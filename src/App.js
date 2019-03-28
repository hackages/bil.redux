import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    console.log('inside the app comp', this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>App page</p>
          <nav>
            <Link to="/home" alt="">
              Go Home
            </Link>
          </nav>
        </header>
      </div>
    );
  }
}

export default App;
