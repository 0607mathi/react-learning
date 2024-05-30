import React, { useState } from "react";
import './App.css'
export const UserInput = () => {
   const [name,setName]=useState("")
   const [rollno,setRollno]=useState("")
   const [dep,setDep]=useState("")
   const [passedOut,setPassedOut]=useState("")
   const [skills,setSkills]=useState("")

    // const Data={
    //         name:name,
    //         rollno:rollno,
    //         dep:dep,
    //         passedOut:passedOut,
    //         skills:skills
    //     }

   function Getdata(){
  
   }
   

  return (
    <div className="user-input">

         {/* Name */}
      <label htmlFor="name">Name</label>
      <input type="text" id="name"  name="name" value={name} placeholder="Enter your name" onChange={(e)=>{setName(e.target.value)}}/>

         {/* Rollno */}
      <label htmlFor="rollno">Rollno</label>
      <input type="text" id="rollno" name="rollno" value={rollno} placeholder="Enter your Rollno" onChange={(e)=>{setRollno(e.target.value)}}/>

         {/* Department */}
      <label htmlFor="department">Department</label>
      <input type="text" id="department"  name="department" value={dep} placeholder="Enter your Department"  onChange={(e)=>{setDep(e.target.value)}}/>

         {/* Passed Out */}
      <label htmlFor="passedOut">Passed out</label>
      <input type="number" id="passedOut"  name="passedOut" value={passedOut} placeholder="Enter your Passed out year"  onChange={(e)=>{setPassedOut(e.target.value)}}/>

         {/* Skills */}
      <label htmlFor="skills">Skills</label>
      <input type="text" id="skills"  name="skills" value={skills} placeholder="Enter your Skills"  onChange={(e)=>{setSkills(e.target.value)}}/>

        {/* Button */}
      <button className="add-card" onClick={Getdata}>Add card</button>

    </div>
  );
};
