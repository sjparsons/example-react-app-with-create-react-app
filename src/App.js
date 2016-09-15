import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="app">
        <div className="app-header">
          <div className="app-brand"><Link to="/" style={{color: 'inherit'}}>
            <img src={logo} className="app-logo" alt="React logo" />
            <h2 className="app-title">React Minneapolis</h2>
          </Link></div>
        </div>
        <div className="app-tag">
          <div className="container">
          The Meetup about the React JavaScript framework in the City of Lakes.
          </div>
        </div>
        <nav className="app-nav  text-center">
          <div className="container">
            <Link to="/sponsorship">Sponsorship</Link>{' '}
            <a target="_blank" href="//feedback.reactmpls.io">Feedback</a>
          </div>
        </nav>
        <div className="app-content">
          {children}
        </div>


      </div>
    );
  }
}

export default App;
