import "../Adrvise.css"
import { useState } from "react";

export const Advise = () => {
    const [advise,setAdvise]=useState("Don't be lazzy")
    const [count,setCount]=useState(0)
    const [neterr,setNeterr]=useState(false)

    const Content =()=>{
        return(
            <>
             <div className="content">
                <h3>{advise}</h3>
                <button onClick={getAdvise}>Get Adrvise</button>
                <p>You Gotted {count} Advise...!</p>
                </div>
            </>
        )
    }

    const NetworkError = () =>{
        return(
          <div className="error">
              <h3 className="error-h3"><img src="warning.png" alt="warning" className="error-img"/> Network Error !</h3>
              <button onClick={getAdvise}>refresh</button>
          </div>
        )
      }

    async function getAdvise() {
        try{
            const response = await fetch("https://api.adviceslip.com/advice")
            const data = await response.json()
            setAdvise(data.slip.advice)
            setCount(count+1)
            setNeterr(false)
        }

        catch(e){
            setNeterr(true)
        }
        
    }
  return (
    <div className="advirse-app">
        <div className="container">
            {neterr==true?<NetworkError/>:<Content/>}
            <div className="images">
                <img src="background-img-removebg-preview.png" alt="" />
            </div>
        </div>
    </div>
  )
}


