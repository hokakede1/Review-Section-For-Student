import React, { Component } from 'react';
import './App.css';
import Article from './components/Article'
import axios from 'axios';

class App extends Component {
  constructor(){
    super()

    this.state = {
      articles: []
    }
    // this.getData = this.getData.bind(this)
  }


  componentWillMount(){
    axios.get('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=9618a7c6df4946c0b5ba0da63ea1448a')
      .then(response => {
        // console.log(response.data.articles)
        this.setState({
          articles: response.data.articles
        })
      })
  }

  render() {
    console.log(this.state.articles)
    var news = this.state.articles.map((article) => {
      return (
        <Article title={article.title} subtitle={article.description} imageUrl={article.urlToImage} url={article.url}/>
      )
    })
    return (
      <div className="App">
        {news}
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
