import React from 'react'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import './Signup.css'
import { Link } from "react-router-dom";





const Signup = () => {
    // holds the value when it changes 
    const [registerEmail,setRegisterEmail] =  useState("");
    const [registerPassword, setRegisterpassword] =  useState("");
    const [loginEmail,setLoginEmail] =  useState("");
    const [loginPassword,setLoginPassword] =  useState("");



    // we create a few new functions 
    const register = async ( ) => {}
    const login = async ( ) => {}
    const logout = async ( ) => {}






  
  return (
    <div className='container md'>
        <div className="header">
            <div className="text ">Log-In</div>
            <div className="underline"></div>
            
        </div>
        <div className="inputs">
            <div className="input" >
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email id' onChange={(event) => {setRegisterEmail(event.target.value)}}/>
                
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="Password" placeholder='Password' />
            </div>
        </div>
        <div className="forgot-password">lost Password? <span>Click here</span></div>
        <div className="submit-container">
            <Link to='/' className="submit"  type='submit'>Log In</Link> 
        </div>

    </div>
  )
}

export default Signup