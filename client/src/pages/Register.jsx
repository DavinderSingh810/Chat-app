import React from 'react'
import { useState } from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.svg"

function Register() {
  const [error, setError] = useState("");

  const [values,setvalues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
    const handleSubmit = (e) => {
        e.preventDefault();
        handleValidation();
        
    };
    const handleChange=(e)=>{
    
    setvalues({...values, [e.target.name]:e.target.value})
    }

    const handleValidation=()=>{
      console.log(values.password)
      console.log(values.confirmPassword)
      if(values.username.length<3){
        setError("username length can not be less than 3");
        return;
      }
      if (values.password !== values.confirmPassword) {
        setError("Passwords do not match!");
        return; // Prevent form submission
      }
      if(values.email==""){
        setError("Email Required");
        return;
      }
  
      setError(""); // Clear error if passwords match
      alert("Form submitted successfully");
    };
    
  return (
    <>
    <FormContainer>
   <form onSubmit={(e)=>handleSubmit(e)}>
    <div className='brand'>
      <img src={Logo} alt="Logo" />
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
    name='confirmPassword'
    onChange={(e)=>handleChange(e)}
    />
    {error && <p style={{ color: 'red' }}>{error}</p>}
   <button type='submit'> Create User</button>
    <span>
        Already have an account? <Link to="/login">Login</Link>
    </span>

   </form>
    
    </FormContainer>
    </>
  )
}
const FormContainer = styled.div`
  
  width: 100vw;
  height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
    

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
     

  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #997af0;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
    
`;


export default Register

