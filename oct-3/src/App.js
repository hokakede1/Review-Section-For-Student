import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './component/Child'

class App extends Component {
  constructor(){
    super()
    this.state = {
      hello: "Hello"
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({
      hello: "Goodbye"
    })
  }
  

  render() {
    return (
      <div className="App">
        <Child sayHello={this.state.hello} sayGoodBye={"Goodbye"} />
        <button onClick={this.handleClick}>Change to Goodbye</button>
      </div>
    );
  }
}

export default App;
