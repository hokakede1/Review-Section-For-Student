import React, { Component } from 'react'

export class Display extends Component {
  render() {
    return (
      <div>
        <a href={this.props.url}>
        <img src={this.props.imgUrl}/>
        <h1>{this.props.title}</h1>
        <h5>{this.props.description}</h5>
        </a>
      </div>
    )
  }
}

export default Display
