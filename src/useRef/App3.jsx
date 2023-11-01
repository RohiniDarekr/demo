import { useState,useRef } from "react"

const App = () => {
  const [play,setPlay]=useState("play")
 

const reference = useRef()

 function handleButton(){
  if(play==="play"){
  setPlay("pause")
  reference.current.play();
  }else{
    setPlay('play')
    reference.current.pause();
  }



 }

  return (
    <div>
      <button onClick={handleButton} >{play}</button>
      <video src="/Video/Cat.mp4" ref={reference} height={'400px'} controls></video>
    </div>
  )
}

export default App