import './login.css'
import { useState } from "react";

import axios from "axios";
import { Link } from 'react-router-dom';


function Signup(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState(""); 
    const [res,setRes] = useState("");
 
 const handelSubmit = (e:any)=>{
    e.preventDefault();
    const userData = {
       email: email,
       password: password,
       name:name
    };
    axios.post("http://localhost:1234/login/user/add",userData)
    .then((res)=>{
      if(res.data != null){
        setEmail("");
        setPassword("");
        setName("");
        setRes("Success")

      }
       else{
        console.log("failure")
       }
    })
 }
    return<div>
         <div className="container">
        <h2>Sign Up for Pet Paradise</h2>
        <form id="signupForm"  onSubmit={handelSubmit} className='form-control'>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Choose a password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="fullname">Full Name:</label>
            <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" required 
            onChange={(e)=>setName(e.target.value)}
            />

        </div>

          <button type="submit" className="btn btn-outline-success w-25" >
            Sign Up
          </button>
          <p className='res'>{res}</p>
        </form>
        <div className="login-link">
            <Link to="/login"><a href="login.html">Already have an account? Login</a></Link>
        </div>
        
      </div>
    </div>
}
export default Signup;