import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Display from './Display'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      artical: []
    }
    this.getNews = this.getNews.bind(this)
  }

  getNews(){
    axios.get('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=9618a7c6df4946c0b5ba0da63ea1448a')
    .then(response => {
      this.setState({
        artical: response.data.articles
      })
    })
  }



  render() {
    console.log(this.state.artical)
    var news = this.state.artical.map((item) => {
      return (
        <Display title={item.title} imgUrl={item.urlToImage} description={item.description} url={item.url}/>
      )
    })
    return (
      <div>
        <button onClick={this.getNews}>Get me news</button>
        {news}
      </div>
    );
  }
}

export default App;
