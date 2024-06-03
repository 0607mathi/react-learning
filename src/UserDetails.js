import {useState} from 'react'
import './index.css'

export const UserDetails = () => {
   const [data,setData]=useState({fname:"Mathi",lname:"yarasu",age:21})

    // const changeName = (e) => {
    // //    const changeObject = {...data};
    // //    changeObject.name=e.target.value
    // //    setData(changeObject)

    //         // setData((oldData)=>{
    //         //     return{...oldData, name:e.target.value}
    //         // })

    

    // }
    // const changeAge = (e) =>{
    // //     const changeObject = {...data};
    // //    changeObject.age=e.target.value
    // //    setData(changeObject)

    //     // setData((oldData)=>{
    //     //     return{...oldData, age:e.target.value}
    //     // })
    // }

    const changeHandle = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }
    return (
    <>
        <div>User Details</div>
        <h3>{data.fname} {data.lname}, {data.age}</h3>
        <input type="text" placeholder='Enter your First name' value={data.fname} name="fname" onChange={changeHandle}/>
        <input type="text" placeholder='Enter your Last name' value={data.lname} name="lname" onChange={changeHandle}/>
        <input type="number" placeholder='Enter your age' value={data.age} name="age" onChange={changeHandle}/>
        <button >Change</button>
    </>
  )
}
  