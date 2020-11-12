import './App.css';
import React, {Component}from 'react'

import Navbar from './components/navbar'
import Counter from './components/counter'
import CounterHook from './components/counterhooks'
import Gifs from './components/gif'

import './styles/styles.css'

class App extends Component{
  constructor(){
    super()
    this.state = {
      gifs: [],
      search: ""
    }
  }
  fetchGifs = (keyword) => {
    fetch(`https://api.tenor.com/v1/random?q=${keyword}&key=RZ9CK7CM0HN4`)
    .then(response => response.json())
    .then(data => {this.setState({
      gifs:data.results
    })
    console.log(data)
  })
  }  

  handleChange =(e)=>{
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit = () => {
    this.fetchGifs(this.state.search)
  }


  componentDidMount(){
  }
  render(){
    return (
      <div className="App">
        <div className = "searchBox">
          <label className = "title">GIF GENERATOR</label>
          <input className = "search-input" type = "text" onChange = {this.handleChange} value = {this.state.search}></input>
        </div>
        <button className = "search-button"onClick = {this.handleSubmit}>Search</button>
        <Gifs data = {this.state.gifs}/>
      </div>
    );
  }
  
}
  
export default App;
