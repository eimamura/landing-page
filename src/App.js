import React, {Component} from 'react';
import Nav from './components/Nav/Nav';
import MainContent from './components/MainContent/MainContent';

class App extends Component {
  render () {
    return (
      <div>
        <Nav />
        <MainContent />
        <div id="test">test</div>
        <div id="test">test2</div>
        <div id="deadmaster">master</div>
        <h1>Hello Github</h1>
        <h2>aaa</h2>
        <h2>aaa</h2>
      </div>
    );
  }
}

export default App;
