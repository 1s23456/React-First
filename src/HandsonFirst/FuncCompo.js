import React ,{Component}from "react";
import '../Style.css';


function FuncCompo (){
  return(
    <div className='components'>
              <div className="functional">
              <h1 className="head" >This is created using functional Component</h1>
              <p className="para">This is done by External CSS</p>
              <p style={{color:'blue'}}>This is done by Internal CSS</p>
              </div>
              </div>
              
  )
}

export default FuncCompo;