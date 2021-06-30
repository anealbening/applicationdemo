import React from 'react'
/* Code written by Aneal Bening. June 2021. Followed ReactJS tutorial on fullstackopen.com (2021 tutorial).*/
const Hello = (props) => { /*Implemented guessing year of birth into code */
  const name = props.name /* created variable which assigns constant 'name' to props.name (destructuting) */
  const age = props.age /* created variable which assigns constant 'age' to props.name (destructuring) */
  const bornYear =() => { 
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }
  return (
    <div>
      <h1>Hello {name}, you are {age} years old.</h1> 
      <p>So you were probably born in {bornYear()}</p> 
    </div> /* Implemented props into code. */
  )
}


const App = () => { /* Demonstrates how values (e.g 'Name' and 'age' values) can be passed through so they can be used for props.*/
  const name = 'Peter'
  const age = 50
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Aneal Bening" age={20} /> 
      <Footer /> 
    </div>
  )
}

const Footer = () => { /*Footer area which will be at the bottom of the React web page */
  return (
    <div>
      app created by <a href="https://github.com/anealbening">Aneal Bening</a> 
    </div>
  )
}


export default App
