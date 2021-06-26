import React from 'react'
/* Code written by Aneal Bening. June 2021. Followed tutorial on fullstackopen.com (2021 tutorial).*/
const Hello = (props) => {
  return (
    <div>
      <h1>Hello {props.name}, you are {props.age} years old.</h1> 
    </div> /* Implemented props into code. */
  )
}


const App = () => { /* This performs addition dynamically within the app and also passes in name through props in Hello constant.*/
  const name = 'Peter'
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Aneal Bening" age={20} /> 
      <Hello name={name} age={age} />
      <Footer />
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
