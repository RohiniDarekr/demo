import  { useState } from "react"

function App (){
    const[count,setCount]=useState(0)
    const[color,setColor]=useState('red')
    const[msg,setMsg]=useState('subscribe')
  return (
    <div className="App">
         <h1>Counter</h1>
         <h2 style={{color:'${color}',backgroundClip:'black'}}>{count}</h2>
         <button onClick={()=>setCount(count+1)}>+</button>
         <button onClick={()=>setCount(count-1)}>-</button>

         <button onClick={()=>setColor('green')}>color</button>
         <button onClick={()=>setMsg('subscribed')}>{msg}</button>
    </div>
  )
}

export default App