import React, { Component } from 'react';
import logo from './logo.svg';
import {TimelineMax, TweenMax, Elastic} from 'gsap'
import './App.css';
// import axios from 'axios';


var tl = new TimelineMax({
  repeat:-1
});
let animation = new TimelineMax({
      repeat:1,
      yoyo:true
    })


class App extends Component {
  constructor(){
    super()

    this.state = {
      paused:true,
    }
  }
  componentDidMount() {
    tl.add( TweenMax.to('.test', 1, {backgroundColor: 'blue'}))
    tl.add( TweenMax.to('.test', 1, {backgroundColor: 'yellow'}))
    tl.add( TweenMax.to('.test', 1, {backgroundColor: 'green'}))
    tl.add( TweenMax.to('.test', 1, {backgroundColor: 'red'}))
    tl.add( TweenMax.to('.test', 1, {backgroundColor: 'orange'}))
    tl.pause();
  


    animation.staggerTo('.div', 2, {backgroundColor:'orange', ease:Elastic.easeOut}, .3)
    .staggerTo('.div', 3, {width:'200px', ease:Elastic.easeOut}, .3)
  }


  animate(event) {
    if (this.state.paused) {
      tl.resume() 
      this.setState({
        paused:false,
      })
    } else {
      tl.pause()
      this.setState({
        paused:true,
      })
    }
  }


  render() {
    return (
      <div className="App">
        <div onClick={(e)=>{this.animate(e)}} className='test'>Test div</div>
        <div className='div'>A</div>
        <div className='div'>B</div>
        <div className='div'>C</div>
        <div className='div'>D</div>
        <div className='div'>E</div>
        <div className='div'>F</div>
      </div>
    );
  }
}

export default App;
