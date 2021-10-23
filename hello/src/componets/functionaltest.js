import React, { useEffect, useState } from "react";

function Testcomponrt(){
    const [initial,valuechanged]=useState(0)
    useEffect(()=>{
console.log('use effect')
    },[])
    return(
        <div>
        <h1>Count {initial}</h1>
        <button id='button_click' onClick={()=>valuechanged(initial+1)}>click me</button>
        </div>
    )
}
export default Testcomponrt;