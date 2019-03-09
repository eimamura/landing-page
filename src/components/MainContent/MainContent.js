import React, {Component} from 'react';
import './MainContent.css';

class MainContent extends Component {
  constructor (props) {
    super (props);
    this.handleClick = this.handleClick.bind (this);
  }

  handleClick (e) {
    this.$span.text (this.$span.text () + ' clicked');
  }

  render () {
    return (
      <div className="mainContent">
        <div id="box-1">box-1</div>
        <div id="box-2">box-2</div>
        <div id="box-3">box-3</div>
      </div>
    );
  }
}

export default MainContent;
