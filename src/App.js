import './App.css'
import Learn from './Learn';

function App() {
  const studentDetails = {
    name : "Mathi",
    rollno : "20IT029",
    dep : "B-tech IT",
    passedOut: 2024,
    skills:[
      "Html","CSS","Js","Bootstrap","Tailwind","React","Sql","GitHub"
    ],
}

const studentDetails1 = {
  name : "Arunboopathi",
  rollno : "20IT005",
  dep : "B-tech IT",
  passedOut: 2024,
  skills:[
    "Html","CSS","Js","Sql","GitHub"
  ],
}

  return (
    <div className='students'>
     <Learn data={studentDetails}/>
     <Learn data={studentDetails1}/>
     <Learn data={studentDetails1}/>
     <Learn data={studentDetails1}/>
     <Learn data={studentDetails1}/>
     <Learn/>
    </div>
  );
}

export default App;
