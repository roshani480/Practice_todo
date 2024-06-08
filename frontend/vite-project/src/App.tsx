import { useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {

  const[inputtask,setInputtask] = useState("")
const changeHandler =(e) => {
setInputtask(e.target.value)
}

  const submitHandler = (e) => {
e.preventDefault();
 axios.post("http://localhost:8000/api/addtask",{task:inputtask} )
.then(() => {
  setInputtask("")
})
console.log(inputtask)
 }


  return (
    <>
    <form onSubmit={submitHandler}>
      <input type="text" onChange={changeHandler} value={inputtask}/>
      <button type="submit"> + </button>
    </form>

    <div className="list">
        <li>go to office</li>
    </div>
      
    </>
  )
}

export default App
