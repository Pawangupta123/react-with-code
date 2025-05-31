import { useState } from 'react'
import './App.css'

function App() {
  const [Color, setColor] = useState('olive')

  return (
    
    <div className="w-full h-screen duration -200"
    style={{backgroundColor: Color}}
    >
      <div className='fixed flex flex-wrap
      justify-center bottam-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg background-white rounded-lg px-3 py-2'
        ><button
        onClick={() => setColor('Red')}
         className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
         style={{backgroundColor:'red'}} >Red</button>
         <button
         onClick={() => setColor('green')}
         className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
         style={{backgroundColor:'green'}} >Green</button>
         <button
         onClick={() => setColor('blue')}
         className='outline-none px-4 py-1 rounded-full text-White shadow-lg'
         style={{backgroundColor: "blue"}} >Blue</button>

        </div>
      </div>
    </div>
    
  )
}

export default App
