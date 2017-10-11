import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';


class App extends Component {
  constructor(){
    super()

    this.state = {
      name: '',
      input: ''
    }
  }



  componentDidMount = () => {
    axios.get('http://localhost:8080/api/getName')
    .then(response => {
      this.setState({
        name: response.data
      })
    })
  }


  onInputChange(e){
    
  }
  


  render() {
    return (
      <div className="App">
        <h1>My cat name is:</h1>
        <h1>{this.state.name}</h1>
        <input onChange={this.onInputChange}/>
      </div>
    );
  }
}

export default App;
