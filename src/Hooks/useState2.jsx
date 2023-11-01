import { useEffect } from "react"
import { useState } from "react"


const App = () => {
  const [name,setName]=useState("")
  useEffect(()=>{
  document.title= '${name}'
  })
  return (
    <div className="App">
      <input type="text" onChange={(e)=>setName(e.target.value)} />
      <h1>My name is{name}</h1>
    </div>
  )
}

export default App