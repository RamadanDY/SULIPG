import React, { useState } from 'react'
import './LoginSignup.css'/////this imports the css components from LoginSignup.css into this jsx
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import person_icon from '../Assets/person.png'
import { Link } from "react-router-dom";
import axios from 'axios'

const [name ,setname] = useState();
const [email ,setemail] = useState();
const [password ,setpassword] = useState();


// lets call a function and send the data to the server side using axios and put 
const handleSubmit = (e) => {
    e.preventDefault()
    // the {} parse the data into out db 
    axios.post('',{name,email,password})
    .then(result => console.log(result))
    .catch(error => console.log(error))

}


export const LoginSignup = () => {

  return (
    ////creating the html code for our component
    <div className='container md' onSubmit={handleSubmit}>
        <div className="header">
            <div className="text ">Sign-Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input" >
                <img src={person_icon} alt="" />
                <input type="text" placeholder='Name' autoFocus onChange={(e) => setname(e.target.value)}/>
            </div>
            <div className="input" >
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email id' onChange={(e) => (setemail(e.target.value))}/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="Password" placeholder='Password' onChange={(e) => (setpassword(e.target.value))}/>
            </div>
        </div>
        <div className="forgot-password">lost Password? <span>Click here</span></div>
        <div className="submit-container">
            <button className="submit"  type='submit'>Sign  Up</button>
            <Link to="/signup" className="submit"  type='submit'>Login</Link>
            
        </div>

    </div>
  )
}


