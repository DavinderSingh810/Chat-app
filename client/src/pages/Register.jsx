import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.svg"

function Register() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("form");
    };
    const handleChange=(e)=>{

    }
  return (
    <>
    <Formcontainer>
   <form onSubmit={(e)=>handleSubmit(e)}>
    <div><img src={Logo} alt="Logo" />
    <h1>Chatup</h1>
    
    </div>
    <input type="text" 
    placeholder='Username'
    name='username'
    onChange={(e)=>handleChange(e)}
    />
    <input type="email" 
    placeholder='Email'
    name='email'
    onChange={(e)=>handleChange(e)}
    />
    <input type="password" 
    placeholder='Password'
    name='password'
    onChange={(e)=>handleChange(e)}
    />
    <input type="password" 
    placeholder='Confirm Password'
    name='confirmpassword'
    onChange={(e)=>handleChange(e)}
    />
    
   <button type='submt'> Create User</button>
    <span>
        Already have an account? <Link to="/login">Login</Link>
    </span>

   </form>
    
    </Formcontainer>
    </>
  )
}
const Formcontainer=styled.div``


export default Register