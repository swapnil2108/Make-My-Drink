import React, { Component } from 'react';
import Header from './pages/Header';
import Random from './pages/Random';
import Footer from './pages/Footer';
import Intro from './pages/Intro'
class App extends Component {
  render() {
    return (
    <div className= "container-fluid">
      <div className = "topImg">
        <Header/>
      </div>
        <Intro/>
      <div className= "parallax"></div>
      <Random/>
      <Footer/>
    </div>
    );
  }
}

export default App;
