import React from 'react'

function Child(props){
    console.log("THIS IS PROPS",props)
    return (
        <h1>{props.sayHello}</h1>
    )
}

export default Child