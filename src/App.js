import "./App.css";
import Learn from "./Learn";
import { UserInput } from "./UserInput";

const Data = [
  {
    name: "Mathi",
    rollno: "20IT029",
    dep: "B-tech IT",
    passedOut: 2024,
    skills: [
      "Html",
      "CSS",
      "Js",
      "Bootstrap",
      "Tailwind",
      "React",
      "Sql",
      "GitHub",
    ],
  },
  
];

function App(props) {

  return (
    <>
    <div className="input-box">
      <UserInput />
    </div>

      <div className="students">
        {Data.map((data, index) => (
          <Learn key={index} studentData={data} />
        ))}
      </div>
    </>
  );
}

export default App;
