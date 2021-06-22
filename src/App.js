import React from 'react'
/* Code written by Aneal Bening. June 2021. Followed tutorial on fullstackopen.com (2021 tutorial).*/
const Hello = (props) => {
  return (
    <div>
      <h1>Hello world {props.name} this is shown from 'Hello' constant</h1> 
    </div> /* Implemented props into code. */
  )
}


const App = () => { /* This performs addition dynamically within the app and also passes in name through props in Hello constant.*/
  const now = new Date()
  const a = 10 
  const b = 20
  return (
    <div>
      <p>Hello world this is Aneal here.</p>
      <p>
        {a} + {b} is {a + b}
      </p>
      <p>This is an example of the ability to render dynamic content inside of a component within React.</p>
      <p>Created by Aneal Bening.</p> 
      <Hello name="Aneal" /> 
      <Hello name="Bening" />
    </div>
  )
}


export default App
