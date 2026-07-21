import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  function increase(){
    setNum(num+1)
  }
  function dec(){
    setNum(num-1)
  }

  

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={dec} >decrease</button>
    </div>
  )
}

export default App
