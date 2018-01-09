import React, { Component } from 'react';
import Random from './pages/Random';
import Header from './pages/Header';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header/>
        <Random/>
      </div>

    );
  }
}

export default App;
