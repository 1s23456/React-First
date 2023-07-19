import React, { useState } from "react";
import ClassCompo from "./HandsonFirst/ClassCompo";
import FuncCompo from "./HandsonFirst/FuncCompo";


function App (){
  const [fState,setfState]=useState(false);
  const [cState,setcState]=useState(false);
  console.log(fState);
  

  return (
    <>
    <h1 className="box">Styling using functional and  Class Component.</h1>
    <button onClick={()=> setfState(!fState)}>To see styling in function Components</button>
    <button onClick={()=>setcState(!cState)}>To see styling in Class Components</button>
<div className="ClassFunc">
    { fState ? <FuncCompo/> : " "}
   {cState ? <ClassCompo/> : " "}
   </div> 
   </>
  );
  }

export default App;

