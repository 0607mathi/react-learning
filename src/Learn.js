import './App.css'

const Details = {
    name : "Unknown",
    rollno : "Unknown",
    dep : "Unknown",
    passedOut: "Unknown",
    skills:[],
}

function Learn(props) {
  // Destructured props and defalut data
const{name,rollno,dep,passedOut,skills}=props.studentData || Details

  return (
    <div className='student-details'>
        <div>Student Details</div>
        <div>Name : {name} </div>
        <div>Roll no : {rollno} </div>
        <div>Dep : {dep}</div>
        <div>Year of passed out : {passedOut}</div>
        <div>skills</div>
        <ul className='skills'>
            {skills.map((skills,index)=>(<li key={index}>{skills}</li>))}
        </ul>
    </div>
  )
}

export default Learn