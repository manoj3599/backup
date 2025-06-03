import './App.css'
import { useState } from 'react'

function Emplyee(){
/*use state Example*/
  /*const[getage,setAge] = useState(56)
  const   UpdateAgeDetails = ()=>{
    setAge(20)
  }
  let age = 56
  return <div id="Heading" className="HeadingDETAILS">
   <div>{getage}</div>
  <button onClick={UpdateAgeDetails}>Submit</button>
  </div>*/


  /*to make it tue or false to execute */
const [getFlag, setFlag] = useState(false)
const   UpdateHandler = ()=>{
  setFlag(true)
}
return <div id="Heading" className="HeadingDETAILS">
   
  <button onClick={UpdateHandler}>Click here</button>
  {getFlag && <p>Welcome to js</p>}
  </div>

}

export default Emplyee;
//Emplyee function name