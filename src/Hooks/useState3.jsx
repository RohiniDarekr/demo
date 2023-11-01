import { useEffect,useState } from "react"


const App = () => {
  const [name,setName]=useState('a')
  useEffect(()=>{
  document.title= '${name}'
  })
 


  return (
    <div>
      <h1>{name}</h1>
    <button onClick={()=>{SVGAnimateTransformElement("rohini darekar")}}>Click</button>
    </div>
  )
}

export default App