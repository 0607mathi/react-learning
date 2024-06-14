import React, { useState } from 'react'
import './TNPSC_style.css'
export const TNPSC_Counter = () => {
    const [a,setA]=useState(0)
    const [b,setB]=useState(0)
    const [c,setC]=useState(0)
    const [d,setD]=useState(0)
    const [qa,setQA]=useState(101)
    const [opt,setOpt]=useState("")
  return (
    <>
   
    <div className='Counter'>
        <div>TNPSC_Counter <br /> <br /> Question No : {qa}</div>
        <div className="btns">
        <div className='opt'>
           
            <button onClick={()=>{setA(a+1);setQA(qa+1);setOpt("A")}}>Option A</button>
           
        </div>
        <div className='opt'>
            
            <button onClick={()=>{setB(b+1);setQA(qa+1);setOpt("B")}}>Option B</button>
         
        </div>
        <div className='opt'>
           
            <button onClick={()=>{setC(c+1);setQA(qa+1);setOpt("C")}}>Option C</button>
            
        </div>
        <div className='opt'>
            
            <button onClick={()=>{setD(d+1);setQA(qa+1);setOpt("D")}}>Option D</button>
        
        </div>
        
        </div>
        <div className="clicked">
        Question no {qa-1} : {opt}
    </div>
        <button onClick={()=>{setA(0);setB(0);setC(0);setD(0);setQA(1)}}>Clear</button>
        <div className="counts">
            <div> <p>A option : {a}</p>  <button onClick={()=>{setA(a-1);setQA(qa-1)}}>Eraser</button> </div>
            <div> <p>B option : {b}</p>  <button onClick={()=>{setB(b-1);setQA(qa-1)}}>Eraser</button> </div>
            <div> <p>C option : {c}</p>  <button onClick={()=>{setC(c-1);setQA(qa-1)}}>Eraser</button> </div>
            <div> <p>D option : {d}</p>  <button onClick={()=>{setD(d-1);setQA(qa-1)}}>Eraser</button> </div>
        </div>
        
    </div>
    </>
  )
}
