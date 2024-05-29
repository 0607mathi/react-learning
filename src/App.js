import './App.css'
import Learn from './Learn';

const Data =[
   {
    name : "Mathi",
    rollno : "20IT029",
    dep : "B-tech IT",
    passedOut: 2024,
    skills:[
      "Html","CSS","Js","Bootstrap","Tailwind","React","Sql","GitHub"
    ],
  },
   {
    name : "Arunboopathi",
    rollno : "20IT005",
    dep : "B-tech IT",
    passedOut: 2024,
    skills:[
      "Html","CSS","Js","Sql","GitHub"
    ],
  },
   {
    name : "Sowmiyan",
    rollno : "20IT0056",
    dep : "B-tech IT",
    passedOut: 2024,
    skills:[
      "Html","CSS","Js","Sql","GitHub"
    ],
  }
]

function App() {
  return (
    <div className='students'>
     {Data.map((details, index) => (
        <Learn key={index} Details={details} />
      ))}
    </div>
  );
}

export default App;
