import React, { useState } from 'react'

const SendMessage = () => {
    const[to,setTo] = useState("sourav");
    const[msg,setMsg] = useState("hello");
  return (
    <div>
        <select value={to} onChange={(e)=>{setTo(e.target.value)}}>
            <option value="sourav">sourav</option>
            <option value="sambit">sambit</option>
        </select>
        <textarea name="" value={msg} id="" cols="30" rows="10" onChange={(e)=>{setMsg(e.target.value)}} ></textarea>
        <button onClick={()=>{alert(`${msg}  ${to}` )}}>Send</button>
    </div>
  )
}

export default SendMessage