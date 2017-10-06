import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      articles: []
    }
  }
  componentDidMount = () => {
    axios.get('http://localhost:8080/api/hello')
    .then(response => {
      console
      this.setState({
        articles: response.data.articles
      })
    })
  }
  
  render() {
    const news = this.state.articles.map(item => {
      return (
        <div>
          <h1>{item.title}</h1>
          <h5>{item.description}</h5>
        </div>
      )
    })
    return (
      <div className="App">
      {news}
      </div>
    );
  }
}

export default App;
