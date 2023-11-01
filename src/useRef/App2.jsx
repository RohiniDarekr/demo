import {useRef} from 'react'

const App = () => {
  const inputElement =useRef()

  function focus(){
    inputElement.current.focus()
  }
  return (
    <div>
      <input ref={inputElement} />
      <button onClick={focus}>Focus Input</button>
    </div>
  )
}

export default App