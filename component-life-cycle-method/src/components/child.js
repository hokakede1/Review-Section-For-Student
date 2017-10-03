import React, {Component} from 'react'

class Child extends Component{
    constructor(props){
        super(props)
        this.state = {
            hello: this.props.hello
        }
    }

    componentWillMount = () => {
      console.log("I am will mount")
    }
    componentWillReceiveProps = (nextProps) => {
      this.setState({
          hello: nextProps.hello
      })
    }
    
    componentDidMount = () => {
      console.log("I am did mount")
    }
    
    
    render(){
        return (
            <h1>{this.state.hello}</h1>
        )
    }
    
}




export default Child