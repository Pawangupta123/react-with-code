import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './component/Cart'
//import "tailwindcss";

function App() {
  const [count, setCount] = useState(0)
  const myObj = {
    name:'pawan',
    age:30
  }

  return (
    <>
    <h1 className="bg-green-400 text-black  p-4 rounded-xl mb-4">telwind test</h1>
    <Cart UserName ='chai aur code' btnText='click me'/>
    <Cart UserName='gupta' btnText = 'Visit me'/>
    </>
  )
}

export default App
