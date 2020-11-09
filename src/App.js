import './App.css';
import React, {Component}from 'react'

import Navbar from './components/navbar'
import MainContainer from './components/main'

class App extends Component{

  
  render(){


    return (
      <div className="App">
        <Navbar />
        <MainContainer />
      </div>
    );
  }
  
}
  
export default App;
