import { useState } from 'react'


function App() {
  
// let counterVal=0

const [counterVal, setCounterVal] = useState(0)

const increaseVal=()=>{
  if(counterVal===20)
    return
  setCounterVal(counterVal+1)
}

const decreaseVal=()=>{
  if(counterVal===0) return
  setCounterVal(counterVal-1)
}
  return (
    <>
      <h1>Counter</h1>
      <h4>Counter value: {counterVal}</h4>
      <div className='btns'>
        <button onClick={increaseVal}>Increase</button>
        <button onClick={decreaseVal}>Decrease</button>
      </div>
    </>
  )
}

export default App
