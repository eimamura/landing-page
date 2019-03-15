import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import MainContent from './components/MainContent/MainContent';

function Index () {
  return <h2>Home</h2>;
}

function About () {
  return <h2>About</h2>;
}

function Users () {
  return <h2>Users</h2>;
}

function App () {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>
        aa
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        bb
        aa
        <Route path="/users/" component={Users} />

      </div>
    </Router>
  );
}

export default App;
