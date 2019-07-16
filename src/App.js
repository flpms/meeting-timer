import React, { Component } from 'react';
import './App.css';

import Input from './components/shared/input';
import Clock from './components/shared/clock';

class App extends Component {

  handleInputChange(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    return (
      <div className="App">
        <Input
          label="Tema"
          keyId="theme"
          onChange={this.handleInputChange.bind(this)}
        />
        <Input
          label="Responsavel"
          keyId="theme"
          onChange={this.handleInputChange.bind(this)}
        />
        <Clock
          totalTime='1'
          />
      </div>
    )
  };
}

export default App;
