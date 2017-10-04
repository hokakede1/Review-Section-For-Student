import React, { Component } from 'react'

export class Article extends Component {

  render() {
      console.log(this.props)
    return (
      <div className="huy-style">
          <a href={this.props.url}>
          <img src={this.props.imageUrl}/>
          <h1>{this.props.title}</h1>
          </a>
          <h5>{this.props.subtitle}</h5>
      </div>
    )
  }
}

export default Article
