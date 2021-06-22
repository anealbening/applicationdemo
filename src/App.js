import React from 'react'
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
    </div>
  )
}

export default App
