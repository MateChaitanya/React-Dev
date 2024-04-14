import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username:"Cahitanya",
    age:21
  }
  let newArr =[1,2,3]
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='w-96 bg-white shadow rounded text-black mb-4'>Tailwind Test</h1>
     <Card channel ="Funaurreact" someObj={newArr}/>
     <Card/>
     
    </>
  )

  
}

export default App
