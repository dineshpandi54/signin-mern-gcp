import React, { useState } from "react";
import './signup.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";


const Signup = () => {

  const navigate = useNavigate();

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();       
  
  const API_URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault()  
    await axios.post(`${API_URL}/register`, { name, email, password })
    .then(result => {console.log(result)
     navigate('/login')
    })
    .catch(err => console.log(err))
};

  return (
      <div className="bg-container">
      <div className="signup-page">
        <h3 className="signup-title">Register</h3>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name :</label>
            <input type="text" placeholder="Enter Your Name" required onChange={(event)=>setName(event.target.value)}/>

            <label htmlFor="email">Email :</label>
            <input type="email" placeholder="Enter Your Email" required onChange={(event)=>setEmail(event.target.value)}/>

            <label htmlFor="password">Password :</label>
            <input type="password" placeholder="Enter Password" required onChange={(event)=>setPassword(event.target.value)}/>

            <button type="submit" className="btn  signup-btn">
              Sign Up
            </button>
            </div>
        </form>

        <div className="signin">
          <p>Already have an Account ?</p>
          <Link to="/login" type="button">
            Login
          </Link>
        </div>
      </div>
      </div>  
  );
};

export default Signup;
