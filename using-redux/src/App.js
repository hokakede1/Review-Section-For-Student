import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showName} from './ducks/reducer';


class App extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>{`My name is ${this.props.name}`}</h1>
        <button onClick={() => this.props.showName("Huy Dang")}>Click here to see my full name</button>
      </div>
    );
  }
}

function mapStateToProp(state){
  return {
    name: state.name
  }
}

export default connect(mapStateToProp,{showName})(App);
