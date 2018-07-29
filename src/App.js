import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './component/HelloStateless';
import HelloSatefull from './component/HelloStatefull';
import StateClock from './component/StateExample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Welcome Satish
        </p>
        <HelloWorld />
        <HelloSatefull title='Mr' name='Satish'/>
        <StateClock />
        
      </div>
    );
  }
}

export default App;
