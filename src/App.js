import React from 'react'

const Hello = () => {
  return (
    <div>
      <h1>Hello world this is shown from 'Hello' constant</h1>
    </div>
  )
}





const App = () => {
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
      <Hello />
    </div>
  )
}


export default App
