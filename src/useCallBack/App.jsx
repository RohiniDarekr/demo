import {useState, useCallback} from "react"
const App = () => {
  const [count,setCount]=useState(0)
  const min = useCallback(
    ()=> {
      setCount(count-1)
    },
    [count]
  )
  return (
    <div>
         <h1>{count}</h1>
         <button onClick={()=>setCount(count+1)}>+</button>
         <button onClick={min}>-</button>
    </div>
  )
}

export default App