import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './components/child';

class App extends Component {
  constructor(){
    super()
    this.state = {
      greeting: "Hello"
    }
    this.changeToGoodbye = this.changeToGoodbye.bind(this)
  }

  changeToGoodbye(){
    this.setState({
      greeting: "Goodbye"
    })
  }



  render() {
    return (
      <div>
        <Child hello={this.state.greeting}/>\
        <button onClick={this.changeToGoodbye}>Change to Goodbye</button>
      </div>
    );
  }
}

export default App;
