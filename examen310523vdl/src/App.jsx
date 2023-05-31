import { useState } from 'react'
import './App.css'
import Tarjeta from './Components/Tarjetas'

function App() {
  
  const [name, setName] = useState("")
  const [date, setDate] = useState(null)

  return (
    <>
      
      <label> Nombre </label><br></br>
      <input type="text" onChange={(e) => setName(e.target.value)} />

      <br></br><br></br>

      <label> Fecha de nacimiento</label><br></br>
      <input type="date" onChange={(e) => setDate(e.target.value)}/>

      <br></br><br></br>
      
      <Tarjeta name={name}/>
    </>
  )
}

export default App
