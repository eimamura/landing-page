import React, {Component} from 'react';
import './Nav.css';

class Nav extends Component {
  render () {
    //const style = {border: '1px solid red', color: 'red'};
    return (
      <div className="nav">
        <h1 className="title">Nav</h1>
        <div className="main">Main</div>
      </div>
    );
  }
}

export default Nav;
