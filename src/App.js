import React, { Component } from 'react';
import Header from './pages/Header';
import Random from './pages/Random';
import Footer from './pages/Footer';
import Intro from './pages/Intro';
import About from './pages/About'
import DrinkSearch from './pages/DrinkSearch'

class App extends Component {
  render() {
    return (
      <DrinkSearch/>
    // <div className= "container-fluid">
    //   <div className = "topImg">
    //     <Header/>
    //     <input placeholder="Search for a drink"></input>
    //   </div>
    //     <Intro/>
    //   <div className= "parallax"></div>
    //   <Random/>
    //   <div className = "bottomImg text-center">
    //     <About/>
    //   </div>
    //   <Footer/>
    // </div>
    );
  }
}

export default App;
