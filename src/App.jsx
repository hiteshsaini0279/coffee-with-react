import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15);
// let counter = 15;
const  addValue= ()=>{
  console.log("is working",counter);
  counter= counter+1;
  setCounter(counter);
}
const removeValue=()=>{
counter=counter-1;
setCounter(counter);
}
  return (
    <>
      
      <h1> Hitesh saini</h1>
      <h2>  Counter:{counter}</h2>
      <button onClick={addValue}>Add value </button>
      <br></br>
      <button onClick={removeValue}> Decrease the value</button>
      <p> footer:{counter}</p>
    </>
  )
}

export default App
