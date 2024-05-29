import React from 'react'
import './App.css'

// const studentDetails = {
//     name : "Unknown",
//     rollno : "Unknown",
//     dep : "Unknown",
//     passedOut: "Unknown",
//     skills:[],
// }

function Learn(props) {
    const{name,rollno,dep,passedOut,skills}=props.Details
  return (
    <div className='student-details'>
        <div>Student Details</div>
        <div>Name : {name} </div>
        <div>Roll no : {rollno} </div>
        <div>Dep : {dep}</div>
        <div>Year of passed out : {passedOut}</div>
        <div>skills</div>
        <ul className='skills'>
        {skills.map((skills,index)=>(
        
                <li key={index}>{skills}</li>
            
        ))}
        </ul>
        {/* {console.log(props.Details.name)} */}
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