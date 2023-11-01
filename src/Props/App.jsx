import FunProps from "./Props/FunProps"
import ClassProps from "./Props/ClassProps"
const App = () => {
    const name="Rohini"
    const age=23
    
    function clicked(){
        document.body.style.background="red";
    }
  return (
    <div>
        <FunProps name = {name} age = {age} clicked={clicked}/>
        <ClassProps name={name} age = {age} clicked={clicked}/>
    </div>
  )
}

export default App