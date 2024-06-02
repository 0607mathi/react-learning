import {useState} from 'react'

export const Cart = () => {
const[count,setCount]=useState(0)
const clickHandle = () =>{
    setCount(count+1)
}
  return (
  <>
    <div>Your Cart : {count} </div>
    <button onClick={clickHandle}>Add cart {count}</button>
    </>
  )
}
