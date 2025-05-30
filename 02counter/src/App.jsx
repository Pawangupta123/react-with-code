import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)
  //let counter = 15;
  const addValue = () => {
    console.log('clicked', counter);
    
   //counter= counter+1;
   setCounter(counter+1);
    
  }
  const Decrease= ()=> {
    if(counter>0){
      setCounter(counter-1)
    }else {
      console.log("invalid data");
      alert('invalid data')
      
    }
    
  }

  return (
    <>
      <h1>Chai and React</h1>
      <h2>Counter value:{counter}</h2>
      <button
      onClick={addValue}>Increase{counter}</button>
      <br/>
      <button
      onClick={Decrease}>Decrease{counter}</button> 
      <p>footer{counter}</p>
      
    </>
  )
}

export default App
