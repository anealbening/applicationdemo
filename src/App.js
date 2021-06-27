import React from 'react'
/* Code written by Aneal Bening. June 2021. Followed tutorial on fullstackopen.com (2021 tutorial).*/
const Hello = (props) => {
  return (
    <div>
      <h1>Hello {props.name}, you are {props.age} years old.</h1> 
    </div> /* Implemented props into code. */
  )
}


const App = () => { /* Demonstrates how values (e.g 'Name' and 'age' values) can be passed through so they can be used for props.*/
  const name = 'Peter'
  const age = 10
  const test = 'Name'
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Aneal Bening" age={20} /> 
      <Hello name={name} age={age} />
      <Footer /> 
      <p>Retrieving test constant variable {test}</p> 
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      app created by <a href="https://github.com/anealbening">Aneal Bening</a>
    </div>
  )
}


export default App
