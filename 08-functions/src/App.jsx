import React from 'react'

const App = () => {

  function btnClicked(){
    console.log('button is clicked');
  }



  return (
    <div>
      <h1>Hello</h1>
      <button onClick={btnClicked()}>change</button>
    </div>
  )
}

export default App
