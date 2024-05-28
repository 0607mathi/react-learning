import React from 'react'
import './App.css'

const studentDetails = {
    name : "Unknown",
    rollno : "Unknown",
    dep : "Unknown",
    passedOut: "Unknown",
}

function Learn({data=studentDetails}) {
    const {name,rollno,dep,passedOut}=data
  return (
    <div className='student-details'>
        <div>Student Details</div>
        <div>Name : {name} </div>
        <div>Roll no : {rollno} </div>
        <div>Dep : {dep}</div>
        <div>Year of passed out : {passedOut}</div>
    </div>
  )
}


// function StD(data = StD.st1) {
//     const {name,rollno,dep,passedOut}=data
//   return (
//     <div className='student-details'>
//     <div>Student Details</div>
//     <div>Name : {name} </div>
//     <div>Roll no : {rollno} </div>
//     <div>Dep : {dep}</div>
//     <div>Year of passed out : {passedOut}</div>
//     </div>
//   )
// }



export default Learn