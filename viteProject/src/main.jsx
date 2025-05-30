import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'

function Myapp(){
  return (
    <div>
      <h2>My appp!</h2>
    </div> 
   )
}
// const ReactFunction = {
//     type: 'a',
//     props:{
//         href: 'https://react.dev',
//         target: '_blank'
//     },
//     Children: 'mera name bona hai'
// }

const anthoerEle =(
  <a href="https://react.dev" target="_blank">Visit React </a>
)
const AnotherUser = "Mai hi ho jinyan";

const ThreeEle = React.createElement(
  `a`,
  { href: 'https://react.dev', target: '_blank' },
  'Visit React Three Ele', AnotherUser
)

createRoot(document.getElementById('root')).render(
 
    //<App/>
    ThreeEle
  
)
