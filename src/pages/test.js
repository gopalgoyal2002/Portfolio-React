import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser,clearAllUser } from '../store/slices/userSlice'

export default function Test() {
    const [name,setName]=useState("")
    const dispatch= useDispatch()
    const data=useSelector((state)=>{
            return state.users;
    })
    // console.log(data)
    const handleaddUser = (event)=>{
        event.preventDefault();
        console.log("User Added")
        dispatch(addUser(name))
    }
    const handleClearUser=()=>{
        console.log("all deleted")
        dispatch(clearAllUser())
    }
  return (
    <div>
        <form>
        <label>Enter user Name :</label>
        <input id='usrname' type='Text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={handleaddUser}>submit</button>
        </form>
        <div>
        {data.map((user,id)=>(
            <div key={id} className="user">{user}</div>
        ))}
        </div>
        <button onClick={handleClearUser}>delete all</button>

    </div>
  )
}
