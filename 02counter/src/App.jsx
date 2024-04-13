import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)


  //let counter = 15;

  const addValue = () => {
    console.log("Clicked",counter);
    counter = counter + 1
    setCounter(counter)
  }

  const removevalue = () =>{
    console.log("Clicked",counter);
    counter = counter - 1
    setCounter(counter)
  }

  return (
    <>
       <h1>Fun With React</h1>
       <h2>Counter Value : 5 </h2>

        <button onClick={addValue}>Add Value{counter}</button>
       <br />
       <button onClick={removevalue}>Remove Value{counter}</button>

    </>
  )
}

export default App
