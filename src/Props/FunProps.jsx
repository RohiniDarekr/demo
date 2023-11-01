const FunProps = (props) => {
  return (
    <div>
        <h1>My name is {props.name} and my age is {props.age}</h1>
        <button onClick={props.clicked}>click</button>
    </div>
  )
}

export default FunProps