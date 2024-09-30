import React, { useState } from "react";
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Logo from "../assets/logo.svg";

function Login() {
    const [error, setError] = useState("");
    const [values, setValues] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (handleValidation()) {
            const { password, username } = values;

            try {
                const { data } = await axios.post(loginRoute, {
                    username,
                    password,
                });

                console.log('Login successful:', data);
                
                // / Redirect to the chat page upon successful login
                // if (data.token) {
                    // localStorage.setItem("token", data.token); // Store token if you are using one
                    navigate("/chat"); // Use navigate to redirect
                // } else {
                //     setError("Login failed. Please try again.");
                // }

            } catch (error) {
                console.error('Error during login:', error);
                setError("Login failed. Please check your credentials.");
            }
        } else {
            console.log('Validation failed');
        }
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleValidation = () => {
        if (values.username.length === 0) {
            setError("This field cannot be empty");
            return false;
        }
        if (values.password.length === 0) {
            setError("This field cannot be empty");
            return false;
        }

        setError(""); // Clear error if validations pass
        return true;
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <div className='brand'>
                    <img src={Logo} alt="Logo" />
                    <h1>Chatup</h1>
                </div>
                <input
                    type="text"
                    placeholder='Username'
                    name='username'
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder='Password'
                    name='password'
                    onChange={handleChange}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type='submit'>Login</button>
                <span>
                    Do not have an account? <Link to="/register">Register</Link>
                </span>
            </form>
        </FormContainer>
    );
}

const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;
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

export default Login;
