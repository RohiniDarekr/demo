import {useState,useMemo} from 'react'

const App = () => {
  const[count,setCount]=useState(0)
  const Power = () =>{
    return count**2
  }
  const memo = useMemo(()=> Power(count))
  return (
    <div>
            <h1>Count:{count}</h1>
            <h1>Power:{memo}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default App