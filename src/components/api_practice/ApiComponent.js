import React, { useState } from 'react'

const ApiComponent = () => {

    const[value,setValue] = useState('');
    const[username,setUsername] = useState('');
    const[email,setEmail] = useState('');

    const HandelUserClick = () =>{
        alert("just click")
    }
    const HandelUsernameChange = (e)=>{
        setUsername(e.target.value)
    }
    const HandelEmailChange = (e)=>{
        setEmail(e.target.value)
    }
  return (
    <div>
        <button onClick={HandelUserClick}>click me</button>
        <div>
            <dl>   
                <dt> Username</dt>
                <dd><input type="text" onChange={HandelUsernameChange}  /></dd>
                <dt>Email</dt>
                <dd><input type="email" onChange={HandelEmailChange} /></dd>

            </dl>
            <p>username is {username} and his/her email id is {email}</p>
        </div>
    </div>
  )
}


export default  ApiComponent